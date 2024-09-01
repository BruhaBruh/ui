import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  [
    'container',
    'px-md py-3xl',
    'grid gap-md',
    'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12',
    'relative',
    "before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-screen before:-z-[1]",
  ],
  {
    variants: {
      color: {
        background: ['text-foreground', 'before:bg-background'],
        primary: ['text-on-primary', 'before:bg-primary'],
        secondary: ['text-on-secondary', 'before:bg-secondary'],
        brand: ['text-on-brand-midnight', 'before:bg-brand-midnight'],
        info: ['text-on-info-midnight', 'before:bg-info-midnight'],
        success: ['text-on-success-midnight', 'before:bg-success-midnight'],
        caution: ['text-on-caution-midnight', 'before:bg-caution-midnight'],
        critical: ['text-on-critical-midnight', 'before:bg-critical-midnight'],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
