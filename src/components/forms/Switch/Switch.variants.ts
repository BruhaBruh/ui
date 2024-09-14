import { cva } from 'class-variance-authority';

export const switchContainerVariants = cva(
  [
    'group',
    'relative rounded-full',
    'inline-flex items-center',
    'bg-secondary',
    'border-2 border-primary',
    'overflow-hidden',
    'transition',
    'ring-brand',
    'has-[:focus-visible]:ring',
    'data-[disabled=false]:cursor-pointer',
    'data-[selected=true]:border-transparent',
    'data-[selected]:data-[disabled=true]:bg-disabled',
    'data-[selected=false]:data-[disabled=true]:border-secondary',
  ],
  {
    variants: {
      size: {
        sm: ['h-6 w-9 min-w-9'],
        md: ['h-7 w-11 min-w-11'],
        lg: ['h-8 w-13 min-w-13'],
      },
      color: {
        primary: ['data-[selected=true]:bg-primary'],
        secondary: ['data-[selected=true]:bg-secondary'],
        brand: ['data-[selected=true]:bg-brand'],
        brandSubdued: ['data-[selected=true]:bg-brand-subdued'],
        info: ['data-[selected=true]:bg-info'],
        infoSubdued: ['data-[selected=true]:bg-info-subdued'],
        success: ['data-[selected=true]:bg-success'],
        successSubdued: ['data-[selected=true]:bg-success-subdued'],
        caution: ['data-[selected=true]:bg-caution'],
        cautionSubdued: ['data-[selected=true]:bg-caution-subdued'],
        critical: ['data-[selected=true]:bg-critical'],
        criticalSubdued: ['data-[selected=true]:bg-critical-subdued'],
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  },
);

export const switchThumbVariants = cva(
  [
    'absolute',
    'transition-transform',
    'inline-flex items-center justify-center',
    'before:transition',
    'before:bg-primary-border',
    'before:rounded-full',
    'group-data-[pressed=true]:before:scale-[1.75]',
    'group-data-[pressed=false]:group-data-[selected=true]:before:scale-150',
    'group-data-[selected]:group-data-[disabled=true]:before:bg-disabled-text',
  ],
  {
    variants: {
      size: {
        sm: [
          'h-5 w-5 min-w-5',
          'before:h-3 before:w-3',
          'group-data-[selected=true]:translate-x-3',
        ],
        md: [
          'h-6 w-6',
          'before:h-[0.875rem] before:w-[0.875rem]',
          'group-data-[selected=true]:translate-x-4',
        ],
        lg: [
          'h-7 w-7',
          'before:h-4 before:w-4',
          'group-data-[selected=true]:translate-x-5',
        ],
      },
      color: {
        primary: ['group-data-[selected=true]:before:bg-on-primary-text'],
        secondary: ['group-data-[selected=true]:before:bg-on-secondary-text'],
        brand: ['group-data-[selected=true]:before:bg-on-brand-text'],
        brandSubdued: [
          'group-data-[selected=true]:before:bg-on-brand-subdued-text',
        ],
        info: ['group-data-[selected=true]:before:bg-on-info-text'],
        infoSubdued: [
          'group-data-[selected=true]:before:bg-on-info-subdued-text',
        ],
        success: ['group-data-[selected=true]:before:bg-on-success-text'],
        successSubdued: [
          'group-data-[selected=true]:before:bg-on-success-subdued-text',
        ],
        caution: ['group-data-[selected=true]:before:bg-on-caution-text'],
        cautionSubdued: [
          'group-data-[selected=true]:before:bg-on-caution-subdued-text',
        ],
        critical: ['group-data-[selected=true]:before:bg-on-critical-text'],
        criticalSubdued: [
          'group-data-[selected=true]:before:bg-on-critical-subdued-text',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  },
);
