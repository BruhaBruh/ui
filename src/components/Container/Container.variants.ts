import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  [
    'container',
    'px-md py-3xl',
    'grid gap-md',
    'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12',
    'relative',
    "before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-full before:w-screen",
    "after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-full after:w-screen",
  ],
  {
    variants: {
      color: {
        primary: [
          'bg-background text-foreground',
          'before:bg-background after:bg-background',
        ],
        secondary: [
          'bg-secondary text-on-secondary',
          'before:bg-secondary after:bg-secondary',
        ],
        brand: ['bg-brand text-on-brand', 'before:bg-brand after:bg-brand'],
        brandSubdued: [
          'bg-brand-subdued text-on-brand-subdued',
          'before:bg-brand-subdued after:bg-brand-subdued',
        ],
        info: ['bg-info text-on-info', 'before:bg-info after:bg-info'],
        infoSubdued: [
          'bg-info-subdued text-on-info-subdued',
          'before:bg-info-subdued after:bg-info-subdued',
        ],
        success: [
          'bg-success text-on-success',
          'before:bg-success after:bg-success',
        ],
        successSubdued: [
          'bg-success-subdued text-on-success-subdued',
          'before:bg-success-subdued after:bg-success-subdued',
        ],
        caution: [
          'bg-caution text-on-caution',
          'before:bg-caution after:bg-caution',
        ],
        cautionSubdued: [
          'bg-caution-subdued text-on-caution-subdued',
          'before:bg-caution-subdued after:bg-caution-subdued',
        ],
        critical: [
          'bg-critical text-on-critical',
          'before:bg-critical after:bg-critical',
        ],
        criticalSubdued: [
          'bg-critical-subdued text-on-critical-subdued',
          'before:bg-critical-subdued after:bg-critical-subdued',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
