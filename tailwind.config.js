/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        offblack: "#0F0F0F",
        offwhite: "#F7F4EF",
        pearl: "#F4F4F2",
        zest: "#DCEB59",
        ember: "#F05A31",
        aura: "#D19BF3",
        mint: "#B7FCBF",
        moss: "#004638",
        sea: "#C7DDDC",
        grey: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        primary: ["Questrial", "sans-serif"],
        "material-symbols": ['"Material Symbols Outlined"', "sans-serif"],
      },
      textShadow: {
        sm: "0 1px 2px #0F0F0F",
      },
      animation: {
        gradient: "gradient-animation 2s ease infinite",
      },
      keyframes: {
        "gradient-animation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  safelist: [
    ...Object.keys(colors)
      .filter((color) => typeof colors[color] === "object")
      .flatMap((color) =>
        Object.keys(colors[color]).map((shade) => `bg-${color}-${shade}`),
      ),
  ],
  plugins: [],
};
