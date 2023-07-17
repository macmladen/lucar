const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
        // hd: '1920px'
      },
      padding: {
        // DEFAULT: '4vmin'
      }
    },
    extend: {
      screens: {
        // hd: '1920px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lucar-blue': '#00476c',
        'lucar-gray': '##949491',
        'ui-red': '#db3939',
        'grey-dark': '#2c2c2c',
        'grey-base': '#aeaeae',
        'grey-light': '#fcfcfc',
        'shades-white': 'rgba(255, 255, 255, 0.4)'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        base: ['1.125rem', '1.3'],
        small: ['0.75rem', '1.25']
      }
    }
  },
  plugins: []
};
