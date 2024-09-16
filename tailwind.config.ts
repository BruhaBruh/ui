import themePlugin from '@bruhabruh/theme';
import { Config, PluginAPI } from 'tailwindcss/types/config';

const config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './.storybook/**/*.{ts,tsx,mdx}'],
  safelist: [
    {
      pattern: /(rounded|elevation|easing|duration)-.+/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [
    themePlugin({
      prefix: 'pw',
      content: './themes/**/*.theme.yaml',
    }),
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.elevation-0': {
          'box-shadow': '0px 0px #0000',
        },
        '.elevation-1': {
          'box-shadow':
            'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
        },
        '.elevation-2': {
          'box-shadow':
            'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
        },
        '.elevation-3': {
          'box-shadow':
            'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
        },
        '.elevation-4': {
          'box-shadow':
            'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
        },
        '.elevation-5': {
          'box-shadow':
            'rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px',
        },
      });

      addUtilities({
        '.easing-emphasized': {
          'transition-timing-function': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        },
        '.easing-emphasized-decelerate': {
          'transition-timing-function': 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        },
        '.easing-emphasized-accelerate': {
          'transition-timing-function': 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
        },
        '.easing-standard': {
          'transition-timing-function': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        },
        '.easing-standard-decelerate': {
          'transition-timing-function': 'cubic-bezier(0, 0, 0, 1)',
        },
        '.easing-standard-accelerate': {
          'transition-timing-function': 'cubic-bezier(0.3, 0, 1, 1)',
        },
      });

      addUtilities({
        '.duration-short-1': {
          'transition-duration': '50ms',
        },
        '.duration-short-2': {
          'transition-duration': '100ms',
        },
        '.duration-short-3': {
          'transition-duration': '150ms',
        },
        '.duration-short-4': {
          'transition-duration': '200ms',
        },
        '.duration-medium-1': {
          'transition-duration': '250ms',
        },
        '.duration-medium-2': {
          'transition-duration': '300ms',
        },
        '.duration-medium-3': {
          'transition-duration': '350ms',
        },
        '.duration-medium-4': {
          'transition-duration': '400ms',
        },
        '.duration-long-1': {
          'transition-duration': '450ms',
        },
        '.duration-long-2': {
          'transition-duration': '500ms',
        },
        '.duration-long-3': {
          'transition-duration': '550ms',
        },
        '.duration-long-4': {
          'transition-duration': '600ms',
        },
        '.duration-extra-long-1': {
          'transition-duration': '700ms',
        },
        '.duration-extra-long-2': {
          'transition-duration': '800ms',
        },
        '.duration-extra-long-3': {
          'transition-duration': '900ms',
        },
        '.duration-extra-long-4': {
          'transition-duration': '1000ms',
        },
      });
    },
  ],
} satisfies Config;

export default config;
