import { cva } from 'class-variance-authority';

export const checkboxWrapperVariants = cva([
  'group',
  'inline-flex items-center gap-sm',
  'typography-medium',
  'select-none transition',
]);

export const checkboxContainerVariants = cva(
  [
    'relative',
    'h-4.5 w-4.5 min-w-4.5 rounded-1.5xs before:rounded-full',
    'border-2 border-on-surface-variant',
    'inline-flex justify-center items-center',
    'transition duration-medium-2 easing-emphasized',
    'group-data-[disabled=false]:cursor-pointer',
    'group-data-[selected=true]:border-transparent',
    'focus-within:before:bg-on-surface/[0.12]',
    'hover:before:bg-on-surface/[0.08]',
    'group-has-[:active]:before:bg-on-surface/[0.12]',
    'before:h-10 before:w-10 before:-z-1',
    'before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
    'before:transition before:easing-emphasized before:duration-medium-1',
    'group-data-[invalid=true]:before:bg-critical-container',
    'group-data-[disabled=true]:before:bg-transparent',
    'group-data-[disabled=true]:group-data-[selected=false]:border-on-surface/[0.38]',
    'group-data-[disabled=true]:group-data-[selected=true]:bg-on-surface/[0.38]',
    'group-data-[disabled=true]:group-data-[selected=true]:text-surface',
    '[&>svg]:z-1',
    '[&>svg]:absolute',
    '[&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:min-w-3.5',
    '[&>svg]:starting:scale-0 [&>svg]:scale-100',
    '[&>svg]:transition-transform',
    '[&>svg]:easing-emphasized-accelerate [&>svg]:duration-short-4',
  ],
  {
    variants: {
      color: {
        primary: [
          'group-data-[selected=true]:bg-primary',
          'group-data-[selected=true]:text-on-primary',
          'group-data-[invalid=false]:group-data-[selected=true]:focus-within:before:bg-primary/[0.12]',
          'group-data-[invalid=false]:group-data-[selected=true]:hover:before:bg-primary/[0.08]',
          'group-data-[invalid=false]:group-data-[selected=true]:group-has-[:active]:before:bg-primary/[0.12]',
        ],
        secondary: [
          'group-data-[selected=true]:bg-secondary',
          'group-data-[selected=true]:text-on-secondary',
          'group-data-[invalid=false]:group-data-[selected=true]:focus-within:before:bg-secondary/[0.12]',
          'group-data-[invalid=false]:group-data-[selected=true]:hover:before:bg-secondary/[0.08]',
          'group-data-[invalid=false]:group-data-[selected=true]:group-has-[:active]:before:bg-secondary/[0.12]',
        ],
        info: [
          'group-data-[selected=true]:bg-info',
          'group-data-[selected=true]:text-on-info',
          'group-data-[invalid=false]:group-data-[selected=true]:focus-within:before:bg-info/[0.12]',
          'group-data-[invalid=false]:group-data-[selected=true]:hover:before:bg-info/[0.08]',
          'group-data-[invalid=false]:group-data-[selected=true]:group-has-[:active]:before:bg-info/[0.12]',
        ],
        success: [
          'group-data-[selected=true]:bg-success',
          'group-data-[selected=true]:text-on-success',
          'group-data-[invalid=false]:group-data-[selected=true]:focus-within:before:bg-success/[0.12]',
          'group-data-[invalid=false]:group-data-[selected=true]:hover:before:bg-success/[0.08]',
          'group-data-[invalid=false]:group-data-[selected=true]:group-has-[:active]:before:bg-success/[0.12]',
        ],
        caution: [
          'group-data-[selected=true]:bg-caution',
          'group-data-[selected=true]:text-on-caution',
          'group-data-[invalid=false]:group-data-[selected=true]:focus-within:before:bg-caution/[0.12]',
          'group-data-[invalid=false]:group-data-[selected=true]:hover:before:bg-caution/[0.08]',
          'group-data-[invalid=false]:group-data-[selected=true]:group-has-[:active]:before:bg-caution/[0.12]',
        ],
        critical: [
          'group-data-[selected=true]:bg-critical',
          'group-data-[selected=true]:text-on-critical',
          'group-data-[invalid=false]:group-data-[selected=true]:focus-within:before:bg-critical/[0.12]',
          'group-data-[invalid=false]:group-data-[selected=true]:hover:before:bg-critical/[0.08]',
          'group-data-[invalid=false]:group-data-[selected=true]:group-has-[:active]:before:bg-critical/[0.12]',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
