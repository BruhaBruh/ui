import { cva } from '@/utility';

const variants = cva(
  {
    name: 'group/container',
    flex: 'flex items-stretch justify-center',
  },
  {
    variants: {
      color: {
        surface: {
          background: 'bg-surface',
          typography: 'text-on-surface',
        },
        'surface-container': {
          background: 'bg-surface-container',
          typography: 'text-on-surface',
        },
        'inverse-surface': {
          background: 'bg-inverse-surface',
          typography: 'text-inverse-on-surface',
        },
        primary: {
          background: 'bg-primary',
          typography: 'text-on-primary',
        },
        'primary-container': {
          background: 'bg-primary-container',
          typography: 'text-on-primary-container',
        },
        secondary: {
          background: 'bg-secondary',
          typography: 'text-on-secondary',
        },
        'secondary-container': {
          background: 'bg-secondary-container',
          typography: 'text-on-secondary-container',
        },
        info: {
          background: 'bg-info',
          typography: 'text-on-info',
        },
        'info-container': {
          background: 'bg-info-container',
          typography: 'text-on-info-container',
        },
        success: {
          background: 'bg-success',
          typography: 'text-on-success',
        },
        'success-container': {
          background: 'bg-success-container',
          typography: 'text-on-success-container',
        },
        caution: {
          background: 'bg-caution',
          typography: 'text-on-caution',
        },
        'caution-container': {
          background: 'bg-caution-container',
          typography: 'text-on-caution-container',
        },
        critical: {
          background: 'bg-critical',
          typography: 'text-on-critical',
        },
        'critical-container': {
          background: 'bg-critical-container',
          typography: 'text-on-critical-container',
        },
        none: {},
      },
    },
    defaultVariants: {
      color: 'none',
    },
  },
);

const contentVariants = cva(
  {
    name: 'container--content',
    flex: 'flex-1',
    spacing: 'px-md',
  },
  {
    variants: {
      variant: {
        grid: {
          box: 'grid grid-cols-12 gap-md',
        },
        flex: {
          flex: 'flex gap-md',
        },
        none: {},
      },
      fluid: {
        true: {},
        false: {
          box: 'container',
        },
      },
      padding: {
        top: {
          spacing: 'pt-3xl',
        },
        bottom: {
          spacing: 'pb-3xl',
        },
        both: {
          spacing: 'py-3xl',
        },
        none: {},
      },
    },
    defaultVariants: {
      variant: 'none',
      fluid: false,
      padding: 'none',
    },
  },
);

export const containerVariants = Object.assign(variants, {
  content: contentVariants,
});
