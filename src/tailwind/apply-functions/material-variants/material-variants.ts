import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyMaterialVariants: ApplyUIPlugin = ({ addVariant }) => {
  addVariant('string', ['&:before', '&:after']);
  addVariant('state', '&:before');
  addVariant('ring', '&:after');
};
