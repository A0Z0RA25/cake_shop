/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        blue: "#C6E7FF",
        banner: "#D4F6FF",
        color: "#FBFBFB",
        btn: "#FFDDAE",
      },
    },
  },
  plugins: [],
};
