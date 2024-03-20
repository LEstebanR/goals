/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4EDC6F",
        primaryAccent: "#00DB42",
        secondary: "#4D60DB",
        secondaryAccent: "#010ADB",
        link: "#74BADC",
        linkHover: "#008CDB",
        bg: "#5C6186",
      },
    },
  },
  plugins: [],
};
