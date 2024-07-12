import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { sync } from 'glob';
import path from 'node:path';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: true,
    }),
    preserveDirectives(),
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
    // lib: {
    //   entry: 'src/index.ts',
    //   name: 'PostnowUI',
    //   formats: ['es'],
    // },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@internationalized/date',
        '@radix-ui/react-slot',
        'class-variance-authority',
        'clsx',
        'react-aria',
        'react-stately',
        'tailwind-merge',
      ],
      preserveEntrySignatures: 'exports-only',
      output: {
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        // },
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      input: sync('src/**/*.{ts,tsx}', {
        ignore: [
          'src/**/*.{stories,types}.{ts,tsx}',
          'src/**/*.d.ts',
          'src/stories/**',
        ],
      }).reduce((entries, file) => {
        const entry = path.relative('src', file).replace(/\.[^/.]+$/, '');
        const newEntries = entries;
        newEntries[entry] = path.resolve(__dirname, file);
        return entries;
      }, {}),
    },
  },
});
