import { Unstyled } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/clear.css';
import './index.css';

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
            'Palette', ['Light', 'Dark', '*'], 
            'Elevation',
            'Radius',
            'Duration',
            'Easing',
            '*'
          ],
          'Components', [
            'Buttons', [
              'Button',
              'ToggleButton',
              'IconButton',
              'ToggleIconButton',
              '*'
            ],
            'Forms', [
              'Radio',
              'Checkbox',
              'Switch',
              '*'
            ],
            '*'
          ],
        ],
        locales: 'en-US',
      }
    }
  },

  decorators: [
    // withThemeByClassName({
    //   themes: {
    //     light: 'light',
    //     dark: 'dark',
    //   },
    //   defaultTheme: 'light',
    //   parentSelector: 'body'
    // }),
    (Story) => (
      <Unstyled>
        <React.StrictMode>
          <Story />
        </React.StrictMode>
      </Unstyled>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
