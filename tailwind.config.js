/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'blue': '#001220',
      'yellow': '#FBAE3C',
      'white': '#f5F5F5',
      'ciel': '#D9DBF1',
      'brun': '#7E6551',
      'green': '#708B75',

      'transparant' : 'transparant'
    },
    extend: {
      backgroundImage : {
        'hero': "url('/assets/images/bg.svg')",
        },
    },
  },
  plugins: [],
}
