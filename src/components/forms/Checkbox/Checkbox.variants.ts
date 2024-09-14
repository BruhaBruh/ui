import { cva } from 'class-variance-authority';

export const checkboxWrapperVariants = cva(
  [
    'group',
    'inline-flex items-center gap-xs',
    'select-none transition',
    'text-primary',
  ],
  {
    variants: {
      size: {
        sm: ['typography-small'],
        md: ['typography-medium'],
        lg: ['typography-large'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export const checkboxContainerVariants = cva(
  [
    'relative',
    'border-2 border-primary',
    'inline-flex justify-center items-center',
    'transition',
    'ring-brand',
    'group-has-[:focus-visible]:ring',
    'group-data-[invalid=true]:ring group-data-[invalid=true]:ring-critical',
    'overflow-hidden',
    'group-data-[disabled=false]:cursor-pointer',
    'group-data-[disabled=true]:border-disabled-bg',
    'group-data-[disabled]:group-data-[selected=true]:border-transparent',
    'group-data-[disabled=true]:group-data-[selected=true]:bg-disabled',
    'group-data-[disabled=true]:group-data-[selected=true]:text-on-disabled',
    '[&>svg]:absolute [&>svg]:starting:scale-0 [&>svg]:scale-100 [&>svg]:transition-transform',
  ],
  {
    variants: {
      size: {
        sm: [
          'h-4 w-4 min-w-4 rounded-2xs',
          '[&>svg]:h-3 [&>svg]:w-3 [&>svg]:min-w-3',
        ],
        md: [
          'h-5 w-5 min-w-5 rounded-1.5xs',
          '[&>svg]:h-4 [&>svg]:w-4 [&>svg]:min-w-4',
        ],
        lg: [
          'h-6 w-6 min-w-6 rounded-xs',
          '[&>svg]:h-5 [&>svg]:w-5 [&>svg]:min-w-5',
        ],
      },
      color: {
        primary: [
          'group-data-[selected=true]:bg-primary',
          'group-data-[selected=true]:text-on-primary',
        ],
        secondary: [
          'group-data-[selected=true]:bg-secondary',
          'group-data-[selected=true]:text-on-secondary',
        ],
        brand: [
          'group-data-[selected=true]:bg-brand',
          'group-data-[selected=true]:text-on-brand',
        ],
        brandSubdued: [
          'group-data-[selected=true]:bg-brand-subdued',
          'group-data-[selected=true]:text-on-brand-subdued',
        ],
        info: [
          'group-data-[selected=true]:bg-info',
          'group-data-[selected=true]:text-on-info',
        ],
        infoSubdued: [
          'group-data-[selected=true]:bg-info-subdued',
          'group-data-[selected=true]:text-on-info-subdued',
        ],
        success: [
          'group-data-[selected=true]:bg-success',
          'group-data-[selected=true]:text-on-success',
        ],
        successSubdued: [
          'group-data-[selected=true]:bg-success-subdued',
          'group-data-[selected=true]:text-on-success-subdued',
        ],
        caution: [
          'group-data-[selected=true]:bg-caution',
          'group-data-[selected=true]:text-on-caution',
        ],
        cautionSubdued: [
          'group-data-[selected=true]:bg-caution-subdued',
          'group-data-[selected=true]:text-on-caution-subdued',
        ],
        critical: [
          'group-data-[selected=true]:bg-critical',
          'group-data-[selected=true]:text-on-critical',
        ],
        criticalSubdued: [
          'group-data-[selected=true]:bg-critical-subdued',
          'group-data-[selected=true]:text-on-critical-subdued',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  },
);
