/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2C1810',
          light: '#5C2A2A',
        },
        gold: '#D4AF37',
        saffron: '#E67E22',
        cream: '#F8F1E3',
      }
    },
  },
  plugins: [],
}
