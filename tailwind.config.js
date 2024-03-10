/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./public/**/*.{html,js}"],
  purge: ['./src/**/*.vue', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

