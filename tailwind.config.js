/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        festive: "#FFD700",  // Gold Diwali theme color
        dimBlue: "#0F172A",  // Background tone matching the image
      },
      fontFamily: {
        festive: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
