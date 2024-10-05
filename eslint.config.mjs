import mainConfig from '@bruhabruh/eslint-config';
import clientConfig from '@bruhabruh/eslint-config/client.js';
import importOrderConfig from '@bruhabruh/eslint-config/import-order.js';
import prettierConfig from '@bruhabruh/eslint-config/prettier.js';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage', '.temp'],
  },
  ...mainConfig,
  ...clientConfig,
  ...importOrderConfig,
  ...prettierConfig,
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'new-cap': [
        'error',
        { capIsNewExceptions: ['Some', 'None', 'Ok', 'Err'] },
      ],
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
        cssFiles: [
          '**/*.css',
          '**/*.mdx',
          '!**/node_modules',
          '!**/.*',
          '!**/dist',
          '!**/build',
        ],
        classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
      },
    },
  },
];
