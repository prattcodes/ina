/* eslint-disable no-dupe-keys */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    borderWidth: {
      DEFAULT: "1px",
      '2': "2px"
    },
    extend: {fontFamily: {
      'sans': ['Nunito Sans', 'Helvetica', 'Arial', 'sans-serif']
    }},
    colors: {
      "skincolor": "#FFB9B9",
      "light-grey": "#CCCCCC",
      "off-white": "#EFEFEF",
      "green-gray": "#C8DEDD",
      "pink": "#D663B8",
      "red-orange": "#EB8383",
      "dark-grey": "#4B4B4B",
      "middle-green": "#83C2C5",
      "rose": "#F4E9F4",
      "yellow": "#F2C300",
      "turquois": "#4888AA",
      "side-panel-background-color": "#F8F8F8",
      "left-bar-background-color": "#F4F4F4",
      "light-green": "#E8F5F3",
      "dark-green": "#489693",
      "white": "#FFFFFF",
      "grey": "#707070",
      "light-blue": "#8BC0EF",
      "red": "#DE6480",
      "dark-red": "#be5069",
      "violett": "#A38DDE",
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};
