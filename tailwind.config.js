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
        DEFAULT: '#090A0A',
        dark: '#080808'
      },
      gray: {
        50: '#F9F9F9',
        DEFAULT: '#818181',
        'lt-txt': '#767676',
        'dt-txt': '#787878'
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
      'body-copy-m': ['20px', '28px'],
      'body-copy-l': ['24px', '32px'],
      'heading-1-xs': ['3.5rem', '128%'],
      'heading-1-s': ['4rem', '128%'],
      'heading-1-m': ['4.8rem', '128%'],
      'heading-1-l': ['5.6rem', '128%'],
      'heading-1-xl': ['6.4rem', '128%'],
      'heading-1-xxl': ['7.2rem', '128%']
    },
    screens: {
      'phone-s': '375px',
      'phone-m': '412px',
      'tablet-xs': '600px',
      'tablet-s': '768px',
      'tablet-m': '800px',
      'tablet-l': '960px',
      'tablet-xl': '1024px',
      'desktop-xs': '1280px',
      'desktop-s': '1366px',
      'desktop-m': '1440px',
      'desktop-xm': '1536px',
      'desktop-l': '1600px',
      'desktop-xl': '1920px',
      'desktop-xxl': '2560px'
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
      },
      backgroundImage: (theme) => ({
        'hero-pattern-mobile': "url('/img/michael-dziedzic-mobile.jpg')",
        'hero-pattern-desktop': "url('/img/michael-dziedzic-desktop.jpg')",
        'hero-pattern-desktop-xl': "url('/img/michael-dziedzic-desktop-xl.jpg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
