/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors:{
        blue:{
          300: "#406882",
          800: "#111827",
          900: "#090E1A",
        }
      }
    },
  },
  plugins: [],
}
