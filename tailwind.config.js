/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
      latin: ['Kaushan Script'],
    },
    extend: {
      animation: {
        wush: 'wush 0.3s linear forwards',
        navItem: 'navItem 0.3s linear forwards',
        listItemShow: 'listItemShow 0.4s linear forwards',
        // typingIndicator: 'typingIndicator 0.8s steps(3) infinite',
        // typing: 'typing 14s steps(14) infinite',
      },
    },
  },
  plugins: [],
};
