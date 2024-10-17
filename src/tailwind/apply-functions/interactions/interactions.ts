import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyInteractions: ApplyUIPlugin = ({ addVariant }) => {
  addVariant('focus-visible', '&[data-focus-visible=true]');
  addVariant(
    'group-focus-visible',
    ':merge(.group)[data-focus-visible=true] &',
  );
  addVariant(
    'peer-focus-visible',
    ':merge(.peer)[data-focus-visible=true] ~ &',
  );
  addVariant('focus-visible-within', '&[data-focus-visible-within=true]');
  addVariant(
    'group-focus-visible-within',
    ':merge(.group)[data-focus-visible-within=true] &',
  );
  addVariant(
    'peer-focus-visible-within',
    ':merge(.peer)[data-focus-visible-within=true] ~ &',
  );
  addVariant('hovered', '&[data-hovered=true]');
  addVariant('group-hovered', ':merge(.group)[data-hovered=true] &');
  addVariant('peer-hovered', ':merge(.peer)[data-hovered=true] ~ &');
  addVariant('pressed', '&[data-pressed=true]');
  addVariant('group-pressed', ':merge(.group)[data-pressed=true] &');
  addVariant('peer-pressed', ':merge(.peer)[data-pressed=true] ~ &');
};
