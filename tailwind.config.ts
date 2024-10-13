import { uiPlugin } from '@/tailwind';
import themePlugin from '@bruhabruh/theme';
import { Config } from 'tailwindcss/types/config';

const config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './.storybook/**/*.{ts,tsx,mdx}'],
  safelist: [
    {
      pattern: /(easing|duration)-.+/,
    },
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 'var(--ui-spacing-md)',
        screens: {
          '2xl': '1400px',
        },
      },
      keyframes: {
        'linear-progress': {
          from: {
            transform: 'translateX(0%)',
          },
          to: {
            transform: 'translateX(50%)',
          },
        },
        'circular-progress': {
          from: {
            transform: 'rotate(-90deg)',
          },
          to: {
            transform: 'rotate(270deg)',
          },
        },
        'grid-row': {
          from: {
            'margin-top': 'var(--start-margin-top, inherit)',
            'margin-bottom': 'var(--start-margin-bottom, inherit)',
            'grid-template-rows': '0fr',
          },
          to: {
            'margin-top': 'var(--end-margin-top, inherit)',
            'margin-bottom': 'var(--end-margin-bottom, inherit)',
            'grid-template-rows': '1fr',
          },
        },
        'grid-row-reverse': {
          from: {
            'margin-top': 'var(--end-margin-top, inherit)',
            'margin-bottom': 'var(--end-margin-bottom, inherit)',
            'grid-template-rows': '1fr',
          },
          to: {
            'margin-top': 'var(--start-margin-top, inherit)',
            'margin-bottom': 'var(--start-margin-bottom, inherit)',
            'grid-template-rows': '0fr',
          },
        },
      },
      transitionProperty: {
        DEFAULT:
          'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width',
        rows: 'grid-template-rows, color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width',
        'not-color':
          'opacity, box-shadow, transform, filter, backdrop-filter, height, width',
      },
    },
  },
  plugins: [
    themePlugin({
      prefix: 'ui',
      content: './themes/**/*.theme.yaml',
    }),
    uiPlugin({
      debugScreens: {
        userStyles: {
          borderRadius: 'var(--ui-border-radius-3xs) 0 0 0',
        },
      },
    }),
  ],
} satisfies Config;

export default config;
