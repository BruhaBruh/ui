import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyVariable: ApplyUIPlugin = ({ matchUtilities }) => {
  matchUtilities({
    var: (value) => {
      const [key, val] = value.split('=');
      return {
        [`--${key}`]: val || 'undefined',
      };
    },
  });
};
