import { cva } from 'class-variance-authority';

export const snackbarRegionVariants = cva(
  [
    'fixed',
    'z-200',
    'flex items-stretch gap-xs',
    'data-[empty=false]:w-80',
    'data-[empty=false]:p-md',
  ],
  {
    variants: {
      position: {
        topLeft: ['left-md top-md'],
        top: ['left-1/2 top-md -translate-x-1/2'],
        topRight: ['right-md top-md'],
        right: ['right-md top-1/2 -translate-y-1/2'],
        bottomLeft: ['bottom-md left-md'],
        bottom: ['bottom-md left-1/2 -translate-x-1/2'],
        bottomRight: ['bottom-md right-md'],
        left: ['left-md top-1/2 -translate-y-1/2'],
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
    compoundVariants: [
      {
        position: ['topLeft', 'top', 'topRight', 'right', 'left'],
        className: ['flex-col-reverse'],
      },
      {
        position: ['bottomRight', 'bottom', 'bottomLeft'],
        className: ['flex-col'],
      },
    ],
  },
);
