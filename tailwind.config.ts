import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: ['var(--font-merienda)', 'cursive'],
        playfair: ['var(--font-playfair)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],    },
  },
  plugins: [],
  }}
