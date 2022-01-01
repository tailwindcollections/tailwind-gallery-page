module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Rubik', 'sans-serif'],
      },
      spacing : {
        "18" : "4.5rem",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}