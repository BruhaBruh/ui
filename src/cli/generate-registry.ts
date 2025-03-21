import fs from 'fs';
import path from 'path';
import type { Registry } from './types';
import { highlighter } from './utils/highlighter';
import { logger } from './utils/logger';

const OUTPUT_FILE = 'public/registry.json';

const CONFIG = {
  dependencies: [
    '@radix-ui/react-slot',
    'class-variance-authority',
    'clsx',
    'fast-equals',
    'motion',
    'react-aria',
    'react-stately',
    'tailwind-merge',
    '@tabler/icons-react',
    'embla-carousel',
    'embla-carousel-react',
  ],
  devDependencies: ['@bruhabruh/type-safe', 'tailwindcss'],
  files: [
    {
      type: 'index',
      path: './src/index.ts',
    },
    {
      type: 'components',
      path: './src/components',
    },
    {
      type: 'config',
      path: './src/config',
    },
    {
      type: 'hooks',
      path: './src/hooks',
    },
    {
      type: 'tailwind',
      path: './src/tailwind',
    },
    {
      type: 'types',
      path: './src/types',
    },
    {
      type: 'utility',
      path: './src/utility',
    },
  ] as { type: Registry['files'][number]['type']; path: string }[],
};

function getFiles(dirOrFile: string): string[] {
  const stat = fs.statSync(dirOrFile);
  if (stat.isFile()) {
    return [dirOrFile];
  }
  return fs.readdirSync(dirOrFile).flatMap((file) => {
    const fullPath = path.join(dirOrFile, file);
    return fs.statSync(fullPath).isDirectory()
      ? getFiles(fullPath)
      : [fullPath];
  });
}

function generateRegistry() {
  const registry: Registry = {
    dependencies: CONFIG.dependencies,
    devDependencies: CONFIG.devDependencies,
    files: CONFIG.files.flatMap((dir) => {
      if (!fs.existsSync(dir.path)) return [];
      return getFiles(dir.path).map((filePath) => ({
        name:
          dir.type === 'index'
            ? path.relative('./', filePath).split('/').slice(1).join('/')
            : path.relative('./', filePath).split('/').slice(2).join('/'),
        content: fs.readFileSync(filePath, 'utf-8'),
        type: dir.type,
      }));
    }),
  };

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(registry, null, 2));

  logger.log(
    `${highlighter.success('Success!')} registry.json succussfully created.`,
  );
  logger.break();
}

generateRegistry();
