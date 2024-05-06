import { defineConfig } from 'tsup'

export const tsup = defineConfig((option) => ({
  entry: ['src/index.ts'],
  dts: true,
  format: ['cjs', 'esm'],
  platform: 'node',
  splitting: false,
  treeshake: true,
  clean: !option.watch,
  minify: !option.watch,
  sourcemap: !!option.watch,
}))
