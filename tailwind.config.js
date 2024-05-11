/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        'serif1': ['Roboto Serif', 'serif'],
      },
      
            spacing: {
        '128': '46rem',
        '120': '45rem',

      },
                  width: {
        '100': '30rem',
      },height:{
        '0.75': '3.5px',
        '17': '4.5rem',


      }
    },
  },
  plugins: [],
};
