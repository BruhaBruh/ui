import { ApplyUIPlugin } from '../../ui-plugin.types';

const defaultValues = [0, 1, 2, 3, 6, 12, 45, 90, 180];

export const applyRotate: ApplyUIPlugin = ({ matchUtilities }) => {
  const defaultValuesObject = Object.fromEntries(
    defaultValues.map((v) => [v.toString(), `${v}deg`] as const),
  );
  matchUtilities(
    {
      rotate: (value) => ({
        '--tw-rotate': value,
        rotate: `var(--tw-rotate)`,
      }),
    },
    {
      values: defaultValuesObject,
      supportsNegativeValues: true,
    },
  );
};
