import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyMaterialRipple: ApplyUIPlugin = ({
  addComponents,
  addVariant,
}) => {
  addComponents({
    '.ripple': {
      'z-index': '2',
      position: 'absolute',
      inset: '0',
      overflow: 'hidden',
    },
    '.ripple:after': {
      content: '""',
      position: 'absolute',
      translate: '-50% -50%',
      width: 'var(--ripple-diameter)',
      height: 'var(--ripple-diameter)',
      top: 'var(--ripple-y)',
      left: 'var(--ripple-x)',
      scale: 'var(--ripple-scale, 0)',
      filter: 'blur(4px)',
      'border-radius': '9999px',
    },
  });

  addVariant('ripple', '& > .ripple:after');
  addVariant('group-ripple', ':merge(.group):has(&) > .ripple:after');
  addVariant('peer-ripple', ':merge(.peer):has(~ &) > .ripple:after');
  addVariant('ripple-wrapper', '& > .ripple');
  addVariant('group-ripple-wrapper', ':merge(.group):has(&) > .ripple');
  addVariant('peer-ripple-wrapper', ':merge(.peer):has(~ &) > .ripple');
};
