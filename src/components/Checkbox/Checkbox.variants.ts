import { cva } from 'class-variance-authority';

export const checkboxWrapperVariants = cva(
  [
    'inline-flex justify-center items-center gap-2xs select-none [&:has(input:disabled)]:text-disabled',
  ],
  {
    variants: {
      size: {
        sm: ['text-sm font-medium'],
        md: ['text-md font-medium'],
        lg: ['text-lg font-medium'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export const checkboxVariants = cva(
  [
    'border inline-flex justify-center items-center transition ring-brand',
    'peer-focus:outline-none',
  ],
  {
    variants: {
      active: {
        true: [
          'bg-brand text-on-brand border-transparent peer-disabled:bg-disabled peer-disabled:text-disabled',
        ],
        false: ['border-primary peer-disabled:border-disabled'],
      },
      size: {
        sm: [
          'w-4 h-4 rounded-2xs',
          '[&>svg]:w-4',
          '[&>svg]:h-4',
          'peer-focus:ring-2',
        ],
        md: [
          'w-5 h-5 rounded-xs',
          '[&>svg]:w-4',
          '[&>svg]:h-4',
          'peer-focus:ring-2',
        ],
        lg: [
          'w-6 h-6 rounded-sm',
          '[&>svg]:w-5',
          '[&>svg]:h-5',
          'peer-focus:ring-[3px]',
        ],
      },
    },
    defaultVariants: {
      active: false,
      size: 'md',
    },
  },
);

export const checkboxInputVariants = cva(['peer sr-only']);
