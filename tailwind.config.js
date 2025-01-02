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
        banner: "#FFE6A9",
        color: "#FBFBFB",
        btn: "#FFDDAE",
      },
    },
  },
  plugins: [],
};
