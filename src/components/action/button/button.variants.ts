import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'group/button relative',
    'h-10 rounded-md',
    'inline-flex items-center justify-center',
    'transition easing-standard duration-medium-1',
    'border-transparent',
    'overflow-hidden',
    'whitespace-nowrap outline-none',
    'is-disabled:pointer-events-none',
    'ripple-wrapper:rounded-lg',
    'ripple-wrapper:-inset-1',
    'is-hovered:hover-state',
    'in-focus-visible:focus-state',
    'is-pressed:press-state',
    'is-disabled:state-transparent',
  ],
  {
    variants: {
      variant: {
        elevated: [
          'bg-surface-container-low',
          'elevation-1',
          'is-hovered:elevation-2',
          'in-focus-visible:elevation-1',
          'is-pressed:elevation-1',
          'is-disabled:elevation-0',
          'is-disabled:bg-on-surface',
          'is-disabled:bg-opacity-12',
          'is-disabled:text-on-surface',
          'is-disabled:text-opacity-38',
        ],
        filled: [
          'elevation-0',
          'is-hovered:elevation-1',
          'in-focus-visible:elevation-0',
          'is-pressed:elevation-0',
          'is-disabled:bg-on-surface',
          'is-disabled:bg-opacity-12',
          'is-disabled:text-on-surface',
          'is-disabled:text-opacity-38',
        ],
        tonal: [
          'elevation-0',
          'is-hovered:elevation-1',
          'in-focus-visible:elevation-0',
          'is-pressed:elevation-0',
          'is-disabled:bg-on-surface',
          'is-disabled:bg-opacity-12',
          'is-disabled:text-on-surface',
          'is-disabled:text-opacity-38',
        ],
        outlined: [
          'bg-transparent',
          'border',
          'border-outline',
          'is-disabled:text-on-surface',
          'is-disabled:text-opacity-38',
          'is-disabled:border-on-surface',
          'is-disabled:border-opacity-38',
        ],
        text: [
          'bg-transparent',
          'is-disabled:text-on-surface',
          'is-disabled:text-opacity-38',
        ],
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

      // #region Elevated
      {
        variant: 'elevated',
        color: 'primary',
        className: ['state-primary text-primary ripple:bg-primary'],
      },
      {
        variant: 'elevated',
        color: 'secondary',
        className: ['state-secondary text-secondary ripple:bg-secondary'],
      },
      {
        variant: 'elevated',
        color: 'info',
        className: ['state-info text-info ripple:bg-info'],
      },
      {
        variant: 'elevated',
        color: 'success',
        className: ['state-success text-success ripple:bg-success'],
      },
      {
        variant: 'elevated',
        color: 'caution',
        className: ['state-caution text-caution ripple:bg-caution'],
      },
      {
        variant: 'elevated',
        color: 'critical',
        className: ['state-critical text-critical ripple:bg-critical'],
      },
      // #endregion Elevated

      // #region Filled
      {
        variant: 'filled',
        color: 'primary',
        className: [
          'bg-primary state-on-primary text-on-primary ripple:bg-on-primary',
        ],
      },
      {
        variant: 'filled',
        color: 'secondary',
        className: [
          'bg-secondary state-on-secondary text-on-secondary ripple:bg-on-secondary',
        ],
      },
      {
        variant: 'filled',
        color: 'info',
        className: ['bg-info state-on-info text-on-info ripple:bg-on-info'],
      },
      {
        variant: 'filled',
        color: 'success',
        className: [
          'bg-success state-on-success text-on-success ripple:bg-on-success',
        ],
      },
      {
        variant: 'filled',
        color: 'caution',
        className: [
          'bg-caution state-on-caution text-on-caution ripple:bg-on-caution',
        ],
      },
      {
        variant: 'filled',
        color: 'critical',
        className: [
          'bg-critical state-on-critical text-on-critical ripple:bg-on-critical',
        ],
      },
      // #endregion Filled

      // #region Tonal
      {
        variant: 'tonal',
        color: 'primary',
        className: [
          'bg-primary-container state-on-primary-container',
          'text-on-primary-container ripple:bg-on-primary-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'secondary',
        className: [
          'bg-secondary-container state-on-secondary-container',
          'text-on-secondary-container ripple:bg-on-secondary-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'info',
        className: [
          'bg-info-container state-on-info-container',
          'text-on-info-container ripple:bg-on-info-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'success',
        className: [
          'bg-success-container state-on-success-container',
          'text-on-success-container ripple:bg-on-success-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'caution',
        className: [
          'bg-caution-container state-on-caution-container',
          'text-on-caution-container ripple:bg-on-caution-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'critical',
        className: [
          'bg-critical-container state-on-critical-container',
          'text-on-critical-container ripple:bg-on-critical-container',
        ],
      },
      // #endregion Tonal

      // #region Outlined
      {
        variant: 'outlined',
        color: 'primary',
        className: [
          'state-primary text-primary ripple:bg-primary',
          'in-focus-visible:border-primary',
        ],
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className: [
          'state-secondary text-secondary ripple:bg-secondary',
          'in-focus-visible:border-secondary',
        ],
      },
      {
        variant: 'outlined',
        color: 'info',
        className: [
          'state-info text-info ripple:bg-info',
          'in-focus-visible:border-info',
        ],
      },
      {
        variant: 'outlined',
        color: 'success',
        className: [
          'state-success text-success ripple:bg-success',
          'in-focus-visible:border-success',
        ],
      },
      {
        variant: 'outlined',
        color: 'caution',
        className: [
          'state-caution text-caution ripple:bg-caution',
          'in-focus-visible:border-caution',
        ],
      },
      {
        variant: 'outlined',
        color: 'critical',
        className: [
          'state-critical text-critical ripple:bg-critical',
          'in-focus-visible:border-critical',
        ],
      },
      // #endregion Outlined

      // #region Text
      {
        variant: 'text',
        color: 'primary',
        className: ['state-primary text-primary ripple:bg-primary'],
      },
      {
        variant: 'text',
        color: 'secondary',
        className: ['state-secondary text-secondary ripple:bg-secondary'],
      },
      {
        variant: 'text',
        color: 'info',
        className: ['state-info text-info ripple:bg-info'],
      },
      {
        variant: 'text',
        color: 'success',
        className: ['state-success text-success ripple:bg-success'],
      },
      {
        variant: 'text',
        color: 'caution',
        className: ['state-caution text-caution ripple:bg-caution'],
      },
      {
        variant: 'text',
        color: 'critical',
        className: ['state-critical text-critical ripple:bg-critical'],
      },
      // #endregion Text
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
      className: ['px-xs'],
    },
    {
      variant: 'text',
      className: 'px-2xs',
    },
  ],
});
