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
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#34d399',
          glow: 'rgba(16, 185, 129, 0.3)'
        },
        secondary: {
          DEFAULT: '#059669',
          dark: '#047857',
          light: '#6ee7b7'
        },
        background: '#09090b',
        surface: '#18181b',
        'surface-border': '#27272a'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -2px rgba(0, 0, 0, 0.5)',
        'emerald-glow': '0 0 20px rgba(16, 185, 129, 0.3)',
        'emerald-glow-lg': '0 0 30px rgba(16, 185, 129, 0.5)',
      }
    },
  },
  plugins: [],
}
