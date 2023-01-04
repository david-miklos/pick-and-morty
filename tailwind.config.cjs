/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "2048px",
    },
  },
  plugins: [],
};
