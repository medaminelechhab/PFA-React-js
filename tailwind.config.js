/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '120': '28rem', // Ajoutez la taille personnalisée que vous préférez
      },
    },
  },
  plugins: [],
}
