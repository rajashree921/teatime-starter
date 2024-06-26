const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.11ty.js'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brandGreen: colors.emerald[700],
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
    },
    backgroundImage: {
      'hero-lg': "url('../img/hero-image.jpg')",
      'hero-sm': "url('../img/hero-image-mobile.jpg')",
    },
    extend: {},
  },
  plugins: [],
} 