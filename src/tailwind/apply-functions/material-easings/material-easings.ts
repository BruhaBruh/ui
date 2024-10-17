import { ApplyUIPlugin } from '../../ui-plugin.types';

export const defaultEasingValuesObject = {
  standard: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
  'standard-decelerate': 'cubic-bezier(0, 0, 0, 1)',
  'standard-accelerate': 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
  emphasized: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
  'emphasized-decelerate': 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
  'emphasized-accelerate': 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
};

export const applyMaterialEasings: ApplyUIPlugin = ({ matchUtilities }) => {
  matchUtilities(
    {
      easing: (value) => ({
        'transition-timing-function': value,
      }),
    },
    {
      values: defaultEasingValuesObject,
    },
  );
};
