/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./my-clone/*.html"],
  theme: {
    extend: {
      backgroundImage:{
          rainboimage: "url('/my-clone/hand.jpeg')",
      },
      fontFamily: {
        libreBaskerville: ['"Libre Baskerville"', 'serif'],
      }
    },
  },
  plugins: [],
}

