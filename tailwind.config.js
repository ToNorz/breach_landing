/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./BreachPoint.jsx",
  ],
  theme: {
    extend: {
      colors: {
        bp: {
          bg: "#05070a",
          "bg-alt": "#090d0c",
          panel: "#0a0f0d",
          green: "#34e5a4",
          red: "#ff5468",
          amber: "#f2b84b",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Oxanium", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
