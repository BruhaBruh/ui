import { materialDuration } from '../../../../config';
import type { ApplyUIPlugin } from '../../../ui-plugin.types';

export const applyMaterialDurations: ApplyUIPlugin = ({ matchUtilities }) => {
  matchUtilities(
    {
      duration: (value) => ({
        'transition-duration': value,
      }),
    },
    {
      values: materialDuration.toStringRegistry(),
    },
  );
};
