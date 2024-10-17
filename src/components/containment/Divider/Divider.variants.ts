import { cva } from 'class-variance-authority';

export const dividerVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center',
    'after:size-full after:rounded-full after:bg-outline-variant',
  ],
  {
    variants: {
      orientation: {
        horizontal: ['h-0.25 w-full'],
        vertical: ['h-full w-0.25'],
      },
      inset: {
        true: [],
        false: [],
      },
      middleInset: {
        true: [],
        false: [],
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      inset: false,
      middleInset: false,
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        inset: true,
        middleInset: false,
        className: 'pl-md',
      },
      {
        orientation: 'horizontal',
        middleInset: true,
        className: 'px-md',
      },
      {
        orientation: 'vertical',
        inset: false,
        middleInset: false,
      },
      {
        orientation: 'vertical',
        inset: true,
        middleInset: false,
        className: 'pt-md',
      },
      {
        orientation: 'vertical',
        middleInset: true,
        className: 'py-md',
      },
    ],
  },
);
