import { cva } from 'class-variance-authority';

export const checkboxWrapperVariants = cva([
  'group',
  'inline-flex items-center gap-2xs',
  'typography-body-large',
  'select-none transition',
]);

export const checkboxTargetVariants = cva([
  'inline-flex size-10 items-center justify-center',
]);

export const checkboxContainerVariants = cva(
  [
    'relative',
    'size-4.5 min-w-4.5',
    'rounded-[0.125rem]',
    'border-2',
    'inline-flex items-center justify-center',
    'transition easing-emphasized duration-medium-1',
    'group-data-[disabled=false]:cursor-pointer',
    '[&>svg]:z-1',
    '[&>svg]:absolute',
    '[&>svg]:size-4.5 [&>svg]:min-w-4.5',
    '[&>svg]:scale-100 [&>svg]:starting:scale-0',
    '[&>svg]:transition-transform',
    '[&>svg]:easing-emphasized [&>svg]:duration-short-4',
    'text-on-surface',
    'border-on-surface-variant',
    'group-data-[selected=true]:border-transparent',
    'hover:state:bg-on-surface/[0.08]',
    'focus-within:state:bg-on-surface/[0.12]',
    'group-has-[:active]:state:bg-on-surface/[0.12]',
    'state:-z-1 state:size-10 state:rounded-full',
    'state:absolute state:left-1/2 state:top-1/2 state:-translate-x-1/2 state:-translate-y-1/2',
    'state:transition state:easing-emphasized state:duration-medium-1',
    'group-data-[disabled=false]:group-data-[selected=true]:group-data-[invalid=true]:text-on-critical',
    'group-data-[disabled=false]:group-data-[selected]:group-data-[invalid=true]:border-critical',
    'group-data-[disabled=false]:group-data-[selected=true]:group-data-[invalid=true]:bg-critical',
    'hover:group-data-[invalid=true]:state:bg-critical/[0.08]',
    'focus-within:group-data-[invalid=true]:state:bg-critical/[0.12]',
    'group-has-[:active]:group-data-[invalid=true]:state:bg-critical/[0.12]',
    'group-data-[disabled=true]:state:hidden',
    'group-data-[disabled=true]:group-data-[selected=false]:border-on-surface/[0.38]',
    'group-data-[disabled=true]:group-data-[selected=true]:bg-on-surface/[0.38]',
    'group-data-[disabled=true]:text-surface',
  ],
  {
    variants: {
      color: {
        primary: [
          'group-data-[selected=true]:bg-primary',
          'group-data-[selected=true]:text-on-primary',
          'hover:group-data-[selected=true]:state:bg-primary/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-primary/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-primary/[0.12]',
        ],
        secondary: [
          'group-data-[selected=true]:bg-secondary',
          'group-data-[selected=true]:text-on-secondary',
          'hover:group-data-[selected=true]:state:bg-secondary/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-secondary/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-secondary/[0.12]',
        ],
        info: [
          'group-data-[selected=true]:bg-info',
          'group-data-[selected=true]:text-on-info',
          'hover:group-data-[selected=true]:state:bg-info/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-info/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-info/[0.12]',
        ],
        success: [
          'group-data-[selected=true]:bg-success',
          'group-data-[selected=true]:text-on-success',
          'hover:group-data-[selected=true]:state:bg-success/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-success/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-success/[0.12]',
        ],
        caution: [
          'group-data-[selected=true]:bg-caution',
          'group-data-[selected=true]:text-on-caution',
          'hover:group-data-[selected=true]:state:bg-caution/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-caution/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-caution/[0.12]',
        ],
        critical: [
          'group-data-[selected=true]:bg-critical',
          'group-data-[selected=true]:text-on-critical',
          'hover:group-data-[selected=true]:state:bg-critical/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-critical/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-critical/[0.12]',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
