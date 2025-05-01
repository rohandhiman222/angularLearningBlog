/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all HTML and TypeScript files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
