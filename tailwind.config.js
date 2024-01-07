/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#0d6efd',
      'sub_color_1': '#2a2e34',
      'white_color': '#FFFFFF',
      'highlight_color': '#FF444A',
      
    },
    extend:  {
      fontFamily : {
        poppins : "'Poppins', sans-serif;"
      }
    },
  },
  plugins: [require("daisyui")],

}

