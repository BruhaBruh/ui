import { cva } from 'class-variance-authority';

export const buttonContainerVariants = cva(
  [
    'group relative',
    'inline-flex items-center justify-center',
    'transition duration-medium-2 easing-emphasized',
    'select-none outline-none',
    'disabled:pointer-events-none',
    'whitespace-nowrap',
    'border-2 border-transparent',
    'before:absolute before:inset-[-2px]',
    'before:transition before:easing-emphasized before:duration-medium-1',
    'after:absolute after:inset-[-4px] after:-z-5',
    'after:transition after:easing-emphasized-accelerate after:duration-medium-1',
    'after:hidden focus-visible:after:block',
    'starting:after:ring-[6px] after:ring-[3px]',
    'after:ring-secondary-container',
    '[&>svg]:z-1',
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
          'data-[disabled=true]:elevation-0',
          'data-[disabled=true]:text-on-surface/[0.38]',
        ],
        filled: [
          'hover:elevation-1',
          'active:elevation-0',
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
        ],
        tonal: [
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
        ],
        outlined: [
          'border-outline',
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
      size: {
        sm: [
          'h-8 rounded-sm before:rounded-sm after:rounded-sm typography-small',
          '[&>svg]:h-4 [&>svg]:w-4 [&>svg]:min-w-4',
        ],
        md: [
          'h-10 rounded-md before:rounded-md after:rounded-md typography-medium',
          '[&>svg]:h-5 [&>svg]:w-5 [&>svg]:min-w-5',
        ],
        lg: [
          'h-12 rounded-lg before:rounded-lg after:rounded-lg typography-large',
          '[&>svg]:h-6 [&>svg]:w-6 [&>svg]:min-w-6',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
      variant: 'elevated',
      size: 'md',
    },
    compoundVariants: [
      //#region Elevated
      {
        variant: 'elevated',
        color: 'primary',
        className: [
          'text-primary-foreground',
          'focus:before:bg-primary/[0.01]',
          'hover:before:bg-primary/[0.08]',
          'active:before:bg-primary/[0.1]',
        ],
      },
      {
        variant: 'elevated',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'focus:before:bg-secondary/[0.01]',
          'hover:before:bg-secondary/[0.08]',
          'active:before:bg-secondary/[0.1]',
        ],
      },
      {
        variant: 'elevated',
        color: 'info',
        className: [
          'text-info-foreground',
          'focus:before:bg-info/[0.01]',
          'hover:before:bg-info/[0.08]',
          'active:before:bg-info/[0.1]',
        ],
      },
      {
        variant: 'elevated',
        color: 'success',
        className: [
          'text-success-foreground',
          'focus:before:bg-success/[0.01]',
          'hover:before:bg-success/[0.08]',
          'active:before:bg-success/[0.1]',
        ],
      },
      {
        variant: 'elevated',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'focus:before:bg-caution/[0.01]',
          'hover:before:bg-caution/[0.08]',
          'active:before:bg-caution/[0.1]',
        ],
      },
      {
        variant: 'elevated',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'focus:before:bg-critical/[0.01]',
          'hover:before:bg-critical/[0.08]',
          'active:before:bg-critical/[0.1]',
        ],
      },
      //#endregion Elevated

      //#region Filled
      {
        variant: 'filled',
        color: 'primary',
        className: [
          'bg-primary text-on-primary',
          'focus:before:bg-on-primary/[0.1]',
          'hover:before:bg-on-primary/[0.08]',
          'active:before:bg-on-primary/[0.1]',
        ],
      },
      {
        variant: 'filled',
        color: 'secondary',
        className: [
          'bg-secondary text-on-secondary',
          'focus:before:bg-on-secondary/[0.1]',
          'hover:before:bg-on-secondary/[0.08]',
          'active:before:bg-on-secondary/[0.1]',
        ],
      },
      {
        variant: 'filled',
        color: 'info',
        className: [
          'bg-info text-on-info',
          'focus:before:bg-on-info/[0.1]',
          'hover:before:bg-on-info/[0.08]',
          'active:before:bg-on-info/[0.1]',
        ],
      },
      {
        variant: 'filled',
        color: 'success',
        className: [
          'bg-success text-on-success',
          'focus:before:bg-on-success/[0.1]',
          'hover:before:bg-on-success/[0.08]',
          'active:before:bg-on-success/[0.1]',
        ],
      },
      {
        variant: 'filled',
        color: 'caution',
        className: [
          'bg-caution text-on-caution',
          'focus:before:bg-on-caution/[0.1]',
          'hover:before:bg-on-caution/[0.08]',
          'active:before:bg-on-caution/[0.1]',
        ],
      },
      {
        variant: 'filled',
        color: 'critical',
        className: [
          'bg-critical text-on-critical',
          'focus:before:bg-on-critical/[0.1]',
          'hover:before:bg-on-critical/[0.08]',
          'active:before:bg-on-critical/[0.1]',
        ],
      },
      //#endregion Filled

      //#region Tonal
      {
        variant: 'tonal',
        color: 'primary',
        className: [
          'bg-primary-container text-on-primary-container',
          'focus:before:bg-on-primary-container/[0.1]',
          'hover:before:bg-on-primary-container/[0.08]',
          'active:before:bg-on-primary-container/[0.1]',
        ],
      },
      {
        variant: 'tonal',
        color: 'secondary',
        className: [
          'bg-secondary-container text-on-secondary-container',
          'focus:before:bg-on-secondary-container/[0.1]',
          'hover:before:bg-on-secondary-container/[0.08]',
          'active:before:bg-on-secondary-container/[0.1]',
        ],
      },
      {
        variant: 'tonal',
        color: 'info',
        className: [
          'bg-info-container text-on-info-container',
          'focus:before:bg-on-info-container/[0.1]',
          'hover:before:bg-on-info-container/[0.08]',
          'active:before:bg-on-info-container/[0.1]',
        ],
      },
      {
        variant: 'tonal',
        color: 'success',
        className: [
          'bg-success-container text-on-success-container',
          'focus:before:bg-on-success-container/[0.1]',
          'hover:before:bg-on-success-container/[0.08]',
          'active:before:bg-on-success-container/[0.1]',
        ],
      },
      {
        variant: 'tonal',
        color: 'caution',
        className: [
          'bg-caution-container text-on-caution-container',
          'focus:before:bg-on-caution-container/[0.1]',
          'hover:before:bg-on-caution-container/[0.08]',
          'active:before:bg-on-caution-container/[0.1]',
        ],
      },
      {
        variant: 'tonal',
        color: 'critical',
        className: [
          'bg-critical-container text-on-critical-container',
          'focus:before:bg-on-critical-container/[0.1]',
          'hover:before:bg-on-critical-container/[0.08]',
          'active:before:bg-on-critical-container/[0.1]',
        ],
      },
      //#endregion Tonal

      //#region Outlined
      {
        variant: 'outlined',
        color: 'primary',
        className: [
          'text-primary-foreground',
          'focus:border-primary',
          'focus:before:bg-primary/[0.1]',
          'hover:before:bg-primary/[0.08]',
          'active:before:bg-primary/[0.1]',
        ],
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'focus:border-secondary',
          'focus:before:bg-secondary/[0.1]',
          'hover:before:bg-secondary/[0.08]',
          'active:before:bg-secondary/[0.1]',
        ],
      },
      {
        variant: 'outlined',
        color: 'info',
        className: [
          'text-info-foreground',
          'focus:border-info',
          'focus:before:bg-info/[0.1]',
          'hover:before:bg-info/[0.08]',
          'active:before:bg-info/[0.1]',
        ],
      },
      {
        variant: 'outlined',
        color: 'success',
        className: [
          'text-success-foreground',
          'focus:border-success',
          'focus:before:bg-success/[0.1]',
          'hover:before:bg-success/[0.08]',
          'active:before:bg-success/[0.1]',
        ],
      },
      {
        variant: 'outlined',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'focus:border-caution',
          'focus:before:bg-caution/[0.1]',
          'hover:before:bg-caution/[0.08]',
          'active:before:bg-caution/[0.1]',
        ],
      },
      {
        variant: 'outlined',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'focus:border-critical',
          'focus:before:bg-critical/[0.1]',
          'hover:before:bg-critical/[0.08]',
          'active:before:bg-critical/[0.1]',
        ],
      },
      //#endregion Outlined

      //#region Text
      {
        variant: 'text',
        color: 'primary',
        className: [
          'text-primary-foreground',
          'focus:before:bg-primary/[0.1]',
          'hover:before:bg-primary/[0.08]',
          'active:before:bg-primary/[0.1]',
        ],
      },
      {
        variant: 'text',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'focus:before:bg-secondary/[0.1]',
          'hover:before:bg-secondary/[0.08]',
          'active:before:bg-secondary/[0.1]',
        ],
      },
      {
        variant: 'text',
        color: 'info',
        className: [
          'text-info-foreground',
          'focus:before:bg-info/[0.1]',
          'hover:before:bg-info/[0.08]',
          'active:before:bg-info/[0.1]',
        ],
      },
      {
        variant: 'text',
        color: 'success',
        className: [
          'text-success-foreground',
          'focus:before:bg-success/[0.1]',
          'hover:before:bg-success/[0.08]',
          'active:before:bg-success/[0.1]',
        ],
      },
      {
        variant: 'text',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'focus:before:bg-caution/[0.1]',
          'hover:before:bg-caution/[0.08]',
          'active:before:bg-caution/[0.1]',
        ],
      },
      {
        variant: 'text',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'focus:before:bg-critical/[0.1]',
          'hover:before:bg-critical/[0.08]',
          'active:before:bg-critical/[0.1]',
        ],
      },
      //#endregion Text

      //#region SM
      {
        size: 'sm',
        className: 'px-sm',
      },
      {
        size: 'sm',
        variant: 'text',
        className:
          'px-2xs [&>svg:first-child]:ml-3xs  [&>svg:last-child]:mr-3xs',
      },
      //#endregion SM
      //#region MD
      {
        size: 'md',
        className: 'px-md',
      },
      {
        size: 'md',
        variant: 'text',
        className:
          'px-xs [&>svg:first-child]:ml-2xs  [&>svg:last-child]:mr-2xs',
      },
      //#endregion MD
      //#region LG
      {
        size: 'lg',
        className: 'px-lg',
      },
      {
        size: 'lg',
        variant: 'text',
        className: 'px-sm [&>svg:first-child]:ml-xs  [&>svg:last-child]:mr-xs',
      },
      //#endregion LG
    ],
  },
);

export const buttonLabelVariants = cva(['truncate z-1'], {
  variants: {
    variant: {
      elevated: [],
      filled: [],
      tonal: [],
      outlined: [],
      text: [],
    },
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
  defaultVariants: {
    variant: 'elevated',
    size: 'md',
  },
  compoundVariants: [
    //#region SM
    {
      size: 'sm',
      className: 'px-2xs',
    },
    {
      size: 'sm',
      variant: 'text',
      className: 'px-3xs',
    },
    //#endregion SM
    //#region MD
    {
      size: 'md',
      className: 'px-xs',
    },
    {
      size: 'md',
      variant: 'text',
      className: 'px-2xs',
    },
    //#endregion MD
    //#region LG
    {
      size: 'lg',
      className: 'px-sm',
    },
    {
      size: 'lg',
      variant: 'text',
      className: 'px-xs',
    },
    //#endregion LG
  ],
});
