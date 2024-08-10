import { cva } from 'class-variance-authority';

export const modalUnderlayVariants = cva([
  'fixed inset-0',
  'z-100',
  'bg-black-300 backdrop-blur-sm',
  'flex items-center justify-center',
  'animate-fade-in',
]);

export const modalContentVariants = cva([
  'bg-background text-background relative max-w-[calc(100vw-2rem)] sm:max-w-sm w-full max-h-[calc(100vh-8rem)] overflow-hidden',
  'p-lg rounded-2xl',
  'animate-fade-in',
  'relative',
]);
