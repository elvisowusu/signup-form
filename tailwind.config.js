/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':'hsl(248, 32%, 49%)',
        'reddish':'hsl(0, 100%, 74%)',
        'darkBlue':'hsl(249, 10%, 26%)', 
        'greenish':'hsl(154, 59%, 51%)',
        'grayishBlue': 'hsl(246, 25%, 77%)',
      },
      fontFamily:{
        poppins : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

