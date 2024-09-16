import { cva } from 'class-variance-authority';

export const checkboxWrapperVariants = cva(
  ['group', 'inline-flex items-center gap-xs', 'select-none transition'],
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
    'border-2 border-on-surface-variant',
    'inline-flex justify-center items-center',
    'transition duration-medium-2 easing-emphasized',
    'group-data-[disabled=false]:cursor-pointer',
    'group-data-[selected=true]:border-transparent',
    'focus-within:before:bg-on-surface/[0.1]',
    'hover:before:bg-on-surface/[0.08]',
    'group-has-[:active]:before:bg-on-surface/[0.1]',
    'before:absolute before:inset-[-2px]',
    'before:transition before:easing-emphasized before:duration-medium-1',
    'after:absolute after:inset-[-4px] after:-z-5',
    'after:transition after:easing-emphasized-accelerate after:duration-medium-1',
    'after:hidden group-has-[:focus-visible]:after:block group-data-[invalid=true]:after:block',
    'starting:after:ring-[6px] after:ring-[3px]',
    'group-data-[invalid=false]:after:ring-secondary-container',
    'group-data-[invalid=true]:after:ring-critical-container',
    'group-data-[disabled=true]:group-data-[selected=false]:border-on-surface/[0.38]',
    'group-data-[disabled=true]:group-data-[selected=true]:bg-on-surface/[0.38]',
    'group-data-[disabled=true]:group-data-[selected=true]:text-surface',
    '[&>svg]:z-1',
    '[&>svg]:absolute',
    '[&>svg]:starting:scale-0 [&>svg]:scale-100',
    '[&>svg]:transition-transform',
    '[&>svg]:easing-emphasized-accelerate [&>svg]:duration-short-4',
  ],
  {
    variants: {
      size: {
        sm: [
          'h-4 w-4 min-w-4 rounded-2xs before:rounded-2xs after:rounded-2xs',
          '[&>svg]:h-3 [&>svg]:w-3 [&>svg]:min-w-3',
        ],
        md: [
          'h-5 w-5 min-w-5 rounded-1.5xs before:rounded-1.5xs after:rounded-1.5xs',
          '[&>svg]:h-4 [&>svg]:w-4 [&>svg]:min-w-4',
        ],
        lg: [
          'h-6 w-6 min-w-6 rounded-xs before:rounded-xs after:rounded-xs',
          '[&>svg]:h-5 [&>svg]:w-5 [&>svg]:min-w-5',
        ],
      },
      color: {
        primary: [
          'group-data-[selected=true]:bg-primary',
          'group-data-[selected=true]:text-on-primary',
          'group-data-[selected=true]:focus-within:before:bg-primary/[0.1]',
          'group-data-[selected=true]:hover:before:bg-primary/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-primary/[0.1]',
        ],
        secondary: [
          'group-data-[selected=true]:bg-secondary',
          'group-data-[selected=true]:text-on-secondary',
          'group-data-[selected=true]:focus-within:before:bg-secondary/[0.1]',
          'group-data-[selected=true]:hover:before:bg-secondary/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-secondary/[0.1]',
        ],
        info: [
          'group-data-[selected=true]:bg-info',
          'group-data-[selected=true]:text-on-info',
          'group-data-[selected=true]:focus-within:before:bg-info/[0.1]',
          'group-data-[selected=true]:hover:before:bg-info/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-info/[0.1]',
        ],
        success: [
          'group-data-[selected=true]:bg-success',
          'group-data-[selected=true]:text-on-success',
          'group-data-[selected=true]:focus-within:before:bg-success/[0.1]',
          'group-data-[selected=true]:hover:before:bg-success/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-success/[0.1]',
        ],
        caution: [
          'group-data-[selected=true]:bg-caution',
          'group-data-[selected=true]:text-on-caution',
          'group-data-[selected=true]:focus-within:before:bg-caution/[0.1]',
          'group-data-[selected=true]:hover:before:bg-caution/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-caution/[0.1]',
        ],
        critical: [
          'group-data-[selected=true]:bg-critical',
          'group-data-[selected=true]:text-on-critical',
          'group-data-[selected=true]:focus-within:before:bg-critical/[0.1]',
          'group-data-[selected=true]:hover:before:bg-critical/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-critical/[0.1]',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  },
);
