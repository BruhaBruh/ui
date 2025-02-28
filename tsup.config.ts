import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: false,
  entry: ['src/cli/index.ts'],
  format: ['esm'],
  sourcemap: false,
  minify: true,
  target: 'esnext',
  outDir: 'dist',
  treeshake: true,
});
