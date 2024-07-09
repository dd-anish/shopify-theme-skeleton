/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/customers/*.liquid",
    "./templates/*.liquid",
    "./sections/*.json",
    "./templates/*.json",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark-gray": "#424245",
        "brand-red": "#FF0000",
        "brand-blue": "#0000FF",
        "brand-green": "#00FF00",
        "brand-cream": "#FFFDD0",
      },
      fontSize: {
        "custom-large": ["38px", "120%"],
      },
      fontFamily: {
        "custom-sans": ["Arial", "sans-serif"],
      },
    },
  },
};
