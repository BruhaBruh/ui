import { ApplyUIPlugin } from '../../ui-plugin.types';

export const defaultDurationValuesObject = {
  'short-1': '50ms',
  'short-2': '100ms',
  'short-3': '150ms',
  'short-4': '200ms',
  'medium-1': '250ms',
  'medium-2': '300ms',
  'medium-3': '350ms',
  'medium-4': '400ms',
  'long-1': '450ms',
  'long-2': '500ms',
  'long-3': '550ms',
  'long-4': '600ms',
  'extra-long-1': '700ms',
  'extra-long-2': '800ms',
  'extra-long-3': '900ms',
  'extra-long-4': '1000ms',
};

export const applyMaterialDurations: ApplyUIPlugin = ({ matchUtilities }) => {
  matchUtilities(
    {
      duration: (value) => ({
        'transition-duration': value,
      }),
    },
    {
      values: defaultDurationValuesObject,
    },
  );
};
