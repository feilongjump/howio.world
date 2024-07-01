/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/routes/**/*.{svelte,js}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'night']
  },
  darkMode: ['class', '[data-theme="night"]']
}
