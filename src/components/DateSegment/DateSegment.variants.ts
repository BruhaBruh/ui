import { cva } from 'class-variance-authority';

export const dateSegmentVariants = cva(
  [
    'outline-none',
    'tabular-nums',
    'rounded-2xs',
    'focus-visible:bg-info-subdued focus-visible:text-on-info-subdued',
    'p-0.5',
    'select-none',
  ],
  {
    variants: {
      isPlaceholder: {
        true: 'text-disabled',
        false: 'text-foreground',
      },
    },
    defaultVariants: {
      isPlaceholder: false,
    },
  },
);
