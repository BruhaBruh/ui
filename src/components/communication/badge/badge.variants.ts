import { cva } from '@/utility';

const variants = cva(
  {
    name: 'badge group/badge',
    box: 'rounded-full',
    layout: 'z-10',
    flex: 'inline-flex items-center justify-center',
    typography: 'typography-label-small',
    other: 'pointer-events-none select-none',
  },
  {
    variants: {
      size: {
        small: {
          box: 'size-1.5',
        },
        large: {
          box: [
            'h-4',
            'data-[one-digit=true]:w-4',
            'data-[one-digit=false]:px-2xs',
          ],
        },
      },
      color: {
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
      },
      placement: {
        default: {},
        icon: {
          layout: 'absolute',
        },
      },
    },
    defaultVariants: {
      size: 'small',
      color: 'primary',
    },
    compoundVariants: [
      {
        size: 'small',
        placement: 'icon',
        className: {
          spacing:
            'bottom-[calc(100%-var(--spacing-1-5))] left-[calc(100%-var(--spacing-1-5))]',
        },
      },
      {
        size: 'large',
        placement: 'icon',
        className: {
          spacing:
            'bottom-[calc(100%-var(--spacing-3-5))] left-[calc(100%-var(--spacing-3))]',
        },
      },
    ],
  },
);

export const badgeVariants = Object.assign(variants, {});
