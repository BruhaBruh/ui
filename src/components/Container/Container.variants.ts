import { cva } from 'class-variance-authority';

export const containerVariants = cva([], {
  variants: {
    color: {
      primary: ['bg-background text-foreground'],
      secondary: ['bg-secondary text-on-secondary'],
      brand: ['bg-brand text-on-brand'],
      brandSubdued: ['bg-brand-subdued text-on-brand-subdued'],
      info: ['bg-info text-on-info'],
      infoSubdued: ['bg-info-subdued text-on-info-subdued'],
      success: ['bg-success text-on-success'],
      successSubdued: ['bg-success-subdued text-on-success-subdued'],
      caution: ['bg-caution text-on-caution'],
      cautionSubdued: ['bg-caution-subdued text-on-caution-subdued'],
      critical: ['bg-critical text-on-critical'],
      criticalSubdued: ['bg-critical-subdued text-on-critical-subdued'],
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export const innerContainerVariants = cva([
  'container',
  'px-md py-3xl',
  'grid gap-md',
  'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12',
]);
