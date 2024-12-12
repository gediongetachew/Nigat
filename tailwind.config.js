/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'x-axis': '3%'
      },
      colors: {
        'primary': '#004F57',
        'secondary': '#F79E1E',
        'secondary-light': '#FCAD21',

      },
      fontFamily: {
        trap:["Trap", "sans-serif"],
        "trap-Regular": ["Trap Regular", "sans-serif"],
        "trap-ExtraBold":["Trap ExtraBold", "sans-serif"]

      }
    },
  },
  plugins: [],
}

