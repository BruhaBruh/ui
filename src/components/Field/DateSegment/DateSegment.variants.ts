import { cva } from 'class-variance-authority';

export const dateSegmentVariants = cva(
  [
    'outline-none',
    'tabular-nums',
    'rounded-[0.25rem]',
    'focus-visible:bg-info-subdued focus-visible:text-on-info-subdued',
    'p-0.5',
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
