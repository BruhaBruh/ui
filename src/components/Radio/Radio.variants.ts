import { cva } from 'class-variance-authority';

export const radioWrapperVariants = cva([
  'group',
  'inline-flex items-center gap-sm',
  'typography-body-large',
  'select-none transition',
]);

export const radioTargetVariants = cva([
  'inline-flex size-8 items-center justify-center',
]);

export const radioContainerVariants = cva(
  [
    'relative',
    'size-5 min-w-5 [&>span]:size-2.5',
    'rounded-full',
    'border-2 border-current',
    'inline-flex items-center justify-center',
    'transition easing-emphasized duration-medium-1',
    'string:rounded-full',
    'group-data-[disabled=false]:cursor-pointer',
    '[&>span]:z-1',
    '[&>span]:absolute [&>span]:rounded-full [&>span]:bg-current',
    '[&>span]:transition-transform [&>span]:easing-emphasized [&>span]:duration-short-4',
    'group-data-[selected=false]:[&>span]:scale-0',
    'group-data-[selected=true]:[&>span]:scale-100',
    'text-on-surface-variant',
    'hover:state:bg-on-surface/[0.08]',
    'focus-within:state:bg-on-surface/[0.12]',
    'group-has-[:active]:state:bg-on-surface/[0.12]',
    'state:-z-1 state:size-10',
    'state:absolute state:left-1/2 state:top-1/2 state:-translate-x-1/2 state:-translate-y-1/2',
    'state:transition state:easing-emphasized state:duration-medium-1',
    'group-data-[disabled=true]:state:hidden',
    'group-data-[disabled=true]:group-data-[selected]:text-on-surface/[0.38]',
  ],
  {
    variants: {
      color: {
        primary: [
          'group-data-[selected=true]:text-primary',
          'hover:group-data-[selected=true]:state:bg-primary/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-primary/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-primary/[0.12]',
        ],
        secondary: [
          'group-data-[selected=true]:text-secondary',
          'hover:group-data-[selected=true]:state:bg-secondary/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-secondary/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-secondary/[0.12]',
        ],
        info: [
          'group-data-[selected=true]:text-info',
          'hover:group-data-[selected=true]:state:bg-info/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-info/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-info/[0.12]',
        ],
        success: [
          'group-data-[selected=true]:text-success',
          'hover:group-data-[selected=true]:state:bg-success/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-success/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-success/[0.12]',
        ],
        caution: [
          'group-data-[selected=true]:text-caution',
          'hover:group-data-[selected=true]:state:bg-caution/[0.08]',
          'focus-within:group-data-[selected=true]:state:bg-caution/[0.12]',
          'group-has-[:active]:group-data-[selected=true]:state:bg-caution/[0.12]',
        ],
        critical: [
          'group-data-[selected=true]:text-critical',
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
