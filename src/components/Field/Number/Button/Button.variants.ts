import { cva } from 'class-variance-authority';

export const numberFieldButtonVariants = cva([
  'inline-flex items-center justify-center',
  'font-medium whitespace-nowrap',
  'transition-colors',
  'focus-visible:outline-none focus-visible:ring-1',
  'disabled:pointer-events-none',
  'focus-visible:ring-secondary',
  'bg-transparent',
  'text-foreground',
  'disabled:text-disabled',
  'hover:bg-secondary hover:text-on-secondary active:bg-secondary-hover',
  'h-5 w-6',
  'text-sm',
  'rounded-sm',
  '[&>svg]:min-w-[0.75rem_!important]',
  '[&>svg]:h-[0.75rem_!important]',
]);
