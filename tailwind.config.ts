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
          DEFAULT: '#1755E7',
          dark: '#1040CC',
          light: '#4070F4',
        },
      },
    },
  },
  plugins: [],
}

export default config
