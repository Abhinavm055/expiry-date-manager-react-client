/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0984e3',
          dark: '#076bba',
          light: '#3a9df0'
        },
        secondary: {
          DEFAULT: '#e17055',
          dark: '#c45b41',
          light: '#f58a73'
        },
        background: '#f8fafc',
        surface: '#ffffff'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
