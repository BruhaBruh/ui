import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyInteractions: ApplyUIPlugin = ({ addVariant }) => {
  const addVariantName = (name: string, defaultSelector?: string) => {
    if (defaultSelector) {
      addVariant(name, [`&[data-${name}=true]`, `&${defaultSelector}`]);
      addVariant(`group-${name}`, [
        `:merge(.group)[data-${name}=true] &`,
        `:merge(.group)${defaultSelector} &`,
      ]);
      addVariant(`peer-${name}`, [
        `:merge(.peer)[data-${name}=true] ~ &`,
        `:merge(.peer)${defaultSelector} ~ &`,
      ]);
    } else {
      addVariant(name, `&[data-${name}=true]`);
      addVariant(`group-${name}`, `:merge(.group)[data-${name}=true] &`);
      addVariant(`peer-${name}`, `:merge(.peer)[data-${name}=true] ~ &`);
    }
  };

  addVariantName('focused');
  addVariantName('focused-within');
  addVariantName('focused-visible');
  addVariantName('focused-visible-within');
  addVariantName('hovered');
  addVariantName('pressed');
  addVariantName('disabled', ':disabled');
};
