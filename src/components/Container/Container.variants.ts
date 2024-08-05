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
        primary: ['text-foreground', 'before:bg-background'],
        secondary: ['text-on-secondary', 'before:bg-secondary'],
        brand: ['text-on-brand', 'before:bg-brand'],
        brandSubdued: ['text-on-brand-subdued', 'before:bg-brand-subdued'],
        accent: ['text-on-accent', 'before:bg-accent'],
        accentSubdued: ['text-on-accent-subdued', 'before:bg-accent-subdued'],
        info: ['text-on-info', 'before:bg-info'],
        infoSubdued: ['text-on-info-subdued', 'before:bg-info-subdued'],
        success: ['text-on-success', 'before:bg-success'],
        successSubdued: [
          'text-on-success-subdued',
          'before:bg-success-subdued',
        ],
        caution: ['text-on-caution', 'before:bg-caution'],
        cautionSubdued: [
          'text-on-caution-subdued',
          'before:bg-caution-subdued',
        ],
        critical: ['text-on-critical', 'before:bg-critical'],
        criticalSubdued: [
          'text-on-critical-subdued',
          'before:bg-critical-subdued',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
