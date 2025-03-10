import type { ApplyUIPlugin } from '../../../ui-plugin.types';

export const applyMaterialState: ApplyUIPlugin = ({
  addUtilities,
  addBase,
  matchUtilities,
  theme,
}) => {
  addBase({
    '*, *::after, *::before': {
      '--tw-ui-background': 'transparent',
      '--tw-ui-state': 'transparent',
      '--tw-ui-background-percent': '100%',
      '--tw-ui-text-percent': '100%',
      '--tw-ui-border-percent': '100%',
    },
  });

  matchUtilities(
    {
      bg: (value) => ({
        'background-color': `color-mix(in srgb, ${value} var(--tw-ui-background-percent), var(--tw-ui-state) calc(100% - var(--tw-ui-background-percent)))`,
      }),
      state: (value) => ({
        '--tw-ui-state': value,
      }),
      text: (value) => ({
        color: `color-mix(in srgb, ${value} var(--tw-ui-text-percent), transparent calc(100% - var(--tw-ui-text-percent)))`,
      }),
      border: (value) => ({
        'border-color': `color-mix(in srgb, ${value} var(--tw-ui-border-percent), transparent calc(100% - var(--tw-ui-border-percent)))`,
      }),
    },
    {
      type: 'color',
      values: theme('colors'),
    },
  );

  const percents: Record<number, `${number}%`> = {
    8: '8%',
    12: '12%',
    16: '16%',
    38: '38%',
  };

  for (let i = 0; i <= 100; i += 5) {
    percents[i] = `${i}%`;
  }

  matchUtilities(
    {
      'bg-opacity': (value) => ({
        '--tw-ui-background-percent': value,
      }),
      'text-opacity': (value) => ({
        '--tw-ui-text-percent': value,
      }),
      'border-opacity': (value) => ({
        '--tw-ui-border-percent': value,
      }),
    },
    {
      type: 'percentage',
      values: percents,
    },
  );

  addUtilities({
    '.hover-state': {
      '--tw-ui-background-percent': '92%',
    },
    '.focus-state': {
      '--tw-ui-background-percent': '90%',
    },
    '.press-state': {
      '--tw-ui-background-percent': '90%',
    },
    '.drag-state': {
      '--tw-ui-background-percent': '84%',
    },
  });
};
