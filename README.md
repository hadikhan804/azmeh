# Alonox Admin Panel

A modern, responsive admin panel for the Alonox beauty products website built with React and Tailwind CSS.

## 🎨 Features

### Dashboard
- Overview statistics (products, orders, users, revenue)
- Recent orders tracking
- Top products performance
- Quick action buttons

### Product Management
- Add, edit, and delete products
- Product search and filtering
- Stock status tracking
- Product categories (Face Care, Hair Care, Body Care)
- Image upload support

### Order Management
- View all customer orders
- Update order status (Pending, Processing, Shipped, Delivered)
- Order search and filtering
- Order details with customer information

### User Management
- View registered customers
- User search and filtering
- User details modal with contact information
- Order history and spending statistics

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Navigation
- Use the sidebar to navigate between different sections
- The sidebar is collapsible on mobile devices
- Active page is highlighted in yellow

### Dashboard
- View key metrics and statistics
- Click on quick action buttons to navigate to specific sections
- Monitor recent orders and top-performing products

### Products
- Click "Add Product" to create new products
- Use search and filters to find specific products
- Click "Edit" or "Delete" on product cards to manage them
- View stock status with color-coded badges

### Orders
- View all customer orders in a table format
- Use the status dropdown to update order status
- Search orders by customer name or order ID
- Filter orders by status

### Users
- View all registered customers
- Click on user cards to see detailed information
- Search users by name or email
- Filter users by status (Active/Inactive)

## 🎨 Design System

### Colors
- **Primary Green**: `#27ae60` (Alonox Green)
- **Primary Yellow**: `#f4d03f` (Alonox Yellow)
- **Light Green**: `#2ecc71`
- **Light Yellow**: `#f7dc6f`
- **Dark Green**: `#229954`
- **Dark Yellow**: `#f39c12`

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Cards**: White background with subtle shadows
- **Buttons**: 
  - Primary: Green background
  - Secondary: Yellow background
  - Danger: Red background
- **Sidebar**: Fixed navigation with gradient branding
- **Modals**: Centered overlays with backdrop blur

## 📱 Responsive Design

The admin panel is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

### Mobile Features
- Collapsible sidebar with hamburger menu
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Swipe gestures for navigation

## 🔧 Customization

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routing in `src/App.js`
4. Add navigation items in `src/components/Sidebar.js`

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Use Tailwind utility classes for component styling

### Data Management
- Replace static data with API calls
- Add state management (Redux, Context API)
- Implement real authentication
- Add data persistence

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.js          # Top navigation bar
│   └── Sidebar.js         # Side navigation
├── pages/
│   ├── Dashboard.js       # Main dashboard
│   ├── Products.js        # Product management
│   ├── Orders.js          # Order management
│   └── Users.js           # User management
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🔮 Future Enhancements

- [ ] Authentication and user roles
- [ ] Real-time notifications
- [ ] Advanced analytics and charts
- [ ] Bulk operations (import/export)
- [ ] Email notifications
- [ ] Inventory management
- [ ] Sales reports
- [ ] Customer reviews management

## 📄 License

This project is created for the Alonox beauty products website.

## 🤝 Support

For support or questions, please contact the development team.

---

**Alonox Admin Panel** - Manage your beauty empire with style! ✨ 