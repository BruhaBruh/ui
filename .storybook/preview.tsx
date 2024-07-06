import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/clear.css';
import './index.css';
import './theme.generated.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Theme', [
            'Palette', 
            'Design Tokens', ['Background', 'Text', 'Border', 'Ring', 'Outline', 'Radius', '*'], 
            '*'
          ],
          'Components', [
            'Controls', ['Button', 'TextField', "TextAreaField", 'NumberField', 'SearchField', 'TimeField', 'DateField', '*'], 
            '*'
          ],
        ],
        locales: 'en-US',
      }
    }
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
