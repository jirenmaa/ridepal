/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      scale: {
        '60': '0.6'
      },
      colors: {
        'lime': '#d4e157',
        'jasmine': '#ffe082',
        'rose': '#ef5350',
        'silver': '#cfd8dc',
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
};