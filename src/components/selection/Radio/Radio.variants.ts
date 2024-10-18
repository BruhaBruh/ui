import { cva } from 'class-variance-authority';

export const radioWrapperVariants = cva([
  'group/radio',
  'inline-flex items-center gap-sm',
  'typography-body-large',
  'select-none',
]);

export const radioTargetVariants = cva([
  'group/radio--target relative inline-flex size-10 items-center justify-center',
  'hovered:cursor-pointer',
  'state:-z-1 state:size-10 state:rounded-full',
  'state:absolute',
  'state:left-1/2 state:top-1/2',
  'state:-translate-x-1/2 state:-translate-y-1/2',
  'state:transition-[background-color_medium-1_emphasized]',
  'group-data-[disabled=true]/radio:state:hidden',
  'hovered:state:bg-on-surface/[0.08]',
  'focus-visible-within:state:bg-on-surface/[0.12]',
  'pressed:state:bg-on-surface/[0.12]',
  'ripple:bg-on-surface/[0.12]',
  'ripple-wrapper:rounded-full',
  'ripple-wrapper:inset-0',
]);

export const radioContainerVariants = cva(
  [
    'relative',
    'size-5 min-w-5 [&>span]:size-2.5',
    'rounded-full',
    'border-2 border-current',
    'inline-flex items-center justify-center',
    'transition-[box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate]',
    'group-data-[disabled=false]/radio:cursor-pointer',
    '[&>span]:z-1',
    '[&>span]:absolute [&>span]:rounded-full [&>span]:bg-current',
    '[&>span]:transition-[scale_medium-1_emphasized-decelerate]',
    'group-data-[selected=false]/radio:[&>span]:scale-0',
    'group-data-[selected=true]/radio:[&>span]:scale-100',
    'text-on-surface-variant',
    'group-data-[disabled=true]/radio:group-data-[selected]/radio:text-on-surface/[0.38]',
  ],
  {
    variants: {
      color: {
        primary: [
          'group-data-[selected=true]/radio:text-primary',
          'group-data-[selected=true]/radio:group-hovered/radio--target:group-state/radio--target:bg-primary/[0.08]',
          'group-data-[selected=true]/radio:group-focus-visible-within/radio--target:group-state/radio--target:bg-primary/[0.12]',
          'group-data-[selected=true]/radio:group-pressed/radio--target:group-state/radio--target:bg-primary/[0.12]',
          'group-data-[selected=true]/radio:group-ripple/radio--target:bg-primary/[0.12]',
        ],
        secondary: [
          'group-data-[selected=true]/radio:text-secondary',
          'group-data-[selected=true]/radio:group-hovered/radio--target:group-state/radio--target:bg-secondary/[0.08]',
          'group-data-[selected=true]/radio:group-focus-visible-within/radio--target:group-state/radio--target:bg-secondary/[0.12]',
          'group-data-[selected=true]/radio:group-pressed/radio--target:group-state/radio--target:bg-secondary/[0.12]',
          'group-data-[selected=true]/radio:group-ripple/radio--target:bg-secondary/[0.12]',
        ],
        info: [
          'group-data-[selected=true]/radio:text-info',
          'group-data-[selected=true]/radio:group-hovered/radio--target:group-state/radio--target:bg-info/[0.08]',
          'group-data-[selected=true]/radio:group-focus-visible-within/radio--target:group-state/radio--target:bg-info/[0.12]',
          'group-data-[selected=true]/radio:group-pressed/radio--target:group-state/radio--target:bg-info/[0.12]',
          'group-data-[selected=true]/radio:group-ripple/radio--target:bg-info/[0.12]',
        ],
        success: [
          'group-data-[selected=true]/radio:text-success',
          'group-data-[selected=true]/radio:group-hovered/radio--target:group-state/radio--target:bg-success/[0.08]',
          'group-data-[selected=true]/radio:group-focus-visible-within/radio--target:group-state/radio--target:bg-success/[0.12]',
          'group-data-[selected=true]/radio:group-pressed/radio--target:group-state/radio--target:bg-success/[0.12]',
          'group-data-[selected=true]/radio:group-ripple/radio--target:bg-success/[0.12]',
        ],
        caution: [
          'group-data-[selected=true]/radio:text-caution',
          'group-data-[selected=true]/radio:group-hovered/radio--target:group-state/radio--target:bg-caution/[0.08]',
          'group-data-[selected=true]/radio:group-focus-visible-within/radio--target:group-state/radio--target:bg-caution/[0.12]',
          'group-data-[selected=true]/radio:group-pressed/radio--target:group-state/radio--target:bg-caution/[0.12]',
          'group-data-[selected=true]/radio:group-ripple/radio--target:bg-caution/[0.12]',
        ],
        critical: [
          'group-data-[selected=true]/radio:text-critical',
          'group-data-[selected=true]/radio:group-hovered/radio--target:group-state/radio--target:bg-critical/[0.08]',
          'group-data-[selected=true]/radio:group-focus-visible-within/radio--target:group-state/radio--target:bg-critical/[0.12]',
          'group-data-[selected=true]/radio:group-pressed/radio--target:group-state/radio--target:bg-critical/[0.12]',
          'group-data-[selected=true]/radio:group-ripple/radio--target:bg-critical/[0.12]',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
