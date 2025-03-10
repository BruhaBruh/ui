import type { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyInteractions: ApplyUIPlugin = ({ addVariant }) => {
  const addVariantName = (name: string) => {
    addVariant(name, `&[data-${name}=true]`);
    addVariant(`group-${name}`, `:merge(.group)[data-${name}=true] &`);
    addVariant(`peer-${name}`, `:merge(.peer)[data-${name}=true] ~ &`);
  };

  addVariantName('in-focus');
  addVariantName('in-focus-within');
  addVariantName('in-focus-visible');
  addVariantName('in-focus-visible-within');
  addVariantName('is-hovered');
  addVariantName('is-pressed');
  addVariantName('is-disabled');
};
