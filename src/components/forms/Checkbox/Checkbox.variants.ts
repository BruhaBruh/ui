import { cva } from 'class-variance-authority';

export const checkboxWrapperVariants = cva(
  [
    'group',
    'inline-flex items-center gap-2xs',
    'select-none transition',
    'text-secondary data-[disabled=true]:text-disabled',
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
    'bg-background text-foreground',
    'border border-primary',
    'inline-flex justify-center items-center',
    'transition',
    'focus-within:ring-2 overflow-hidden',
    'group-data-[invalid=true]:ring-2 group-data-[invalid=true]:ring-critical',
    'group-data-[selected]:group-data-[disabled=true]:border-disabled',
    'group-data-[selected=true]:group-data-[disabled=true]:bg-disabled',
    'group-data-[selected=true]:group-data-[disabled=true]:text-on-disabled',
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
          'ring-primary',
          'group-data-[selected=true]:bg-primary',
          'group-data-[selected=true]:text-on-primary',
          'group-data-[selected=true]:border-primary',
        ],
        secondary: [
          'ring-secondary',
          'group-data-[selected=true]:bg-secondary',
          'group-data-[selected=true]:text-on-secondary',
          'group-data-[selected=true]:border-secondary',
        ],
        brand: [
          'ring-brand',
          'group-data-[selected=true]:bg-brand',
          'group-data-[selected=true]:text-on-brand',
          'group-data-[selected=true]:border-brand',
        ],
        brandSubdued: [
          'ring-brand',
          'group-data-[selected=true]:bg-brand-subdued',
          'group-data-[selected=true]:text-on-brand-subdued',
          'group-data-[selected=true]:border-brand',
        ],
        info: [
          'ring-info',
          'group-data-[selected=true]:bg-info',
          'group-data-[selected=true]:text-on-info',
          'group-data-[selected=true]:border-info',
        ],
        infoSubdued: [
          'ring-info',
          'group-data-[selected=true]:bg-info-subdued',
          'group-data-[selected=true]:text-on-info-subdued',
          'group-data-[selected=true]:border-info',
        ],
        success: [
          'ring-success',
          'group-data-[selected=true]:bg-success',
          'group-data-[selected=true]:text-on-success',
          'group-data-[selected=true]:border-success',
        ],
        successSubdued: [
          'ring-success',
          'group-data-[selected=true]:bg-success-subdued',
          'group-data-[selected=true]:text-on-success-subdued',
          'group-data-[selected=true]:border-success',
        ],
        caution: [
          'ring-caution',
          'group-data-[selected=true]:bg-caution',
          'group-data-[selected=true]:text-on-caution',
          'group-data-[selected=true]:border-caution',
        ],
        cautionSubdued: [
          'ring-caution',
          'group-data-[selected=true]:bg-caution-subdued',
          'group-data-[selected=true]:text-on-caution-subdued',
          'group-data-[selected=true]:border-caution',
        ],
        critical: [
          'ring-critical',
          'group-data-[selected=true]:bg-critical',
          'group-data-[selected=true]:text-on-critical',
          'group-data-[selected=true]:border-critical',
        ],
        criticalSubdued: [
          'ring-critical',
          'group-data-[selected=true]:bg-critical-subdued',
          'group-data-[selected=true]:text-on-critical-subdued',
          'group-data-[selected=true]:border-critical',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  },
);
