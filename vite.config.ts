import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { sync } from 'glob';
import path from 'node:path';
import url from 'node:url';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'PostnowUI',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      input: Object.fromEntries(
        sync('src/**/*.{ts,tsx}', {
          ignore: ['src/**/*.stories.{ts,tsx}', 'src/stories/**'],
        }).map((file) => [
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length),
          ),
          url.fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
    },
  },
});
