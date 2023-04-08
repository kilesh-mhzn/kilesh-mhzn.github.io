/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      textColor: {
        skin:{
          base:'var(--color-text-base)',
          inverted: 'var(--color-text-inverted)'
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover ': 'var(--color-button-accent-hover )',
        },
      },
      fontFamily: {
        sono: "'sono', sans-serif",
      }
    },
  },
  plugins: [],
}
