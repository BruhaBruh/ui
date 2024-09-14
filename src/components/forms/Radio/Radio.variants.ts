import { cva } from 'class-variance-authority';

export const radioWrapperVariants = cva(
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

export const radioContainerVariants = cva(
  [
    'relative',
    'border-2 border-primary',
    'inline-flex justify-center items-center',
    'transition rounded-full',
    'ring-brand',
    'group-has-[:focus-visible]:ring',
    'overflow-hidden',
    'before:absolute before:rounded-full',
    'before:transition',
    'group-data-[disabled=false]:cursor-pointer',
    'group-data-[disabled=true]:before:bg-disabled',
    'group-data-[disabled=true]:border-disabled-bg',
    'group-data-[selected=false]:before:scale-0',
    'group-data-[selected=true]:before:scale-100',
  ],
  {
    variants: {
      size: {
        sm: ['h-4 w-4 min-w-4 before:h-2 before:w-2'],
        md: ['h-5 w-5 min-w-5 before:h-[0.625rem] before:w-[0.625rem]'],
        lg: ['h-6 w-6 min-w-6 before:h-3 before:w-3'],
      },
      color: {
        primary: [
          'group-data-[selected=true]:border-primary-bg',
          'group-data-[selected=true]:before:bg-primary',
        ],
        secondary: [
          'group-data-[selected=true]:border-secondary-bg',
          'group-data-[selected=true]:before:bg-secondary',
        ],
        brand: [
          'group-data-[selected=true]:border-brand-bg',
          'group-data-[selected=true]:before:bg-brand',
        ],
        brandSubdued: [
          'group-data-[selected=true]:border-brand-subdued-bg',
          'group-data-[selected=true]:before:bg-brand-subdued',
        ],
        info: [
          'group-data-[selected=true]:border-info-bg',
          'group-data-[selected=true]:before:bg-info',
        ],
        infoSubdued: [
          'group-data-[selected=true]:border-info-subdued-bg',
          'group-data-[selected=true]:before:bg-info-subdued',
        ],
        success: [
          'group-data-[selected=true]:border-success-bg',
          'group-data-[selected=true]:before:bg-success',
        ],
        successSubdued: [
          'group-data-[selected=true]:border-success-subdued-bg',
          'group-data-[selected=true]:before:bg-success-subdued',
        ],
        caution: [
          'group-data-[selected=true]:border-caution-bg',
          'group-data-[selected=true]:before:bg-caution',
        ],
        cautionSubdued: [
          'group-data-[selected=true]:border-caution-subdued-bg',
          'group-data-[selected=true]:before:bg-caution-subdued',
        ],
        critical: [
          'group-data-[selected=true]:border-critical-bg',
          'group-data-[selected=true]:before:bg-critical',
        ],
        criticalSubdued: [
          'group-data-[selected=true]:border-critical-subdued-bg',
          'group-data-[selected=true]:before:bg-critical-subdued',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  },
);
