/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#2E9BF8',
      'secondary': '#003764',
      'accent': '#B48724'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
