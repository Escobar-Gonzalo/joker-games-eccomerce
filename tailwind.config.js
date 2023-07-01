/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'navShadow': '0 0 0 100vmax rgba(0, 0, 0, .5)'
      },
      dropShadow:{
        'text-glow': '0 0 4px rgb(222,91,255)',
        'text-dark-glow': '0 0 10px rgb(68,156,255)',
        'div-glow': '0 0 4px rgb(222,91,255)'
      },
      colors: {
        'Nv-black': '#2D2D2D',
        'Nv-shadow': '#202020',
        'Gc-01': '#45eec6', 
        'Gc-02': '#42ead0',
        'Gc-03': '#46e5d7', 
        'Gc-04': '#51e0dd', 
        'Gc-04': '#5edbe0', 
        'Gc-05': '#4bd6ea', 
        'Gc-07': '#3dd1f3',
        'Gc-08': '#3ccbfb', 
        'Gc-09': '#37c0ff',
        'Gc-10': '#66b1ff', 
        'Gc-11': '#9d9dff', 
        'Gc-12': '#d281ff'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        title: ['Gasoek One', 'sans-serif']
      }
    },
  },
  plugins: [],
}