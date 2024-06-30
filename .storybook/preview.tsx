import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/index.css';
import '../src/theme.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <React.StrictMode>
        <Story />
      </React.StrictMode>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
