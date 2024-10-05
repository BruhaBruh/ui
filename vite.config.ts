import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { sync } from 'glob';
import path from 'node:path';
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
      plugins: [tailwindcss, autoprefixer, postcssHoverMediaFeature, cssnano],
    },
  },
  build: {
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
        '@bruhabruh/solar-icon-set',
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
      input: sync('src/**/*.{ts,tsx}', {
        ignore: [
          'src/**/*.{stories,types}.{ts,tsx}',
          'src/**/*.d.ts',
          'src/stories/**',
          'src/types/**',
          'src/utility/**',
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
