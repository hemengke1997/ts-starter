import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  corePlugins: {
    preflight: true,
  },
} as Config
