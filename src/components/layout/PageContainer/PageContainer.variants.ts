import { cva } from 'class-variance-authority';

export const pageContainerVariants = cva([
  'bg-surface text-on-surface',
  'relative min-h-screen w-screen overflow-hidden',
  'block',
  'transition-[scale,border-radius_long-4_emphasized-decelerate]',
  'rounded-none scale-100',
  'data-[is-zoomed=true]:scale-75',
  'data-[is-zoomed=true]:rounded-3xl',
]);
