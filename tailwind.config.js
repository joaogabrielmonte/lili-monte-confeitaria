/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:       '#1C1009',
        parchment: '#F7F2E8',
        gossamer:  '#EAE0D0',
        stone:     '#8E7E72',
        copper:    '#B5724A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"Jost"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
      },
    },
  },
  plugins: [],
}
