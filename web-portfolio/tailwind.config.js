/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        green: "#317256",
        yellow: "#ffbf34",
        grey: "#ededed",
        "deep-blue" : "#010026",
        "dark-grey" : "#757575",
        "opaque-black" : "rgba(0,0,0,0.35)",
        white: "#faf7f7",
        orange: "#e35400",
        brown: "#745e4f",
        "light-green": "#32927a",
        black: "#0d0d0d",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        dmserifdisplay: ["DM Serif Display", "serif"],
        poppins: ["Montserrat", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      boxShadow: {
        'custom': '0.9px 1px 0 0 rgba(49, 114, 86, 1), 1.5px 2px 0 0 rgba(49, 114, 86, 1), 2.5px 3px 0 0 rgba(49, 114, 86, 1), 3.5px 4px 0 0 rgba(49, 114, 86, 1), 4.5px 5px 0 0 rgba(49, 114, 86, 1), 5.5px 6px 0 0 rgba(49, 114, 86, 1), 6.5px 7px 0 0 rgba(49, 114, 86, 1), 7.5px 8px 0 0 rgba(49, 114, 86, 1), 8.5px 9px 0 0 rgba(49, 114, 86, 1), 9.5px 10px 0 0 rgba(49, 114, 86, 1)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}