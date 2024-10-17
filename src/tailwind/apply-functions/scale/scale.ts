import { ApplyUIPlugin } from '../../ui-plugin.types';

const defaultValues = [0, 25, 50, 75, 90, 95, 100, 105, 110, 125, 150];

export const applyScale: ApplyUIPlugin = ({ matchUtilities }) => {
  const defaultValuesObject = Object.fromEntries(
    defaultValues.map((v) => [v.toString(), (v / 100).toString()] as const),
  );
  matchUtilities(
    {
      scale: (value) => ({
        '--tw-scale-x': value,
        '--tw-scale-y': value,
        scale: `var(--tw-scale-x) var(--tw-scale-y)`,
      }),
      'scale-x': (value) => ({
        '--tw-scale-x': value,
        scale: `var(--tw-scale-x) var(--tw-scale-y)`,
      }),
      'scale-y': (value) => ({
        '--tw-scale-y': value,
        scale: `var(--tw-scale-x) var(--tw-scale-y)`,
      }),
    },
    { values: defaultValuesObject },
  );
};
