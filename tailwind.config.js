module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'jsx-portfolio': 'linear-gradient(to bottom, #4b839e, #000000)',
        code: 'linear-gradient(-45deg, #4c4c4c, #2c2c2c)',
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
};
