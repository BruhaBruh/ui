import { withThemeByClassName } from '@storybook/addon-themes';
import { DocsContainer, DocsContainerProps, Unstyled } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/clear.css';
import './index.css';
import './storybook-docs.css';
import { theme } from './theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      theme,
      container: ({
        children,
        ...props
      }: React.PropsWithChildren<DocsContainerProps>) => {
        document.body.classList.remove('light', 'dark');
        const searchParams = new URLSearchParams(window.location.search);
        const globals = searchParams.get('globals');
        if (globals?.includes('theme:dark')) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.add('light');
        }

        return (
          <DocsContainer {...props}>
            <Unstyled>{children}</Unstyled>
          </DocsContainer>
        );
      },
    },
    viewport: {
      viewports: {
        xs: {
          name: 'None',
          styles: { width: '320px', height: '900px' },
          type: 'mobile',
          isRotated: false,
        },
        sm: {
          name: 'Small',
          styles: { width: '640px', height: '900px' },
          type: 'mobile',
        },
        md: {
          name: 'Medium',
          styles: { width: '768px', height: '900px' },
          type: 'tablet',
        },
        lg: {
          name: 'Large',
          styles: { width: '1024px', height: '900px' },
          type: 'tablet',
        },
        xl: {
          name: 'Extra Large',
          styles: { width: '1280px', height: '900px' },
          type: 'desktop',
        },
        '2xl': {
          name: 'Extra Extra Large',
          styles: { width: '1400px', height: '900px' },
          type: 'desktop',
        },
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Theme',
          [
            'Palette',
            'Typography',
            'Elevation',
            'Radius',
            'Duration',
            'Easing',
            '*',
          ],
          'Components',
          [
            'Actions',
            [
              'Button',
              'Fab',
              'ExtendedFab',
              'IconButton',
              'SegmentedButton',
              '*',
            ],
            'Selection',
            ['Checkbox', 'Radio', 'Switch', '*'],
            'Layout',
            ['PageContainer', 'Container', '*'],
            'Input',
            ['TextField', 'TextAreaField', 'SearchField', 'NumberField', '*'],
            '*',
          ],
        ],
        locales: 'en-US',
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'body',
    }),
    (Story) => (
      <Unstyled>
        <React.StrictMode>
          <Story />
        </React.StrictMode>
      </Unstyled>
    ),
  ],

  tags: [],
};

export default preview;
