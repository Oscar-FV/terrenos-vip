/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      'sm': '639px',
      'md': '771px',
      'lg': '1025px',
      'xl': '1281px',
      '2xl': '1537px' 
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#2E9BF8',
        'secondary': '#003764',
        'accent': '#E7BA57'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
