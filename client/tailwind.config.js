/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: "#DC0016",
      white: "#FFFFFF",
      gray: "#D4D4D4",
      black: "#000000",
    },
    fontFamily: {
      prompt: "Prompt, sans-serif",
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
