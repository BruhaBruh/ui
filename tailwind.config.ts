import { themePlugin } from '@bruhabruh/theme';
import { Config } from 'tailwindcss/types/config';
import { uiPlugin } from './src/tailwind';

const config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  corePlugins: {
    backgroundColor: false,
    textColor: false,
  },
  plugins: [
    themePlugin({
      prefix: '',
      content: './themes/**/*.theme.yaml',
      absolute: false,
      output: {
        all: {
          css: [],
          tailwind: [],
        },
        themes: {},
      },
    }),
    uiPlugin({
      debugScreens: {
        userStyles: {
          borderRadius: 'var(--border-radius-3xs) 0 0 0',
        },
      },
    }),
  ],
} satisfies Config;

export default config;
