import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyMaterialVariants: ApplyUIPlugin = ({ addVariant }) => {
  addVariant('string', ['&:before', '&:after']);
  addVariant('group-string', [
    ':merge(.group):has(&):before',
    ':merge(.group):has(&):after',
  ]);
  addVariant('peer-string', [
    ':merge(.peer):has(~ &):before',
    ':merge(.peer):has(~ &):after',
  ]);
  addVariant('state', '&:before');
  addVariant('group-state', ':merge(.group):has(&):before');
  addVariant('peer-state', ':merge(.peer):has(~ &):before');
  addVariant('ring', '&:after');
  addVariant('group-ring', ':merge(.group):has(&):after');
  addVariant('peer-ring', ':merge(.peer):has(~ &):after');
};
