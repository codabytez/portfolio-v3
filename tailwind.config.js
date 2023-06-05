/** @type {import('tailwindcss').Config} */
export default {
  content:
    [
      "./index.html",
      "./src/**/*{.js,.ts,.jsx,.tsx}"
    ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        darkSolid: '#CCCCCC',
        solid: '#42446E',
        darkContent: '#A7A7A7',
        content: '#666666',
        dark: '#191919',
        light: '#EBEBEB',
        btnText: '#018C0F',
        btnSuccess: '#D7FFE0',
        gradient: {
          100: '#13B0F5',
          200: '#E70FAA'
        },
      },
    },
  },
  plugins: [],
};
