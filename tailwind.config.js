const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1280px"
        // hd: '1920px'
      },
      padding: {
        DEFAULT: "20px"
        // xl: '0',
      }
    },
    extend: {
      screens: {
        // hd: '1920px'
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "lucar-blue": "#00476c",
        "lucar-gray": "#949491",
        "ui-red": "#db3939",
        "grey-dark": "#2c2c2c",
        "grey-base": "#aeaeae",
        "grey-light": "#fcfcfc",
        "shades-white": "rgba(255, 255, 255, 0.4)"
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-roboto-slab)", ...defaultTheme.fontFamily.serif]
      },
      fontSize: {
        base: ["1.125rem", "1.3"],
        small: ["0.75rem", "1.25"]
      },
      typography: {
        DEFAULT: {
          css: {
            // maxWidth: '65ch',
            maxWidth: "1240px"
          }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  corePlugins: {
    // preflight: false,
  }
};
