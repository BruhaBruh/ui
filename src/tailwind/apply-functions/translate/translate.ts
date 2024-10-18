import { ApplyUIPlugin } from '../../ui-plugin.types';

const defaultValuesObject: Record<string, string> = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '3/4': '75%',
  full: '100%',
};

export const applyTranslate: ApplyUIPlugin = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'translate-x': (value) => ({
        '--tw-translate-x': value,
        translate: `var(--tw-translate-x) var(--tw-translate-y)`,
      }),
      'translate-y': (value) => ({
        '--tw-translate-y': value,
        translate: `var(--tw-translate-x) var(--tw-translate-y)`,
      }),
    },
    {
      values: { ...theme('spacing'), ...defaultValuesObject },
      supportsNegativeValues: true,
    },
  );
};
