const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#FEFEFE',
        dark: '#F9F9F9'
      },
      black: {
        light: '#161616',
        DEFAULT: '#080808',
        dark: '#000'
      },
      gray: {
        50: '#F9F9F9',
        DEFAULT: '#818181'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ["'MD IO 0.2'", 'monospace']
    },
    fontSize: {
      'body-copy-tiny': ['12px', '16px'],
      'body-copy-small': ['14px', '18px'],
      'body-copy': ['16px', '20px'],
      'body-copy-medium': ['20px', '28px'],
      'body-copy-large': ['24px', '32px'],
      '5xl': ['36px', '128%']
    },
    height: {
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
      '64v': '64vh',
      '100v': '100vh'
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
        16: '12.8rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
