/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        'blue-hover': '#112991',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}