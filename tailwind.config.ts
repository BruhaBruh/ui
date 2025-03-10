import { themePlugin } from '@bruhabruh/theme';
import type { Config } from 'tailwindcss/types/config';
import { uiPlugin } from './src/tailwind';

const config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  corePlugins: {
    backgroundColor: false,
    textColor: false,
    borderColor: false,
  },
  plugins: [themePlugin({ content: './themes/**/*.theme.yaml' }), uiPlugin({})],
} satisfies Config;

export default config;
