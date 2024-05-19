/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": {
          "50": '#ffe0e2',
          '100':'#F7B3B9',
        },
        "grey":{
          '50':'#F2F2F6',
          "100":'#A1A2A5'
        }
      }
    },
  },
  plugins: [],
}

