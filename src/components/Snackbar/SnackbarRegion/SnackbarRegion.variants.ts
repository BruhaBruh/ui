import { cva } from 'class-variance-authority';

export const snackbarRegionContainerVariants = cva(
  [
    'fixed',
    'z-200',
    'p-md',
    'overflow-hidden',
    'flex items-stretch',
    '[counter-reset:snackbar-region]',
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
  [
    'transition-rows duration-medium-2',
    'grid',
    '[counter-increment:snackbar-region]',
  ],
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
        queued: [],
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
        animation: 'entering',
        className: [
          '[--end-margin-bottom:var(--ui-spacing-xs)]',
          '[&:last-child]:[--end-margin-bottom:0px]',
        ],
      },
      {
        position: ['topLeft', 'top', 'topRight', 'left', 'right'],
        animation: 'entering',
        className: [
          '[--end-margin-bottom:var(--ui-spacing-xs)]',
          '[&:first-child]:[--end-margin-bottom:0px]',
        ],
      },
      {
        position: ['topRight', 'right', 'bottomRight'],
        animation: 'entering',
        className: ['starting:translate-x-[720px]'],
      },
      {
        position: ['topLeft', 'left', 'bottomLeft'],
        animation: 'entering',
        className: ['starting:translate-x-[-720px]'],
      },
      {
        position: 'top',
        animation: 'entering',
        className: ['starting:translate-y-[-720px]'],
      },
      {
        position: 'bottom',
        animation: 'entering',
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
