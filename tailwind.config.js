/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#FFB100",
        base_white: "#F5F5F5",
      },
      fontFamily: {
        dana: "dana",
      },
    },
  },
  plugins: [],
};
