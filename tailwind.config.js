/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/labtest.jpeg')",
      },
  }
  },
  variants: {},
  plugins: [],
}

