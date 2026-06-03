/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:  '#1848C8',
        pLight:   '#3B6EF8',
        pDark:    '#0f2d8a',
        blueBg:   '#F0F5FF',
        blueCard: '#DCE8FF',
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'] },
    },
  },
  plugins: [],
};
