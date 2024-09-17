import { cva } from 'class-variance-authority';

export const radioWrapperVariants = cva([
  'group',
  'inline-flex items-center gap-sm',
  'typography-medium',
  'select-none transition',
]);

export const radioContainerVariants = cva(
  [
    'relative',
    'h-5 w-5 min-w-5 [&>span]:h-2.5 [&>span]:w-2.5',
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
    'focus-within:before:bg-on-surface/[0.12]',
    'hover:before:bg-on-surface/[0.08]',
    'group-has-[:active]:before:bg-on-surface/[0.12]',
    'before:h-10 before:w-10 before:-z-1',
    'before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
    'before:transition before:easing-emphasized before:duration-medium-1',
  ],
  {
    variants: {
      color: {
        primary: [
          'group-data-[selected=true]:text-primary',
          'group-data-[selected=true]:focus-within:before:bg-primary/[0.12]',
          'group-data-[selected=true]:hover:before:bg-primary/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-primary/[0.12]',
        ],
        secondary: [
          'group-data-[selected=true]:text-secondary',
          'group-data-[selected=true]:focus-within:before:bg-secondary/[0.12]',
          'group-data-[selected=true]:hover:before:bg-secondary/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-secondary/[0.12]',
        ],
        info: [
          'group-data-[selected=true]:text-info',
          'group-data-[selected=true]:focus-within:before:bg-info/[0.12]',
          'group-data-[selected=true]:hover:before:bg-info/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-info/[0.12]',
        ],
        success: [
          'group-data-[selected=true]:text-success',
          'group-data-[selected=true]:focus-within:before:bg-success/[0.12]',
          'group-data-[selected=true]:hover:before:bg-success/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-success/[0.12]',
        ],
        caution: [
          'group-data-[selected=true]:text-caution',
          'group-data-[selected=true]:focus-within:before:bg-caution/[0.12]',
          'group-data-[selected=true]:hover:before:bg-caution/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-caution/[0.12]',
        ],
        critical: [
          'group-data-[selected=true]:text-critical',
          'group-data-[selected=true]:focus-within:before:bg-critical/[0.12]',
          'group-data-[selected=true]:hover:before:bg-critical/[0.08]',
          'group-data-[selected=true]:group-has-[:active]:before:bg-critical/[0.12]',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
