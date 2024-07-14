import fs from 'node:fs';
import path from 'node:path';
import defaultTheme from 'tailwindcss/defaultTheme';
import { Config } from 'tailwindcss/types/config';

const theme = JSON.parse(
  fs.readFileSync(path.resolve('./theme.generated.json'), { encoding: 'utf8' }),
);

const config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './.storybook/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    ...theme,
    extend: {
      ...theme?.extend,
      container: {
        center: true,
        screens: {
          '2xl': '1400px',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 150ms ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
