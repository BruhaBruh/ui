import fs from 'node:fs';
import path from 'node:path';
import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const theme = JSON.parse(
  fs.readFileSync(path.resolve('./theme.json'), { encoding: 'utf8' }),
);

const config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    ...theme,
    extend: {
      ...theme.extend,
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
