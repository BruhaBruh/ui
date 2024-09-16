import { cva } from 'class-variance-authority';

export const switchContainerVariants = cva(
  [
    'group',
    'relative',
    'rounded-full before:rounded-full after:rounded-full',
    'inline-flex items-center',
    'bg-surface-container-highest',
    'border-2 border-outline',
    'transition duration-medium-2 easing-emphasized',
    'data-[disabled=false]:cursor-pointer',
    'focus-within:before:bg-surface-container-highest/[0.1]',
    'hover:before:bg-on-surface-container-highest/[0.08]',
    'data-[pressed=true]:before:bg-on-surface-container-highest/[0.1]',
    'before:absolute before:inset-[-2px]',
    'before:transition before:easing-emphasized before:duration-medium-1',
    'after:absolute after:inset-[-4px] after:-z-5',
    'after:transition after:easing-emphasized-accelerate after:duration-medium-1',
    'after:hidden has-[:focus-visible]:after:block',
    'starting:after:ring-[6px] after:ring-[3px]',
    'after:ring-secondary-container',
    'data-[selected=true]:border-transparent',
    'data-[disabled=true]:data-[selected=true]:bg-on-surface/[0.12]',
    'data-[disabled=true]:data-[selected=false]:bg-surface-container-highest/[0.12]',
    'data-[disabled=true]:data-[selected=false]:border-on-surface/[0.12]',
  ],
  {
    variants: {
      size: {
        sm: ['h-6 w-9 min-w-9'],
        md: ['h-7 w-11 min-w-11'],
        lg: ['h-8 w-13 min-w-13'],
      },
      color: {
        primary: [
          'data-[selected=true]:bg-primary',
          'data-[selected=true]:focus-within:before:bg-primary/[0.1]',
          'data-[selected=true]:hover:before:bg-primary/[0.08]',
          'data-[selected=true]:data-[pressed=true]:before:bg-primary/[0.1]',
        ],
        secondary: [
          'data-[selected=true]:bg-secondary',
          'data-[selected=true]:focus-within:before:bg-secondary/[0.1]',
          'data-[selected=true]:hover:before:bg-secondary/[0.08]',
          'data-[selected=true]:data-[pressed=true]:before:bg-secondary/[0.1]',
        ],
        info: [
          'data-[selected=true]:bg-info',
          'data-[selected=true]:focus-within:before:bg-info/[0.1]',
          'data-[selected=true]:hover:before:bg-info/[0.08]',
          'data-[selected=true]:data-[pressed=true]:before:bg-info/[0.1]',
        ],
        success: [
          'data-[selected=true]:bg-success',
          'data-[selected=true]:focus-within:before:bg-success/[0.1]',
          'data-[selected=true]:hover:before:bg-success/[0.08]',
          'data-[selected=true]:data-[pressed=true]:before:bg-success/[0.1]',
        ],
        caution: [
          'data-[selected=true]:bg-caution',
          'data-[selected=true]:focus-within:before:bg-caution/[0.1]',
          'data-[selected=true]:hover:before:bg-caution/[0.08]',
          'data-[selected=true]:data-[pressed=true]:before:bg-caution/[0.1]',
        ],
        critical: [
          'data-[selected=true]:bg-critical',
          'data-[selected=true]:focus-within:before:bg-critical/[0.1]',
          'data-[selected=true]:hover:before:bg-critical/[0.08]',
          'data-[selected=true]:data-[pressed=true]:before:bg-critical/[0.1]',
        ],
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
    'transition-transform easing-emphasized duration-medium-1',
    'inline-flex items-center justify-center',
    // 'before:elevation-1',
    'before:transition before:easing-emphasized before:duration-medium-1',
    'before:rounded-full',
    'before:bg-outline',
    'group-focus-within:before:bg-on-surface-variant',
    'group-hover:before:bg-on-surface-variant',
    'group-data-[pressed=true]:before:scale-[1.75]',
    'group-data-[selected=true]:before:scale-150',
    'group-data-[selected=true]:group-data-[pressed=true]:before:scale-[1.75]',
    'group-data-[disabled=true]:group-data-[selected=true]:before:bg-surface',
    'group-data-[disabled=true]:group-data-[selected=false]:before:bg-on-surface/[0.38]',
    // 'group-data-[disabled=true]:before:elevation-0',
    'z-1',
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
        primary: ['group-data-[selected=true]:before:bg-on-primary'],
        secondary: ['group-data-[selected=true]:before:bg-on-secondary'],
        info: ['group-data-[selected=true]:before:bg-on-info'],
        success: ['group-data-[selected=true]:before:bg-on-success'],
        caution: ['group-data-[selected=true]:before:bg-on-caution'],
        critical: ['group-data-[selected=true]:before:bg-on-critical'],
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  },
);
