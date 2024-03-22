/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pokemon-pattern": "url('/src/assets/pokemonBg.png')",
      },
    },
  },
  plugins: [],
};
