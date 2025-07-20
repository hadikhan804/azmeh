from typing import TypedDict, Annotated, Optional, Any, Dict
from typing_extensions import Required
from langchain_core.messages import HumanMessage, AIMessage
from langchain_community.chat_models import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langgraph.graph import Graph, END
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Define custom ChatOpenAI wrapper for OpenRouter
class OpenRouterChat(ChatOpenAI):
    def __init__(
        self,
        model: str = "anthropic/claude-2",  # Default model
        temperature: float = 0.7,
        openrouter_api_key: Optional[str] = None,
        **kwargs: Any
    ):
        api_key = openrouter_api_key or os.getenv("OPENROUTER_API_KEY")
        if not api_key:
            raise ValueError("OpenRouter API key not found. Please set OPENROUTER_API_KEY environment variable.")
        
        super().__init__(
            model=model,
            temperature=temperature,
            openai_api_base="https://openrouter.ai/api/v1",
            openai_api_key=api_key,
            **kwargs
        )

    def _create_message_dicts(
        self, messages: list[HumanMessage | AIMessage], **kwargs: Any
    ) -> Dict[str, Any]:
        message_dict = super()._create_message_dicts(messages, **kwargs)
        # Add OpenRouter specific headers
        message_dict["headers"] = {
            "HTTP-Referer": "http://localhost:8000",  # Your site URL
            "X-Title": "LangGraph Agent"  # Your app name
        }
        return message_dict

# Define the state using TypedDict
class AgentState(TypedDict, total=False):
    input: Required[str]
    messages: Required[list[HumanMessage | AIMessage]]
    response: str

# Create a chat prompt template
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful AI assistant. Respond concisely and clearly."),
    ("human", "{input}")
])

# Initialize the OpenRouter chat model
model = OpenRouterChat(
    model="anthropic/claude-2",  # You can change this to any supported model
    temperature=0.7
)

# Define the processing function
def process_input(state: AgentState) -> AgentState:
    # Format the prompt with user input
    messages = prompt.format_messages(input=state["input"])
    
    # Get response from the model
    response = model.invoke(messages)
    
    # Update state with messages and response
    state["messages"] = [HumanMessage(content=state["input"]), response]
    state["response"] = response.content
    
    return state

# Build the graph
def build_graph() -> Graph:
    # Create a new graph
    graph = Graph()
    
    # Add the process_input node
    graph.add_node("process", process_input)
    
    # Set the entry point and connect to END
    graph.set_entry_point("process")
    graph.add_edge("process", END)
    
    return graph.compile()

def main():
    # Create the graph
    graph = build_graph()
    
    # Example usage
    user_input = "What are the key differences between Claude and GPT models?"
    
    # Initialize state
    initial_state = AgentState(
        input=user_input,
        messages=[]
    )
    
    try:
        # Run the graph
        result = graph.invoke(initial_state)
        
        # Print the response
        print(f"User: {user_input}")
        print(f"Assistant: {result['response']}")
    except ValueError as e:
        print(f"Error: {e}")
        print("Please create a .env file with your OpenRouter API key:")
        print("OPENROUTER_API_KEY=your-api-key-here")
    except Exception as e:
        print(f"Unexpected error: {e}")

if __name__ == "__main__":
    main()
