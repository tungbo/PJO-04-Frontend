/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "button": "#FBB200",
        "blur": "#8080805d"
      }
    },
  },
  plugins: [],
}

