import { defineConfig } from 'vite'
import { preset } from 'vite-config-preset'

// https://vitejs.dev/config/
export default defineConfig((env) =>
  preset({
    env,
    base: '/ts-starter/',
  }),
)
