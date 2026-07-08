import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        condensed: ['var(--font-barlow-condensed)', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          DEFAULT: '#B0E0E6',
          dark: '#8ACDD4',
          light: '#C8EAED',
        },
      },
    },
  },
  plugins: [],
}

export default config
