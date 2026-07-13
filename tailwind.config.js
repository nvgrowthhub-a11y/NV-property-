/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0B0B0B",
          darkGray: "#1A1A1A",
          gold: "#D4AF37",
          goldHover: "#F3E5AB",
          glass: "rgba(255, 255, 255, 0.03)",
          glassBorder: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
