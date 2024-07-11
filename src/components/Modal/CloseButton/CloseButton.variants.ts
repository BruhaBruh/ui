import { cva } from 'class-variance-authority';

export const modalCloseButtonVariants = cva([
  'inline-flex items-center justify-center',
  'font-medium whitespace-nowrap',
  'transition-transform',
  'focus-visible:outline-none focus-visible:ring-[3px]',
  'disabled:pointer-events-none',
  'focus-visible:ring-secondary',
  'bg-transparent',
  'text-foreground',
  'disabled:text-disabled',
  'h-10 w-10',
  'text-sm',
  '[&>svg]:min-w-4',
  '[&>svg]:h-4',
  'absolute',
  'top-3xs right-3xs',
  'hover:scale-125',
]);
