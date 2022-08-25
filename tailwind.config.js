/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: '#466C48',
        bg: '#94E19A',
        card: '#424242',
        cardbg: '#D7FFF1',
        cardtwobg: '#A5CCBE',
        word: '#8CD790',
        wordtwo: ' #5CA562',
      },
      width: {
        width: '478px',
        height: '792px',
      }

    },
  },
  plugins: [],
}
