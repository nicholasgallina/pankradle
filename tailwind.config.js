/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#006917",
        testcolor: "#ff0000",
        highlight: "#2d55aa",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
},
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in 0.3s forwards",
        slideInFromRight: "slideInFromRight 0.4s ease-out forwards",
        slideInFromLeft: "slideInFromLeft 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};