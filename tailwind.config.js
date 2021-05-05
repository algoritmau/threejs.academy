const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#F6F7F7',
      black: '#141414',
      gray: colors.coolGray,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ["'MD IO 0.2'", 'monospace'],
    },
    fontSize: {
      '5xl': ['36px', '128%'],
    },
    height: {
      '64v': '64vh',
    },
    extend: {
      spacing: {
        0.5: '0.4rem',
        1: '0.8rem',
        2: '1.6rem',
        3: '2.4rem',
        3.5: '2.8rem',
        4: '3.2rem',
        5: '4rem',
        6: '4.8rem',
        7: '5.6rem',
        8: '6.4rem',
        9: '7.2rem',
        10: '8rem',
        11: '8.8rem',
        12: '9.6rem',
        13: '10.4rem',
        14: '11.2rem',
        15: '12rem',
        16: '12.8rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
