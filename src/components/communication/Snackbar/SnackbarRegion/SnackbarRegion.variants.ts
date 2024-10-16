import { cva } from 'class-variance-authority';

export const snackbarRegionVariants = cva(
  [
    'fixed',
    'z-200',
    'flex items-stretch',
    'data-[empty=false]:w-80',
    'data-[empty=false]:p-md',
  ],
  {
    variants: {
      position: {
        topLeft: ['left-md top-md'],
        top: ['top-md left-1/2 -translate-x-1/2'],
        topRight: ['right-md top-md'],
        right: ['right-md top-1/2 -translate-y-1/2'],
        bottomLeft: ['bottom-md left-md'],
        bottom: ['bottom-md left-1/2 -translate-x-1/2'],
        bottomRight: ['bottom-md right-md'],
        left: ['left-md top-1/2 -translate-y-1/2'],
      },
    },
    defaultVariants: {
      position: 'bottomRight',
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

export const snackbarRegionItemWrapperVariants = cva(
  ['transition-rows duration-medium-2', 'grid'],
  {
    variants: {
      position: {
        topLeft: ['items-end'],
        top: ['items-end'],
        topRight: ['items-end'],
        right: [],
        bottomLeft: ['items-start'],
        bottom: ['items-start'],
        bottomRight: ['items-start'],
        left: [],
      },
      animation: {
        entering: [
          'animate-[grid-row_.3s_cubic-bezier(0.05,0.7,0.1,1.0)_forwards]',
        ],
        queued: [
          'animate-[grid-row_.3s_cubic-bezier(0.05,0.7,0.1,1.0)_forwards]',
        ],
        exiting: [
          '-z-5',
          'animate-[grid-row-reverse_.3s_cubic-bezier(0.05,0.7,0.1,1.0)_forwards]',
        ],
      },
    },
    defaultVariants: {
      position: 'bottomRight',
      animation: 'queued',
    },
    compoundVariants: [
      {
        position: ['bottomLeft', 'bottom', 'bottomRight'],
        animation: ['queued', 'entering'],
        className: [
          '[--end-margin-bottom:var(--ui-spacing-xs)]',
          '[&:last-child]:[--end-margin-bottom:0px]',
        ],
      },
      {
        position: ['topLeft', 'top', 'topRight', 'left', 'right'],
        animation: ['queued', 'entering'],
        className: [
          '[--end-margin-bottom:var(--ui-spacing-xs)]',
          '[&:first-child]:[--end-margin-bottom:0px]',
        ],
      },
      {
        position: ['topRight', 'right', 'bottomRight'],
        animation: ['queued', 'entering'],
        className: ['starting:translate-x-[720px]'],
      },
      {
        position: ['topLeft', 'left', 'bottomLeft'],
        animation: ['queued', 'entering'],
        className: ['starting:translate-x-[-720px]'],
      },
      {
        position: 'top',
        animation: ['queued', 'entering'],
        className: ['starting:translate-y-[-720px]'],
      },
      {
        position: 'bottom',
        animation: ['queued', 'entering'],
        className: ['starting:translate-y-[720px]'],
      },
      {
        position: ['topRight', 'right', 'bottomRight'],
        animation: 'exiting',
        className: ['translate-x-[720px]'],
      },
      {
        position: ['topLeft', 'left', 'bottomLeft'],
        animation: 'exiting',
        className: ['translate-x-[-720px]'],
      },
      {
        position: 'top',
        animation: 'exiting',
        className: ['translate-y-[-720px]'],
      },
      {
        position: 'bottom',
        animation: 'exiting',
        className: ['translate-y-[720px]'],
      },
    ],
  },
);
