import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url('/assets/img/grid.svg')"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
} satisfies Config
