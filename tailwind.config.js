/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        urgent: '#ff6b6b',
        normal: '#4ecdc4',
      },
    },
  },
  plugins: [],
};
