/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        raihanna: {
          green: "#1B3B2B",
          dark: "#0F261A",
          light: "#EAF2EC",
          accent: "#2D5A40"
        },
        cavillo: {
          burgundy: "#93334E",
          dark: "#6B1D32",
          pink: "#FDF2F4",
          accent: "#A8435F"
        },
        trust: {
          bg: "#F9FAF9",
          border: "#E5EBE5"
        }
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"]
      }
    },
  },
  plugins: [],
};
