/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bckround: "#1d3557",
        primary: "#a8dadc",
        secondary: "#457b9d",
        textCol: '#2c3e50',
      }
    },
  },
  plugins: [],
}

