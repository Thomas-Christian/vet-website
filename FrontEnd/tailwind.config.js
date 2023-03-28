/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/images/background.jpg')"
      }
    },
  },
  plugins: [],
}
