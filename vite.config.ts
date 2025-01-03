import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { sync } from 'glob';
import path from 'node:path';
// @ts-expect-error it's working w/o declare
import postcssHoverMediaFeature from 'postcss-hover-media-feature';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      tsconfigPath: './tsconfig.node.json',
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
      plugins: [tailwindcss, autoprefixer, postcssHoverMediaFeature, cssnano],
    },
  },
  build: {
    rollupOptions: {
      external: [
        '@internationalized/date',
        '@radix-ui/react-slot',
        '@react-aria/toast',
        '@react-stately/toast',
        'class-variance-authority',
        'clsx',
        'fast-equals',
        'motion',
        'react',
        'react-aria',
        'react-dom',
        'react-stately',
        'tailwind-merge',
        'react/jsx-runtime',
        'tailwindcss/plugin',
      ],
      preserveEntrySignatures: 'exports-only',
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      plugins: [preserveDirectives()],
      input: sync('src/**/*.{ts,tsx}', {
        ignore: [
          'src/**/*.{stories,types}.{ts,tsx}',
          'src/**/*.d.ts',
          'src/stories/**',
          'src/utility/**',
          'src/storybook/**',
          'src/main.tsx',
          'src/*.css',
        ],
      }).reduce((entries, file) => {
        const entry = path.relative('src', file).replace(/\.[^/.]+$/, '');
        const newEntries: Record<string, string> = entries;
        newEntries[entry] = path.resolve(__dirname, file);
        return entries;
      }, {}),
    },
  },
});
