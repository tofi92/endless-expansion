/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        future: {
          '400': '#fae37c',
          '500': '#f5d546'
        },
        star: {
          'O': '#9bb0ff',
          'B': '#aabfff',
          'A': '#e4e8fc',
          'F': '#f9fae7',
          'G': '#fdf9b3',
          'K': '#ffd870',
          'M': '#fbc886'
        }
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
      visibility: ['responsive', 'group-hover'],
    }
  },
  plugins: [],
}
