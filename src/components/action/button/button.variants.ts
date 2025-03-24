import { cva } from '@/utility';

const variants = cva(
  {
    name: 'button group/button',
    layout: 'relative',
    box: 'h-10 rounded-md',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    borders: 'outline-none border-transparent',
    overflow: 'overflow-hidden',
    typography: 'whitespace-nowrap',
    states: [
      'cursor-pointer',
      'is-disabled:state-transparent',
      'is-disabled:pointer-events-none',
      'is-hovered:state-hover',
      'in-focus-visible:state-focus',
      'is-pressed:state-press',
    ],
    ripple: ['ripple-wrapper:-inset-1', 'ripple-wrapper:rounded-md'],
  },
  {
    variants: {
      variant: {
        elevated: {
          background: [
            'bg-surface-container-low',
            'is-disabled:bg-on-surface/12',
          ],
          typography: ['is-disabled:text-on-surface/38'],
          effects: [
            'elevation-1',
            'is-disabled:elevation-0',
            'is-hovered:elevation-2',
            'in-focus-visible:elevation-1',
            'is-pressed:elevation-1',
          ],
        },
        filled: {
          background: ['is-disabled:bg-on-surface/12'],
          typography: ['is-disabled:text-on-surface/38'],
          effects: [
            'elevation-0',
            'is-hovered:elevation-1',
            'in-focus-visible:elevation-0',
            'is-pressed:elevation-0',
          ],
        },
        tonal: {
          background: ['is-disabled:bg-on-surface/12'],
          typography: ['is-disabled:text-on-surface/38'],
          effects: [
            'elevation-0',
            'is-hovered:elevation-1',
            'in-focus-visible:elevation-0',
            'is-pressed:elevation-0',
          ],
        },
        outlined: {
          typography: ['is-disabled:text-on-surface/38'],
          borders: [
            'border',
            'border-outline',
            'is-disabled:border-on-surface/38',
          ],
        },
        text: {
          typography: ['is-disabled:text-on-surface/38'],
        },
      },
      color: {
        primary: {},
        secondary: {},
        info: {},
        success: {},
        caution: {},
        critical: {},
      },
    },
    defaultVariants: {
      color: 'primary',
      variant: 'elevated',
    },
    compoundVariants: [
      {
        variant: ['elevated', 'filled', 'tonal', 'outlined'],
        className: { spacing: 'px-md' },
      },
      {
        variant: 'text',
        className: {
          spacing: [
            'px-sm',
            '[&>svg:first-child]:starting:mr-0',
            '[&>svg:last-child]:starting:ml-0',
            '[&>svg:first-child]:mr-2xs',
            '[&>svg:last-child]:ml-2xs',
          ],
        },
      },
      // #region Elevated
      {
        variant: 'elevated',
        color: 'primary',
        className: {
          typography: 'text-primary',
          ripple: 'ripple:bg-primary',
          states: 'state-primary',
        },
      },
      {
        variant: 'elevated',
        color: 'secondary',
        className: {
          typography: 'text-secondary',
          ripple: 'ripple:bg-secondary',
          states: 'state-secondary',
        },
      },
      {
        variant: 'elevated',
        color: 'info',
        className: {
          typography: 'text-info',
          ripple: 'ripple:bg-info',
          states: 'state-info',
        },
      },
      {
        variant: 'elevated',
        color: 'success',
        className: {
          typography: 'text-success',
          ripple: 'ripple:bg-success',
          states: 'state-success',
        },
      },
      {
        variant: 'elevated',
        color: 'caution',
        className: {
          typography: 'text-caution',
          ripple: 'ripple:bg-caution',
          states: 'state-caution',
        },
      },
      {
        variant: 'elevated',
        color: 'critical',
        className: {
          typography: 'text-critical',
          ripple: 'ripple:bg-critical',
          states: 'state-critical',
        },
      },
      // #endregion Elevated

      // #region Filled
      {
        variant: 'filled',
        color: 'primary',
        className: {
          background: 'bg-primary',
          typography: 'text-on-primary',
          ripple: 'ripple:bg-on-primary',
          states: 'state-on-primary',
        },
      },
      {
        variant: 'filled',
        color: 'secondary',
        className: {
          background: 'bg-secondary',
          typography: 'text-on-secondary',
          ripple: 'ripple:bg-on-secondary',
          states: 'state-on-secondary',
        },
      },
      {
        variant: 'filled',
        color: 'info',
        className: {
          background: 'bg-info',
          typography: 'text-on-info',
          ripple: 'ripple:bg-on-info',
          states: 'state-on-info',
        },
      },
      {
        variant: 'filled',
        color: 'success',
        className: {
          background: 'bg-success',
          typography: 'text-on-success',
          ripple: 'ripple:bg-on-success',
          states: 'state-on-success',
        },
      },
      {
        variant: 'filled',
        color: 'caution',
        className: {
          background: 'bg-caution',
          typography: 'text-on-caution',
          ripple: 'ripple:bg-on-caution',
          states: 'state-on-caution',
        },
      },
      {
        variant: 'filled',
        color: 'critical',
        className: {
          background: 'bg-critical',
          typography: 'text-on-critical',
          ripple: 'ripple:bg-on-critical',
          states: 'state-on-critical',
        },
      },
      // #endregion Filled

      // #region Tonal
      {
        variant: 'tonal',
        color: 'primary',
        className: {
          background: 'bg-primary-container',
          typography: 'text-on-primary-container',
          ripple: 'ripple:bg-on-primary-container',
          states: 'state-on-primary-container',
        },
      },
      {
        variant: 'tonal',
        color: 'secondary',
        className: {
          background: 'bg-secondary-container',
          typography: 'text-on-secondary-container',
          ripple: 'ripple:bg-on-secondary-container',
          states: 'state-on-secondary-container',
        },
      },
      {
        variant: 'tonal',
        color: 'info',
        className: {
          background: 'bg-info-container',
          typography: 'text-on-info-container',
          ripple: 'ripple:bg-on-info-container',
          states: 'state-on-info-container',
        },
      },
      {
        variant: 'tonal',
        color: 'success',
        className: {
          background: 'bg-success-container',
          typography: 'text-on-success-container',
          ripple: 'ripple:bg-on-success-container',
          states: 'state-on-success-container',
        },
      },
      {
        variant: 'tonal',
        color: 'caution',
        className: {
          background: 'bg-caution-container',
          typography: 'text-on-caution-container',
          ripple: 'ripple:bg-on-caution-container',
          states: 'state-on-caution-container',
        },
      },
      {
        variant: 'tonal',
        color: 'critical',
        className: {
          background: 'bg-critical-container',
          typography: 'text-on-critical-container',
          ripple: 'ripple:bg-on-critical-container',
          states: 'state-on-critical-container',
        },
      },
      // #endregion Tonal

      // #region Outlined
      {
        variant: 'outlined',
        color: 'primary',
        className: {
          typography: 'text-primary',
          ripple: 'ripple:bg-primary',
          states: ['state-primary', 'in-focus-visible:border-primary'],
        },
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className: {
          typography: 'text-secondary',
          ripple: 'ripple:bg-secondary',
          states: ['state-secondary', 'in-focus-visible:border-secondary'],
        },
      },
      {
        variant: 'outlined',
        color: 'info',
        className: {
          typography: 'text-info',
          ripple: 'ripple:bg-info',
          states: ['state-info', 'in-focus-visible:border-info'],
        },
      },
      {
        variant: 'outlined',
        color: 'success',
        className: {
          typography: 'text-success',
          ripple: 'ripple:bg-success',
          states: ['state-success', 'in-focus-visible:border-success'],
        },
      },
      {
        variant: 'outlined',
        color: 'caution',
        className: {
          typography: 'text-caution',
          ripple: 'ripple:bg-caution',
          states: ['state-caution', 'in-focus-visible:border-caution'],
        },
      },
      {
        variant: 'outlined',
        color: 'critical',
        className: {
          typography: 'text-critical',
          ripple: 'ripple:bg-critical',
          states: ['state-critical', 'in-focus-visible:border-critical'],
        },
      },
      // #endregion Outlined

      // #region Text
      {
        variant: 'text',
        color: 'primary',
        className: {
          typography: 'text-primary',
          ripple: 'ripple:bg-primary',
          states: 'state-primary',
        },
      },
      {
        variant: 'text',
        color: 'secondary',
        className: {
          typography: 'text-secondary',
          ripple: 'ripple:bg-secondary',
          states: 'state-secondary',
        },
      },
      {
        variant: 'text',
        color: 'info',
        className: {
          typography: 'text-info',
          ripple: 'ripple:bg-info',
          states: 'state-info',
        },
      },
      {
        variant: 'text',
        color: 'success',
        className: {
          typography: 'text-success',
          ripple: 'ripple:bg-success',
          states: 'state-success',
        },
      },
      {
        variant: 'text',
        color: 'caution',
        className: {
          typography: 'text-caution',
          ripple: 'ripple:bg-caution',
          states: 'state-caution',
        },
      },
      {
        variant: 'text',
        color: 'critical',
        className: {
          typography: 'text-critical',
          ripple: 'ripple:bg-critical',
          states: 'state-critical',
        },
      },
      // #endregion Text
    ],
  },
);

const labelVariants = cva(
  {
    name: 'button--label',
    typography: ['typography-label-large', 'truncate'],
  },
  {
    variants: {
      variant: {
        elevated: {},
        filled: {},
        tonal: {},
        outlined: {},
        text: {},
      },
    },
    defaultVariants: {
      variant: 'elevated',
    },
    compoundVariants: [
      {
        variant: ['elevated', 'filled', 'tonal', 'outlined'],
        className: { spacing: 'px-xs' },
      },
      {
        variant: 'text',
        className: { spacing: 'px-2xs' },
      },
    ],
  },
);

const iconVariants = cva({
  name: 'button--icon',
  layout: 'relative',
  flex: 'inline-flex',
  box: 'size-4.5',
  overflow: 'overflow-hidden empty:hidden',
  other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
});

export const buttonVariants = Object.assign(variants, {
  label: labelVariants,
  icon: iconVariants,
});
