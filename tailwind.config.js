/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundColor: {
        'orange-main': '#FBD38D',
        'purple-main': '#8059D5'
      }
    }
  },
  plugins: []
}
