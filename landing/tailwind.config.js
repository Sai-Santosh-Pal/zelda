// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'naples-yellow': {
          DEFAULT: '#FFE166',
          hsl: 'hsla(48, 100%, 70%, 1)',
        },
        'persian-orange': {
          DEFAULT: '#D3865F',
          hsl: 'hsla(20, 57%, 60%, 1)',
        },
        'apple-green': {
          DEFAULT: '#ADBC3A',
          hsl: 'hsla(67, 53%, 48%, 1)',
        },
        'asparagus': {
          DEFAULT: '#679144',
          hsl: 'hsla(93, 36%, 42%, 1)',
        },
        'fern-green': {
          DEFAULT: '#4A7F4B',
          hsl: 'hsla(121, 26%, 39%, 1)',
        },
        'apple-green-2': {
          DEFAULT: '#ADBC3A',
          hsl: 'hsla(67, 53%, 48%, 1)',
        },
        'magnolia': {
          DEFAULT: '#F2EAF1',
          hsl: 'hsla(308, 24%, 93%, 1)',
        },
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'gradient-top': '#FFE166',
        'gradient-right': '#D3865F',
        'gradient-bottom': '#ADBC3A',
        'gradient-left': '#679144',
        'gradient-top-right': '#4A7F4B',
        'gradient-bottom-right': '#ADBC3A',
        'gradient-top-left': '#F2EAF1',
        'gradient-bottom-left': '#F2EAF1',
        'gradient-radial': '#F2EAF1',
      }),
    },
  },
  plugins: [],
};
