import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyMaterialRipple: ApplyUIPlugin = ({
  addBase,
  addComponents,
  addVariant,
}) => {
  addBase({
    '@keyframes ripple': {
      from: {
        scale: '0',
      },
      to: {
        scale: '1',
      },
    },
    '@keyframes ripple-fade': {
      from: {
        opacity: '1',
      },
      to: {
        opacity: '0',
      },
    },
  });
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
      'aspect-ratio': '1',
      translate: '-50% -50%',
      width: 'var(--ripple-diameter)',
      height: 'var(--ripple-diameter)',
      top: 'var(--ripple-y)',
      left: 'var(--ripple-x)',
      scale: 'var(--ripple-scale, 0)',
      opacity: 'var(--ripple-opacity, 1)',
      'border-radius': '9999px',
    },
  });

  addVariant('ripple', '& > .ripple:after');
  addVariant('group-ripple', ':merge(.group):has(&) > .ripple:after');
  addVariant('peer-ripple', ':merge(.peer):has(&) > .ripple:after');
  addVariant('ripple-wrapper', '& > .ripple');
  addVariant('group-ripple-wrapper', ':merge(.group):has(&) > .ripple');
  addVariant('peer-ripple-wrapper', ':merge(.peer):has(&) > .ripple');
};
