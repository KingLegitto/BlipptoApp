/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "brand": "#6484E6",
        "accenture": "#FFD601",
        "primary": "#e4e6f7",
        "background": "#F8F9FF"
      }
    },
  },
  plugins: [
  ],
}

