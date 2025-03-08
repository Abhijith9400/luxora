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
        sans: ["'Montserrat Alternates'", "sans-serif" ], // ✅ Add DM Sans
        merienda: ['Merienda', 'cursive'],  // Define your font here
      },
    },
  },
  plugins: [],
} satisfies Config;
