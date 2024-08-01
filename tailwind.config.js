/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        kalnia: ['"Kalnia", serif'],
        libre: ['"Libre Baskerville", serif'],
        grandiflora: ['"Grandiflora One", serif'],
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin'),
  ],
}