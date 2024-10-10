import { cva } from 'class-variance-authority';

export const dateSegmentVariants = cva([
  'outline-none',
  'tabular-nums',
  'rounded-3xs',
  'p-3xs',
  'focus-visible:bg-on-surface/[0.12]',
  'data-[placeholder=true]:text-on-surface-variant',
]);
