/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: "#DC0016",
      white: "#FFFFFF",
      gray: "#EEEEEE",
      black: "#000000",
      darkgray: "#919191",
    },
    fontFamily: {
      kanit: "Kanit, sans-serif",
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    base: false,
    themes: false,
  },
};
