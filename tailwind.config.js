/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'text-glow': '0 0 4px rgb(222,91,255)',
        'text-dark-glow': '0 0 10px rgb(68,156,255)'
      },
      colors: {
        'Nv-black': '#2D2D2D',
        'Nv-shadow': '#202020'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        title: ['Gasoek One', 'sans-serif']
      }
    },
  },
  plugins: [],
}