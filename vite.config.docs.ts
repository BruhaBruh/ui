import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'node:path';
// @ts-expect-error it's working w/o declare
import postcssHoverMediaFeature from 'postcss-hover-media-feature';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer, postcssHoverMediaFeature, cssnano],
    },
  },
  build: {
    outDir: 'dist-docs',
  },
  server: {
    port: 3000,
  },
});
