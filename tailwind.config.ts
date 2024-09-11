import themePlugin from '@bruhabruh/theme';
import { Config, PluginAPI } from 'tailwindcss/types/config';

const config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './.storybook/**/*.{ts,tsx,mdx}'],
  safelist: [
    {
      pattern: /(bg|text|rounded|border|outline|ring)-.+/,
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
      content: './themes/*.theme.yaml',
    }),
    ({ addVariant }: PluginAPI) => {
      addVariant('starting', '@starting-style');
    },
  ],
} satisfies Config;

export default config;
