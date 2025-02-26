import { cva } from '@/utility';

const variants = cva(
  {
    name: 'popover group/popover',
    overflow: 'overflow-hidden',
    layout: 'relative',
  },
  {
    variants: {
      position: {
        'top-start': {},
        top: {},
        'top-end': {},
        'right-start': {},
        right: {},
        'right-end': {},
        'bottom-start': {},
        bottom: {},
        'bottom-end': {},
        'left-start': {},
        left: {},
        'left-end': {},
      },
    },
    defaultVariants: {
      position: 'top',
    },
  },
);

export const popoverVariants = Object.assign(variants, {});
