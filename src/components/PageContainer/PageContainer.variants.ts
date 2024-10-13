import { cva } from 'class-variance-authority';

export const pageContainerVariants = cva([
  'bg-surface text-on-surface',
  'relative min-h-screen w-screen overflow-hidden',
  'block',
  'easing-emphasized-decelerate duration-long-4 transition-[transform,border-radius]',
  'scale-100 rounded-none',
  'data-[is-zoomed=true]:scale-90',
  'data-[is-zoomed=true]:rounded-3xl',
]);
