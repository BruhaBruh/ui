import { cva } from 'class-variance-authority';

export const radioWrapperVariants = cva(
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

export const radioContainerVariants = cva(
  [
    'relative',
    'border border-primary',
    'inline-flex justify-center items-center',
    'transition rounded-full',
    'focus-within:ring-2 overflow-hidden',
    'group-data-[selected=false]:group-data-[disabled=false]:bg-background',
    'group-data-[selected=false]:group-data-[disabled=false]:text-foreground',
    'group-data-[invalid=true]:ring-2 group-data-[invalid=true]:ring-critical',
    'group-data-[selected]:group-data-[disabled=true]:border-disabled',
    'group-data-[selected=true]:group-data-[disabled=true]:bg-disabled',
    'group-data-[selected=true]:group-data-[disabled=true]:text-on-disabled',
    'before:absolute before:rounded-full',
    'before:transition-transform',
    'group-data-[selected=false]:before:scale-0',
    'group-data-[selected=true]:before:scale-100',
    'group-data-[selected=true]:before:bg-current',
  ],
  {
    variants: {
      size: {
        sm: ['h-4 w-4 min-w-4 before:h-2 before:w-2'],
        md: ['h-5 w-5 min-w-5 before:h-3 before:w-3'],
        lg: ['h-6 w-6 min-w-6 before:h-4 before:w-4'],
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
