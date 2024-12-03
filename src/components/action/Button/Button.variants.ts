import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'group/button relative',
    'inline-flex items-center justify-center',
    'h-10 min-w-16 rounded-lg',
    'transition-[box-shadow,color,background-color,border-color,border-width_medium-1_emphasized-decelerate]',
    'select-none outline-none',
    'disabled:pointer-events-none',
    'whitespace-nowrap',
    'border border-transparent',
    '[&>*]:z-1',
    'string:absolute string:rounded-lg',
    'state:transition-[background-color_medium-1_emphasized]',
    'state:-inset-0.5',
    'ring:-inset-1',
    'ring:transition-[box-shadow_medium-1_emphasized-accelerate]',
    'ring:hidden focused-visible:ring:block',
    'ring:ring-4 starting:ring:ring-8',
    'ring:ring-primary-container',
    'ripple-wrapper:rounded-lg',
    'ripple-wrapper:-inset-0.5',
  ],
  {
    variants: {
      variant: {
        elevated: [
          'bg-surface-container-low',
          'elevation-1',
          'hovered:elevation-2',
          'pressed:elevation-1',
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
          'data-[disabled=true]:elevation-0',
        ],
        filled: [
          'hovered:elevation-1',
          'pressed:elevation-0',
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
        ],
        tonal: [
          'hovered:elevation-1',
          'pressed:elevation-0',
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
        ],
        outlined: [
          'border-outline',
          'pressed:border-outline',
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
          '[&>svg:first-child]:starting:mr-0',
          '[&>svg:last-child]:starting:ml-0',
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
          'hovered:state:bg-primary/[0.08]',
          'focused-visible:state:bg-primary/[0.12]',
          'pressed:state:bg-primary/[0.12]',
          'ripple:bg-primary/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'hovered:state:bg-secondary/[0.08]',
          'focused-visible:state:bg-secondary/[0.12]',
          'pressed:state:bg-secondary/[0.12]',
          'ripple:bg-secondary/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'info',
        className: [
          'text-info-foreground',
          'hovered:state:bg-info/[0.08]',
          'focused-visible:state:bg-info/[0.12]',
          'pressed:state:bg-info/[0.12]',
          'ripple:bg-info/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'success',
        className: [
          'text-success-foreground',
          'hovered:state:bg-success/[0.08]',
          'focused-visible:state:bg-success/[0.12]',
          'pressed:state:bg-success/[0.12]',
          'ripple:bg-success/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'hovered:state:bg-caution/[0.08]',
          'focused-visible:state:bg-caution/[0.12]',
          'pressed:state:bg-caution/[0.12]',
          'ripple:bg-caution/[0.12]',
        ],
      },
      {
        variant: 'elevated',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'hovered:state:bg-critical/[0.08]',
          'focused-visible:state:bg-critical/[0.12]',
          'pressed:state:bg-critical/[0.12]',
          'ripple:bg-critical/[0.12]',
        ],
      },
      //#endregion Elevated

      //#region Filled
      {
        variant: 'filled',
        color: 'primary',
        className: [
          'bg-primary text-on-primary',
          'hovered:state:bg-on-primary/[0.08]',
          'focused-visible:state:bg-on-primary/[0.12]',
          'pressed:state:bg-on-primary/[0.12]',
          'ripple:bg-on-primary/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'secondary',
        className: [
          'bg-secondary text-on-secondary',
          'hovered:state:bg-on-secondary/[0.08]',
          'focused-visible:state:bg-on-secondary/[0.12]',
          'pressed:state:bg-on-secondary/[0.12]',
          'ripple:bg-on-secondary/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'info',
        className: [
          'bg-info text-on-info',
          'hovered:state:bg-on-info/[0.08]',
          'focused-visible:state:bg-on-info/[0.12]',
          'pressed:state:bg-on-info/[0.12]',
          'ripple:bg-on-info/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'success',
        className: [
          'bg-success text-on-success',
          'hovered:state:bg-on-success/[0.08]',
          'focused-visible:state:bg-on-success/[0.12]',
          'pressed:state:bg-on-success/[0.12]',
          'ripple:bg-on-success/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'caution',
        className: [
          'bg-caution text-on-caution',
          'hovered:state:bg-on-caution/[0.08]',
          'focused-visible:state:bg-on-caution/[0.12]',
          'pressed:state:bg-on-caution/[0.12]',
          'ripple:bg-on-caution/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'critical',
        className: [
          'bg-critical text-on-critical',
          'hovered:state:bg-on-critical/[0.08]',
          'focused-visible:state:bg-on-critical/[0.12]',
          'pressed:state:bg-on-critical/[0.12]',
          'ripple:bg-on-critical/[0.12]',
        ],
      },
      //#endregion Filled

      //#region Tonal
      {
        variant: 'tonal',
        color: 'primary',
        className: [
          'bg-primary-container text-on-primary-container',
          'hovered:state:bg-on-primary-container/[0.08]',
          'focused-visible:state:bg-on-primary-container/[0.12]',
          'pressed:state:bg-on-primary-container/[0.12]',
          'ripple:bg-on-primary-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'secondary',
        className: [
          'bg-secondary-container text-on-secondary-container',
          'hovered:state:bg-on-secondary-container/[0.08]',
          'focused-visible:state:bg-on-secondary-container/[0.12]',
          'pressed:state:bg-on-secondary-container/[0.12]',
          'ripple:bg-on-secondary-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'info',
        className: [
          'bg-info-container text-on-info-container',
          'hovered:state:bg-on-info-container/[0.08]',
          'focused-visible:state:bg-on-info-container/[0.12]',
          'pressed:state:bg-on-info-container/[0.12]',
          'ripple:bg-on-info-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'success',
        className: [
          'bg-success-container text-on-success-container',
          'hovered:state:bg-on-success-container/[0.08]',
          'focused-visible:state:bg-on-success-container/[0.12]',
          'pressed:state:bg-on-success-container/[0.12]',
          'ripple:bg-on-success-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'caution',
        className: [
          'bg-caution-container text-on-caution-container',
          'hovered:state:bg-on-caution-container/[0.08]',
          'focused-visible:state:bg-on-caution-container/[0.12]',
          'pressed:state:bg-on-caution-container/[0.12]',
          'ripple:bg-on-caution-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'critical',
        className: [
          'bg-critical-container text-on-critical-container',
          'hovered:state:bg-on-critical-container/[0.08]',
          'focused-visible:state:bg-on-critical-container/[0.12]',
          'pressed:state:bg-on-critical-container/[0.12]',
          'ripple:bg-on-critical-container/[0.12]',
        ],
      },
      //#endregion Tonal

      //#region Outlined
      {
        variant: 'outlined',
        color: 'primary',
        className: [
          'text-primary-foreground',
          'hovered:state:bg-primary/[0.08]',
          'focused-visible:border-primary',
          'focused-visible:state:bg-primary/[0.12]',
          'pressed:state:bg-primary/[0.12]',
          'ripple:bg-primary/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'hovered:state:bg-secondary/[0.08]',
          'focused-visible:border-secondary',
          'focused-visible:state:bg-secondary/[0.12]',
          'pressed:state:bg-secondary/[0.12]',
          'ripple:bg-secondary/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'info',
        className: [
          'text-info-foreground',
          'hovered:state:bg-info/[0.08]',
          'focused-visible:border-info',
          'focused-visible:state:bg-info/[0.12]',
          'pressed:state:bg-info/[0.12]',
          'ripple:bg-info/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'success',
        className: [
          'text-success-foreground',
          'hovered:state:bg-success/[0.08]',
          'focused-visible:border-success',
          'focused-visible:state:bg-success/[0.12]',
          'pressed:state:bg-success/[0.12]',
          'ripple:bg-success/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'hovered:state:bg-caution/[0.08]',
          'focused-visible:border-caution',
          'focused-visible:state:bg-caution/[0.12]',
          'pressed:state:bg-caution/[0.12]',
          'ripple:bg-caution/[0.12]',
        ],
      },
      {
        variant: 'outlined',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'hovered:state:bg-critical/[0.08]',
          'focused-visible:border-critical',
          'focused-visible:state:bg-critical/[0.12]',
          'pressed:state:bg-critical/[0.12]',
          'ripple:bg-critical/[0.12]',
        ],
      },
      //#endregion Outlined

      //#region Text
      {
        variant: 'text',
        color: 'primary',
        className: [
          'text-primary-foreground',
          'hovered:state:bg-primary/[0.08]',
          'focused-visible:state:bg-primary/[0.12]',
          'pressed:state:bg-primary/[0.12]',
          'ripple:bg-primary/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'secondary',
        className: [
          'text-secondary-foreground',
          'hovered:state:bg-secondary/[0.08]',
          'focused-visible:state:bg-secondary/[0.12]',
          'pressed:state:bg-secondary/[0.12]',
          'ripple:bg-secondary/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'info',
        className: [
          'text-info-foreground',
          'hovered:state:bg-info/[0.08]',
          'focused-visible:state:bg-info/[0.12]',
          'pressed:state:bg-info/[0.12]',
          'ripple:bg-info/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'success',
        className: [
          'text-success-foreground',
          'hovered:state:bg-success/[0.08]',
          'focused-visible:state:bg-success/[0.12]',
          'pressed:state:bg-success/[0.12]',
          'ripple:bg-success/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'caution',
        className: [
          'text-caution-foreground',
          'hovered:state:bg-caution/[0.08]',
          'focused-visible:state:bg-caution/[0.12]',
          'pressed:state:bg-caution/[0.12]',
          'ripple:bg-caution/[0.12]',
        ],
      },
      {
        variant: 'text',
        color: 'critical',
        className: [
          'text-critical-foreground',
          'hovered:state:bg-critical/[0.08]',
          'focused-visible:state:bg-critical/[0.12]',
          'pressed:state:bg-critical/[0.12]',
          'ripple:bg-critical/[0.12]',
        ],
      },
      //#endregion Text
    ],
  },
);

export const buttonLabelVariants = cva(['typography-label-large truncate'], {
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
