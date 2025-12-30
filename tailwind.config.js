/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.html",
    "./public/**/*.{html,js}",
    "./src/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2A7050',
        'primary-dark': '#1e523a',
        secondary: '#B12029',
        'secondary-dark': '#8a1920',
        'background-light': '#f8fafc',
        'background-dark': '#111827',
        'surface-light': '#ffffff',
        'surface-dark': '#1f2937',
        'text-light': '#334155',
        'text-dark': '#e2e8f0',
      },
      fontFamily: {
        display: ['Montserrat', 'Arial', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
