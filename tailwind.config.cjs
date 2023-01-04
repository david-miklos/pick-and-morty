/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
    screens: {
      sm: "521px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "2048px",
    },
  },
  plugins: [],
};
