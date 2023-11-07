/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 2s infinite",
      },
      transitionProperty: {
        height: "height",
        padding: "padding",
      },
    },
  },
  plugins: [],
};
