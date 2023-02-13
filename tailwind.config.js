const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      pink: {
        darkest: '#801C5D',
        dark: '#CC2D94',
        DEFAULT: '#FF38B9',
        light: '#FF85D4',
        lightest: '#FFD1EF',
      }
    }
  },
}
