const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'jsx-portfolio': 'linear-gradient(to bottom, #4b839e, #000000)',
        code: 'linear-gradient(-45deg, #4c4c4c, #2c2c2c)',
        form: 'linear-gradient(-45deg, #828282, #f2fcff)',
      }),
    },
    colors: {
      comp: {
        DEFAULT: '#ffd665',
        link: '#ffe7a6',
        linkHover: '#ff1665',
      },
      prop: {
        DEFAULT: '#7aacff',
        str: '#a7e783',
        nmbr: '#ff7646',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
