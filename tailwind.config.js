/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alonox': {
          yellow: '#f4d03f',
          green: '#27ae60',
          'yellow-light': '#f7dc6f',
          'green-light': '#2ecc71',
          'yellow-dark': '#f39c12',
          'green-dark': '#229954'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 