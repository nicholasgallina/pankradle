/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#006917",
        testcolor: "#ff0000",
        highlight:"#2d55aa",
      },
    },
  },
  plugins: []
};