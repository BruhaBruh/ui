import { materialEasing } from '@/config';
import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyMaterialEasings: ApplyUIPlugin = ({ matchUtilities }) => {
  matchUtilities(
    {
      easing: (value) => ({
        'transition-timing-function': value,
      }),
    },
    {
      values: materialEasing.toStringRegistry(),
    },
  );
};
