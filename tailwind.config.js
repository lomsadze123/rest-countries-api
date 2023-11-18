/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 7px 2px rgba(0, 0, 0, 0.04)",
        customHeader: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
      },
      colors: {
        almostBlack: "#111517;"
      }
    },
  },
  plugins: [],
}