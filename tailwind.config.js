/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#351C0E',
        background: '#EDEDED',
        foreground: '#C0B8B3',
        secondary: '#4D2612',
        accent: '#6A3D28',
      },
    },
  },
  plugins: [],
};
