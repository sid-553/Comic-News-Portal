/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Bangers', 'cursive'],
        body: ['Comic Neue', 'cursive'],
      },
      animation: {
        'comic-pop': 'comic-pop 0.3s ease-out',
      },
      keyframes: {
        'comic-pop': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};