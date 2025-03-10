import type { ModuleConfig } from './types';

export const modules: ModuleConfig[] = [
  {
    name: 'button',
    dependencies: ['motion'],
    files: [
      { name: 'index.ts', path: './src/components/action/button/index.ts' },
      { name: 'button.tsx', path: './src/components/action/button/button.tsx' },
      {
        name: 'button.types.ts',
        path: './src/components/action/button/button.types.ts',
      },
      {
        name: 'button.variants.ts',
        path: './src/components/action/button/button.variants.ts',
      },
      {
        name: 'compound/index.ts',
        path: './src/components/action/button/compound/index.ts',
      },
      {
        name: 'compound/button-left-icon.tsx',
        path: './src/components/action/button/compound/button-left-icon.tsx',
      },
      {
        name: 'compound/button-right-icon.tsx',
        path: './src/components/action/button/compound/button-right-icon.tsx',
      },
      {
        name: 'context/index.ts',
        path: './src/components/action/button/context/index.ts',
      },
      {
        name: 'context/button.context.tsx',
        path: './src/components/action/button/context/button.context.tsx',
      },
      {
        name: 'internal/index.ts',
        path: './src/components/action/button/internal/index.ts',
      },
      {
        name: 'internal/internal-button-icon.tsx',
        path: './src/components/action/button/internal/internal-button-icon.tsx',
      },
    ],
    type: 'components:button',
  },
  // Другие модули...
];
