import { cva } from 'class-variance-authority';

export const radioWrapperVariants = cva(
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

export const radioContainerVariants = cva(
  [
    'relative',
    'border-2 border-current',
    'inline-flex justify-center items-center',
    'rounded-full before:rounded-full after:rounded-full',
    'text-on-surface-variant',
    'transition duration-medium-2 easing-emphasized',
    'group-data-[disabled=false]:cursor-pointer',
    'group-data-[disabled=true]:text-on-surface/[0.38]',
    '[&>span]:z-1',
    '[&>span]:absolute [&>span]:rounded-full [&>span]:bg-current',
    '[&>span]:transition-transform [&>span]:duration-medium-2 [&>span]:easing-emphasized',
    'group-data-[selected=false]:[&>span]:scale-0',
    'group-data-[selected=true]:[&>span]:scale-100',
    'focus-within:before:bg-on-surface/[0.1]',
    'hover:before:bg-on-surface/[0.08]',
    'group-has-[:active]:before:bg-on-surface/[0.1]',
    'before:absolute before:inset-[-2px]',
    'before:transition before:easing-emphasized before:duration-medium-1',
    'after:absolute after:inset-[-4px] after:-z-5',
    'after:transition after:easing-emphasized-accelerate after:duration-medium-1',
    'after:hidden group-has-[:focus-visible]:after:block',
    'starting:after:ring-[6px] after:ring-[3px]',
    'after:ring-secondary-container',
  ],
  {
    variants: {
      size: {
        sm: ['h-4 w-4 min-w-4 [&>span]:h-2 [&>span]:w-2'],
        md: ['h-5 w-5 min-w-5 [&>span]:h-[0.625rem] [&>span]:w-[0.625rem]'],
        lg: ['h-6 w-6 min-w-6 [&>span]:h-3 [&>span]:w-3'],
      },
      color: {
        primary: [
          'group-data-[selected=true]:text-primary',
          'group-data-[selected=true]:focus-within:before:bg-primary/[0.1]',
          'group-data-[selected=true]:hover:before:bg-primary/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-primary/[0.1]',
        ],
        secondary: [
          'group-data-[selected=true]:text-secondary',
          'group-data-[selected=true]:focus-within:before:bg-secondary/[0.1]',
          'group-data-[selected=true]:hover:before:bg-secondary/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-secondary/[0.1]',
        ],
        info: [
          'group-data-[selected=true]:text-info',
          'group-data-[selected=true]:focus-within:before:bg-info/[0.1]',
          'group-data-[selected=true]:hover:before:bg-info/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-info/[0.1]',
        ],
        success: [
          'group-data-[selected=true]:text-success',
          'group-data-[selected=true]:focus-within:before:bg-success/[0.1]',
          'group-data-[selected=true]:hover:before:bg-success/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-success/[0.1]',
        ],
        caution: [
          'group-data-[selected=true]:text-caution',
          'group-data-[selected=true]:focus-within:before:bg-caution/[0.1]',
          'group-data-[selected=true]:hover:before:bg-caution/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-caution/[0.1]',
        ],
        critical: [
          'group-data-[selected=true]:text-critical',
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
