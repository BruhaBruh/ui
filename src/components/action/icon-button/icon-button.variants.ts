import { cva } from '@/utility';

const variants = cva(
  {
    name: 'icon-button group/icon-button',
    layout: 'relative',
    box: 'size-10 rounded-md',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    borders: 'outline-none border-transparent',
    typography: 'whitespace-nowrap',
    states: [
      'cursor-pointer',
      'is-disabled:state-transparent',
      'is-disabled:pointer-events-none',
      'is-hovered:state-hover',
      'in-focus-visible:state-focus',
      'is-pressed:state-press',
    ],
    ripple: 'ripple-wrapper:inset-0 ripple-wrapper:rounded-md',
  },
  {
    variants: {
      variant: {
        standard: {
          typography: ['is-disabled:text-on-surface/38'],
        },
        filled: {
          background: ['is-disabled:bg-on-surface/12'],
          typography: ['is-disabled:text-on-surface/38'],
        },
        tonal: {
          background: ['is-disabled:bg-on-surface/12'],
          typograhpy: ['is-disabled:text-on-surface/38'],
        },
        outlined: {
          borders: 'border',
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
      isToggleable: {
        true: {},
        false: {},
      },
      isSelected: {
        true: {},
        false: {},
      },
    },
    defaultVariants: {
      color: 'primary',
      variant: 'standard',
      isToggleable: false,
      isSelected: false,
    },
    compoundVariants: [
      // #region Standard
      {
        variant: 'standard',
        isToggleable: true,
        isSelected: false,
        className: {
          typography: 'text-on-surface-variant',
          ripple: 'ripple:bg-on-surface-variant',
          states: 'state-on-surface-variant',
        },
      },
      {
        variant: 'standard',
        color: 'primary',
        isToggleable: false,
        className: {
          typography: 'text-primary',
          ripple: 'ripple:bg-primary',
          states: 'state-primary',
        },
      },
      {
        variant: 'standard',
        color: 'primary',
        isToggleable: true,
        isSelected: true,
        className: {
          typography: 'text-primary',
          ripple: 'ripple:bg-primary',
          states: 'state-primary',
        },
      },
      {
        variant: 'standard',
        color: 'secondary',
        isToggleable: false,
        className: {
          typography: 'text-secondary',
          ripple: 'ripple:bg-secondary',
          states: 'state-secondary',
        },
      },
      {
        variant: 'standard',
        color: 'secondary',
        isToggleable: true,
        isSelected: true,
        className: {
          typography: 'text-secondary',
          ripple: 'ripple:bg-secondary',
          states: 'state-secondary',
        },
      },
      {
        variant: 'standard',
        color: 'info',
        isToggleable: false,
        className: {
          typography: 'text-info',
          ripple: 'ripple:bg-info',
          states: 'state-info',
        },
      },
      {
        variant: 'standard',
        color: 'info',
        isToggleable: true,
        isSelected: true,
        className: {
          typography: 'text-info',
          ripple: 'ripple:bg-info',
          states: 'state-info',
        },
      },
      {
        variant: 'standard',
        color: 'success',
        isToggleable: false,
        className: {
          typography: 'text-success',
          ripple: 'ripple:bg-success',
          states: 'state-success',
        },
      },
      {
        variant: 'standard',
        color: 'success',
        isToggleable: true,
        isSelected: true,
        className: {
          typography: 'text-success',
          ripple: 'ripple:bg-success',
          states: 'state-success',
        },
      },
      {
        variant: 'standard',
        color: 'caution',
        isToggleable: false,
        className: {
          typography: 'text-caution',
          ripple: 'ripple:bg-caution',
          states: 'state-caution',
        },
      },
      {
        variant: 'standard',
        color: 'caution',
        isToggleable: true,
        isSelected: true,
        className: {
          typography: 'text-caution',
          ripple: 'ripple:bg-caution',
          states: 'state-caution',
        },
      },
      {
        variant: 'standard',
        color: 'critical',
        isToggleable: false,
        className: {
          typography: 'text-critical',
          ripple: 'ripple:bg-critical',
          states: 'state-critical',
        },
      },
      {
        variant: 'standard',
        color: 'critical',
        isToggleable: true,
        isSelected: true,
        className: {
          typography: 'text-critical',
          ripple: 'ripple:bg-critical',
          states: 'state-critical',
        },
      },
      // #endregion Standard

      // #region Filled
      {
        variant: 'filled',
        color: 'primary',
        isToggleable: false,
        className: {
          background: 'bg-primary',
          typography: 'text-on-primary',
          ripple: 'ripple:bg-on-primary',
          states: 'state-on-primary',
        },
      },
      {
        variant: 'filled',
        color: 'primary',
        isToggleable: true,
        isSelected: false,
        className: {
          background: 'bg-surface-container-highest',
          typography: 'text-primary',
          ripple: 'ripple:bg-primary',
          states: 'state-primary',
        },
      },
      {
        variant: 'filled',
        color: 'primary',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-secondary',
          typography: 'text-on-secondary',
          ripple: 'ripple:bg-on-secondary',
          states: 'state-on-secondary',
        },
      },
      {
        variant: 'filled',
        color: 'secondary',
        isToggleable: true,
        isSelected: false,
        className: {
          background: 'bg-surface-container-highest',
          typography: 'text-secondary',
          ripple: 'ripple:bg-secondary',
          states: 'state-secondary',
        },
      },
      {
        variant: 'filled',
        color: 'secondary',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-info',
          typography: 'text-on-info',
          ripple: 'ripple:bg-on-info',
          states: 'state-on-info',
        },
      },
      {
        variant: 'filled',
        color: 'info',
        isToggleable: true,
        isSelected: false,
        className: {
          background: 'bg-surface-container-highest',
          typography: 'text-info',
          ripple: 'ripple:bg-info',
          states: 'state-info',
        },
      },
      {
        variant: 'filled',
        color: 'info',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-success',
          typography: 'text-on-success',
          ripple: 'ripple:bg-on-success',
          states: 'state-on-success',
        },
      },
      {
        variant: 'filled',
        color: 'success',
        isToggleable: true,
        isSelected: false,
        className: {
          background: 'bg-surface-container-highest',
          typography: 'text-success',
          ripple: 'ripple:bg-success',
          states: 'state-success',
        },
      },
      {
        variant: 'filled',
        color: 'success',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-caution',
          typography: 'text-on-caution',
          ripple: 'ripple:bg-on-caution',
          states: 'state-on-caution',
        },
      },
      {
        variant: 'filled',
        color: 'caution',
        isToggleable: true,
        isSelected: false,
        className: {
          background: 'bg-surface-container-highest',
          typography: 'text-caution',
          ripple: 'ripple:bg-caution',
          states: 'state-caution',
        },
      },
      {
        variant: 'filled',
        color: 'caution',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-critical',
          typography: 'text-on-critical',
          ripple: 'ripple:bg-on-critical',
          states: 'state-on-critical',
        },
      },
      {
        variant: 'filled',
        color: 'critical',
        isToggleable: true,
        isSelected: false,
        className: {
          background: 'bg-surface-container-highest',
          typography: 'text-critical',
          ripple: 'ripple:bg-critical',
          states: 'state-critical',
        },
      },
      {
        variant: 'filled',
        color: 'critical',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: true,
        isSelected: false,
        className: {
          background: 'bg-surface-container-highest',
          typography: 'text-on-surface-variant',
          ripple: 'ripple:bg-on-surface-variant',
          states: 'state-on-surface-variant',
        },
      },
      {
        variant: 'tonal',
        color: 'primary',
        isToggleable: false,
        className: {
          background: 'bg-primary-container',
          typography: 'text-on-primary-container',
          ripple: 'ripple:bg-on-primary-container',
          states: 'state-on-primary-container',
        },
      },
      {
        variant: 'tonal',
        color: 'primary',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-secondary-container',
          typography: 'text-on-secondary-container',
          ripple: 'ripple:bg-on-secondary-container',
          states: 'state-on-secondary-container',
        },
      },
      {
        variant: 'tonal',
        color: 'secondary',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-info-container',
          typography: 'text-on-info-container',
          ripple: 'ripple:bg-on-info-container',
          states: 'state-on-info-container',
        },
      },
      {
        variant: 'tonal',
        color: 'info',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-success-container',
          typography: 'text-on-success-container',
          ripple: 'ripple:bg-on-success-container',
          states: 'state-on-success-container',
        },
      },
      {
        variant: 'tonal',
        color: 'success',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-caution-container',
          typography: 'text-on-caution-container',
          ripple: 'ripple:bg-on-caution-container',
          states: 'state-on-caution-container',
        },
      },
      {
        variant: 'tonal',
        color: 'caution',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          background: 'bg-critical-container',
          typography: 'text-on-critical-container',
          ripple: 'ripple:bg-on-critical-container',
          states: 'state-on-critical-container',
        },
      },
      {
        variant: 'tonal',
        color: 'critical',
        isToggleable: true,
        isSelected: true,
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
        isToggleable: false,
        className: {
          typography: 'text-on-surface-variant',
          borders: ['border-outline', 'is-disabled:border-on-surface/12'],
          ripple: 'ripple:bg-on-surface-variant',
          states: 'state-on-surface-variant',
        },
      },
      {
        variant: 'outlined',
        isToggleable: true,
        isSelected: false,
        className: {
          typography: 'text-on-surface-variant',
          borders: ['border-outline', 'is-disabled:border-on-surface/12'],
          ripple: 'ripple:bg-on-surface-variant',
          states: 'state-on-surface-variant',
        },
      },
      {
        variant: 'outlined',
        isToggleable: true,
        isSelected: true,
        className: {
          background: ['bg-inverse-surface', 'is-disabled:bg-on-surface/12'],
          typography: 'text-inverse-on-surface',
          ripple: 'ripple:bg-inverse-on-surface',
          states: 'state-inverse-on-surface',
        },
      },
      // #endregion Outlined
    ],
  },
);

const iconVariants = cva({
  name: 'icon-button--icon',
  layout: 'relative',
  box: 'size-6',
  flex: 'inline-flex',
  overflow: 'empty:hidden',
  other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
});

export const iconButtonVariants = Object.assign(variants, {
  icon: iconVariants,
});
