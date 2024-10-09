import { cva } from 'class-variance-authority';

export const buttonContainerVariants = cva(
  [
    'group relative',
    'inline-flex items-center justify-center',
    'h-10 min-w-16 rounded-lg',
    '[&>svg]:size-4.5 [&>svg]:starting:size-0',
    '[&>svg]:transition [&>svg]:easing-emphasized [&>svg]:duration-medium-1',
    'transition easing-emphasized duration-medium-1',
    'select-none outline-none',
    'disabled:pointer-events-none',
    'whitespace-nowrap',
    'border-2 border-transparent',
    '[&>*]:z-1',
    'string:absolute string:rounded-lg',
    'string:transition string:duration-medium-1',
    'state:-inset-0.5',
    'state:easing-emphasized',
    'ring:-inset-1',
    'ring:easing-emphasized-accelerate',
    'ring:hidden focus-visible:ring:block',
    'ring:ring-4 starting:ring:ring-8',
    'ring:ring-secondary-container',
  ],
  {
    variants: {
      variant: {
        elevated: [
          'bg-surface-container-low',
          'elevation-1',
          'hover:elevation-2',
          'active:elevation-1',
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
          'data-[disabled=true]:elevation-0',
        ],
        filled: [
          'hover:elevation-1',
          'active:elevation-0',
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
        ],
        tonal: [
          'hover:elevation-1',
          'active:elevation-0',
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
        ],
        outlined: [
          'border-outline',
          'active:border-outline',
          'data-[disabled=true]:text-on-surface/[0.38]',
          'data-[disabled=true]:border-on-surface/[0.12]',
        ],
        text: ['data-[disabled=true]:text-on-surface/[0.38]'],
      },
      color: {
        primary: [],
        secondary: [],
        info: [],
        success: [],
        caution: [],
        critical: [],
      },
    },
    defaultVariants: {
      color: 'primary',
      variant: 'elevated',
    },
    compoundVariants: [
      {
        variant: ['elevated', 'filled', 'tonal', 'outlined'],
        className: 'px-md',
      },
      {
        variant: 'text',
        className: [
          'px-sm',
          '[&>svg]:starting:mr-0',
          '[&>svg:first-child]:mr-2xs',
          '[&>svg:last-child]:ml-2xs',
        ],
      },

      //#region Elevated
      {
        variant: 'elevated',
        color: 'primary',
        className: [
          'text-primary-foreground',
          'hover:state:bg-primary/[0.08]',
          'focus:state:bg-primary/[0.12]',
          'active:state:bg-primary/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'hover:state:bg-secondary/[0.08]',
          'focus:state:bg-secondary/[0.12]',
          'active:state:bg-secondary/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'info',
        className: [
          'text-info-foreground',
          'hover:state:bg-info/[0.08]',
          'focus:state:bg-info/[0.12]',
          'active:state:bg-info/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'success',
        className: [
          'text-success-foreground',
          'hover:state:bg-success/[0.08]',
          'focus:state:bg-success/[0.12]',
          'active:state:bg-success/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'hover:state:bg-caution/[0.08]',
          'focus:state:bg-caution/[0.12]',
          'active:state:bg-caution/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'hover:state:bg-critical/[0.08]',
          'focus:state:bg-critical/[0.12]',
          'active:state:bg-critical/[0.12]',
        ],
      },
      //#endregion Elevated

      //#region Filled
      {
        variant: 'filled',
        color: 'primary',
        className: [
          'bg-primary text-on-primary',
          'hover:state:bg-on-primary/[0.08]',
          'focus:state:bg-on-primary/[0.12]',
          'active:state:bg-on-primary/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'secondary',
        className: [
          'bg-secondary text-on-secondary',
          'hover:state:bg-on-secondary/[0.08]',
          'focus:state:bg-on-secondary/[0.12]',
          'active:state:bg-on-secondary/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'info',
        className: [
          'bg-info text-on-info',
          'hover:state:bg-on-info/[0.08]',
          'focus:state:bg-on-info/[0.12]',
          'active:state:bg-on-info/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'success',
        className: [
          'bg-success text-on-success',
          'hover:state:bg-on-success/[0.08]',
          'focus:state:bg-on-success/[0.12]',
          'active:state:bg-on-success/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'caution',
        className: [
          'bg-caution text-on-caution',
          'hover:state:bg-on-caution/[0.08]',
          'focus:state:bg-on-caution/[0.12]',
          'active:state:bg-on-caution/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'critical',
        className: [
          'bg-critical text-on-critical',
          'hover:state:bg-on-critical/[0.08]',
          'focus:state:bg-on-critical/[0.12]',
          'active:state:bg-on-critical/[0.12]',
        ],
      },
      //#endregion Filled

      //#region Tonal
      {
        variant: 'tonal',
        color: 'primary',
        className: [
          'bg-primary-container text-on-primary-container',
          'hover:state:bg-on-primary-container/[0.08]',
          'focus:state:bg-on-primary-container/[0.12]',
          'active:state:bg-on-primary-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'secondary',
        className: [
          'bg-secondary-container text-on-secondary-container',
          'hover:state:bg-on-secondary-container/[0.08]',
          'focus:state:bg-on-secondary-container/[0.12]',
          'active:state:bg-on-secondary-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'info',
        className: [
          'bg-info-container text-on-info-container',
          'hover:state:bg-on-info-container/[0.08]',
          'focus:state:bg-on-info-container/[0.12]',
          'active:state:bg-on-info-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'success',
        className: [
          'bg-success-container text-on-success-container',
          'hover:state:bg-on-success-container/[0.08]',
          'focus:state:bg-on-success-container/[0.12]',
          'active:state:bg-on-success-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'caution',
        className: [
          'bg-caution-container text-on-caution-container',
          'hover:state:bg-on-caution-container/[0.08]',
          'focus:state:bg-on-caution-container/[0.12]',
          'active:state:bg-on-caution-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'critical',
        className: [
          'bg-critical-container text-on-critical-container',
          'hover:state:bg-on-critical-container/[0.08]',
          'focus:state:bg-on-critical-container/[0.12]',
          'active:state:bg-on-critical-container/[0.12]',
        ],
      },
      //#endregion Tonal

      //#region Outlined
      {
        variant: 'outlined',
        color: 'primary',
        className: [
          'text-primary-foreground',
          'hover:state:bg-primary/[0.08]',
          'focus:border-primary',
          'focus:state:bg-primary/[0.12]',
          'active:state:bg-primary/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'hover:state:bg-secondary/[0.08]',
          'focus:border-secondary',
          'focus:state:bg-secondary/[0.12]',
          'active:state:bg-secondary/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'info',
        className: [
          'text-info-foreground',
          'hover:state:bg-info/[0.08]',
          'focus:border-info',
          'focus:state:bg-info/[0.12]',
          'active:state:bg-info/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'success',
        className: [
          'text-success-foreground',
          'hover:state:bg-success/[0.08]',
          'focus:border-success',
          'focus:state:bg-success/[0.12]',
          'active:state:bg-success/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'hover:state:bg-caution/[0.08]',
          'focus:border-caution',
          'focus:state:bg-caution/[0.12]',
          'active:state:bg-caution/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'hover:state:bg-critical/[0.08]',
          'focus:border-critical',
          'focus:state:bg-critical/[0.12]',
          'active:state:bg-critical/[0.12]',
        ],
      },
      //#endregion Outlined

      //#region Text
      {
        variant: 'text',
        color: 'primary',
        className: [
          'text-primary-foreground',
          'hover:state:bg-primary/[0.08]',
          'focus:state:bg-primary/[0.12]',
          'active:state:bg-primary/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'hover:state:bg-secondary/[0.08]',
          'focus:state:bg-secondary/[0.12]',
          'active:state:bg-secondary/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'info',
        className: [
          'text-info-foreground',
          'hover:state:bg-info/[0.08]',
          'focus:state:bg-info/[0.12]',
          'active:state:bg-info/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'success',
        className: [
          'text-success-foreground',
          'hover:state:bg-success/[0.08]',
          'focus:state:bg-success/[0.12]',
          'active:state:bg-success/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'hover:state:bg-caution/[0.08]',
          'focus:state:bg-caution/[0.12]',
          'active:state:bg-caution/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'hover:state:bg-critical/[0.08]',
          'focus:state:bg-critical/[0.12]',
          'active:state:bg-critical/[0.12]',
        ],
      },
      //#endregion Text
    ],
  },
);

export const buttonLabelVariants = cva(['truncate typography-label-large'], {
  variants: {
    variant: {
      elevated: [],
      filled: [],
      tonal: [],
      outlined: [],
      text: [],
    },
  },
  defaultVariants: {
    variant: 'elevated',
  },
  compoundVariants: [
    {
      variant: ['elevated', 'filled', 'tonal', 'outlined'],
      className: 'px-xs',
    },
    {
      variant: 'text',
      className: 'px-2xs',
    },
  ],
});
