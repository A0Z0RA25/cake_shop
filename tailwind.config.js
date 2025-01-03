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
        banner: "#543A14",
        homeBg: "#F0BB78",
        productBg: "#ede9e2",
        tColor: "#FFF0DC",
        btn: "#FFDDAE",
      },
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
        text: ['Quicksand', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
