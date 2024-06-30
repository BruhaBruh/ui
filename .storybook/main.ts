import type { StorybookConfig } from '@storybook/react-vite';
import postcss from 'postcss';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
