import { cva } from 'class-variance-authority';

export const switchWrapperVariants = cva(
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

export const switchContainerVariants = cva(
  [
    'relative rounded-full',
    'border border-primary',
    'inline-flex items-center',
    'transition',
    'focus-within:ring-2 overflow-hidden',
    'group-data-[selected=false]:group-data-[disabled=false]:bg-background',
    'group-data-[selected=false]:group-data-[disabled=false]:text-foreground',
    'group-data-[selected]:group-data-[disabled=true]:border-disabled',
    'group-data-[selected=true]:group-data-[disabled=true]:bg-disabled',
    'group-data-[selected=true]:group-data-[disabled=true]:text-on-disabled',
    'group-data-[selected=true]:border-transparent',
    'before:absolute before:bg-current before:rounded-full before:border-[2px] before:transition-transform',
  ],
  {
    variants: {
      size: {
        sm: [
          'h-4 w-8 min-w-8',
          'before:h-[calc(100%-0.125rem)] before:aspect-square',
          'before:left-[0.0675rem] group-data-[selected=true]:before:translate-x-4',
        ],
        md: [
          'h-5 w-10 min-w-10',
          'before:h-[calc(100%-0.25rem)] before:aspect-square',
          'before:left-[0.125rem] group-data-[selected=true]:before:translate-x-5',
        ],
        lg: [
          'h-6 w-12 min-w-12',
          'before:h-[calc(100%-0.375rem)] before:aspect-square',
          'before:left-[0.1875rem] group-data-[selected=true]:before:translate-x-6',
        ],
      },
      color: {
        primary: [
          'ring-primary',
          'group-data-[selected=true]:bg-primary',
          'group-data-[selected=true]:text-on-primary',
        ],
        secondary: [
          'ring-secondary',
          'group-data-[selected=true]:bg-secondary',
          'group-data-[selected=true]:text-on-secondary',
        ],
        brand: [
          'ring-brand',
          'group-data-[selected=true]:bg-brand',
          'group-data-[selected=true]:text-on-brand',
        ],
        brandSubdued: [
          'ring-brand',
          'group-data-[selected=true]:bg-brand-subdued',
          'group-data-[selected=true]:text-on-brand-subdued',
        ],
        info: [
          'ring-info',
          'group-data-[selected=true]:bg-info',
          'group-data-[selected=true]:text-on-info',
        ],
        infoSubdued: [
          'ring-info',
          'group-data-[selected=true]:bg-info-subdued',
          'group-data-[selected=true]:text-on-info-subdued',
        ],
        success: [
          'ring-success',
          'group-data-[selected=true]:bg-success',
          'group-data-[selected=true]:text-on-success',
        ],
        successSubdued: [
          'ring-success',
          'group-data-[selected=true]:bg-success-subdued',
          'group-data-[selected=true]:text-on-success-subdued',
        ],
        caution: [
          'ring-caution',
          'group-data-[selected=true]:bg-caution',
          'group-data-[selected=true]:text-on-caution',
        ],
        cautionSubdued: [
          'ring-caution',
          'group-data-[selected=true]:bg-caution-subdued',
          'group-data-[selected=true]:text-on-caution-subdued',
        ],
        critical: [
          'ring-critical',
          'group-data-[selected=true]:bg-critical',
          'group-data-[selected=true]:text-on-critical',
        ],
        criticalSubdued: [
          'ring-critical',
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
