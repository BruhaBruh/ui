import { cva } from 'class-variance-authority';

export const iconButtonVariants = cva(
  [
    'group/icon-button relative',
    'size-10 rounded-md',
    'inline-flex items-center justify-center',
    'transition easing-standard duration-medium-1',
    'border-transparent',
    'overflow-hidden',
    'whitespace-nowrap outline-none',
    'is-disabled:pointer-events-none',
    'ripple-wrapper:-inset-1',
    'is-hovered:hover-state',
    'in-focus-visible:focus-state',
    'is-pressed:press-state',
    'is-disabled:state-transparent',
  ],
  {
    variants: {
      variant: {
        standard: [
          'is-disabled:text-on-surface',
          'is-disabled:text-opacity-38',
        ],
        filled: [
          'is-disabled:bg-on-surface',
          'is-disabled:bg-opacity-12',
          'is-disabled:text-on-surface',
          'is-disabled:text-opacity-38',
        ],
        tonal: [
          'is-disabled:bg-on-surface',
          'is-disabled:bg-opacity-12',
          'is-disabled:text-on-surface',
          'is-disabled:text-opacity-38',
        ],
        outlined: [
          'border',
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
      isToggleable: {
        true: [],
        false: [],
      },
      isSelected: {
        true: [],
        false: [],
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
        className:
          'state-on-surface-variant text-on-surface-variant ripple:bg-on-surface-variant',
      },
      {
        variant: 'standard',
        color: 'primary',
        isToggleable: false,
        className: 'state-primary text-primary ripple:bg-primary',
      },
      {
        variant: 'standard',
        color: 'primary',
        isToggleable: true,
        isSelected: true,
        className: 'state-primary text-primary ripple:bg-primary',
      },
      {
        variant: 'standard',
        color: 'secondary',
        isToggleable: false,
        className: 'state-secondary text-secondary ripple:bg-secondary',
      },
      {
        variant: 'standard',
        color: 'secondary',
        isToggleable: true,
        isSelected: true,
        className: 'state-secondary text-secondary ripple:bg-secondary',
      },
      {
        variant: 'standard',
        color: 'info',
        isToggleable: false,
        className: 'state-info text-info ripple:bg-info',
      },
      {
        variant: 'standard',
        color: 'info',
        isToggleable: true,
        isSelected: true,
        className: 'state-info text-info ripple:bg-info',
      },
      {
        variant: 'standard',
        color: 'success',
        isToggleable: false,
        className: 'state-success text-success ripple:bg-success',
      },
      {
        variant: 'standard',
        color: 'success',
        isToggleable: true,
        isSelected: true,
        className: 'state-success text-success ripple:bg-success',
      },
      {
        variant: 'standard',
        color: 'caution',
        isToggleable: false,
        className: 'state-caution text-caution ripple:bg-caution',
      },
      {
        variant: 'standard',
        color: 'caution',
        isToggleable: true,
        isSelected: true,
        className: 'state-caution text-caution ripple:bg-caution',
      },
      {
        variant: 'standard',
        color: 'critical',
        isToggleable: false,
        className: 'state-critical text-critical ripple:bg-critical',
      },
      {
        variant: 'standard',
        color: 'critical',
        isToggleable: true,
        isSelected: true,
        className: 'state-critical text-critical ripple:bg-critical',
      },
      // #endregion Standard

      // #region Filled
      {
        variant: 'filled',
        color: 'primary',
        isToggleable: false,
        className:
          'bg-primary state-on-primary text-on-primary ripple:bg-on-primary',
      },
      {
        variant: 'filled',
        color: 'primary',
        isToggleable: true,
        isSelected: false,
        className:
          'bg-surface-container-highest state-primary text-primary ripple:bg-primary',
      },
      {
        variant: 'filled',
        color: 'primary',
        isToggleable: true,
        isSelected: true,
        className:
          'bg-primary state-on-primary text-on-primary ripple:bg-on-primary',
      },
      {
        variant: 'filled',
        color: 'secondary',
        isToggleable: false,
        className:
          'bg-secondary state-on-secondary text-on-secondary ripple:bg-on-secondary',
      },
      {
        variant: 'filled',
        color: 'secondary',
        isToggleable: true,
        isSelected: false,
        className:
          'bg-surface-container-highest state-secondary text-secondary ripple:bg-secondary',
      },
      {
        variant: 'filled',
        color: 'secondary',
        isToggleable: true,
        isSelected: true,
        className:
          'bg-secondary state-on-secondary text-on-secondary ripple:bg-on-secondary',
      },
      {
        variant: 'filled',
        color: 'info',
        isToggleable: false,
        className: 'bg-info state-on-info text-on-info ripple:bg-on-info',
      },
      {
        variant: 'filled',
        color: 'info',
        isToggleable: true,
        isSelected: false,
        className:
          'bg-surface-container-highest state-info text-info ripple:bg-info',
      },
      {
        variant: 'filled',
        color: 'info',
        isToggleable: true,
        isSelected: true,
        className: 'bg-info state-on-info text-on-info ripple:bg-on-info',
      },
      {
        variant: 'filled',
        color: 'success',
        isToggleable: false,
        className:
          'bg-success state-on-success text-on-success ripple:bg-on-success',
      },
      {
        variant: 'filled',
        color: 'success',
        isToggleable: true,
        isSelected: false,
        className:
          'bg-surface-container-highest state-success text-success ripple:bg-success',
      },
      {
        variant: 'filled',
        color: 'success',
        isToggleable: true,
        isSelected: true,
        className:
          'bg-success state-on-success text-on-success ripple:bg-on-success',
      },
      {
        variant: 'filled',
        color: 'caution',
        isToggleable: false,
        className:
          'bg-caution state-on-caution text-on-caution ripple:bg-on-caution',
      },
      {
        variant: 'filled',
        color: 'caution',
        isToggleable: true,
        isSelected: false,
        className:
          'bg-surface-container-highest state-caution text-caution ripple:bg-caution',
      },
      {
        variant: 'filled',
        color: 'caution',
        isToggleable: true,
        isSelected: true,
        className:
          'bg-caution state-on-caution text-on-caution ripple:bg-on-caution',
      },
      {
        variant: 'filled',
        color: 'critical',
        isToggleable: false,
        className:
          'bg-critical state-on-critical text-on-critical ripple:bg-on-critical',
      },
      {
        variant: 'filled',
        color: 'critical',
        isToggleable: true,
        isSelected: false,
        className:
          'bg-surface-container-highest state-critical text-critical ripple:bg-critical',
      },
      {
        variant: 'filled',
        color: 'critical',
        isToggleable: true,
        isSelected: true,
        className:
          'bg-critical state-on-critical text-on-critical ripple:bg-on-critical',
      },
      // #endregion Filled

      // #region Tonal
      {
        variant: 'tonal',
        isToggleable: true,
        isSelected: false,
        className: [
          'bg-surface-container-highest text-on-surface-variant',
          'state-on-surface-variant ripple:bg-on-surface-variant',
        ],
      },
      {
        variant: 'tonal',
        color: 'primary',
        isToggleable: false,
        className: [
          'bg-primary-container state-on-primary-container',
          'text-on-primary-container ripple:bg-on-primary-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'primary',
        isToggleable: true,
        isSelected: true,
        className: [
          'bg-primary-container state-on-primary-container',
          'text-on-primary-container ripple:bg-on-primary-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'secondary',
        isToggleable: false,
        className: [
          'bg-secondary-container state-on-secondary-container',
          'text-on-secondary-container ripple:bg-on-secondary-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'secondary',
        isToggleable: true,
        isSelected: true,
        className: [
          'bg-secondary-container state-on-secondary-container',
          'text-on-secondary-container ripple:bg-on-secondary-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'info',
        isToggleable: false,
        className: [
          'bg-info-container state-on-info-container',
          'text-on-info-container ripple:bg-on-info-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'info',
        isToggleable: true,
        isSelected: true,
        className: [
          'bg-info-container state-on-info-container',
          'text-on-info-container ripple:bg-on-info-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'success',
        isToggleable: false,
        className: [
          'bg-success-container state-on-success-container',
          'text-on-success-container ripple:bg-on-success-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'success',
        isToggleable: true,
        isSelected: true,
        className: [
          'bg-success-container state-on-success-container',
          'text-on-success-container ripple:bg-on-success-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'caution',
        isToggleable: false,
        className: [
          'bg-caution-container state-on-caution-container',
          'text-on-caution-container ripple:bg-on-caution-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'caution',
        isToggleable: true,
        isSelected: true,
        className: [
          'bg-caution-container state-on-caution-container',
          'text-on-caution-container ripple:bg-on-caution-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'critical',
        isToggleable: false,
        className: [
          'bg-critical-container state-on-critical-container',
          'text-on-critical-container ripple:bg-on-critical-container',
        ],
      },
      {
        variant: 'tonal',
        color: 'caution',
        isToggleable: true,
        isSelected: true,
        className: [
          'bg-critical-container state-on-critical-container',
          'text-on-critical-container ripple:bg-on-critical-container',
        ],
      },
      // #endregion Tonal

      // #region Outlined
      {
        variant: 'outlined',
        isToggleable: false,
        className: [
          'border-outline state-on-surface-variant',
          'text-on-surface-variant ripple:bg-on-surface-variant',
          'is-disabled:border-on-surface',
          'is-disabled:border-opacity-12',
        ],
      },
      {
        variant: 'outlined',
        isToggleable: true,
        isSelected: false,
        className: [
          'border-outline state-on-surface-variant',
          'text-on-surface-variant ripple:bg-on-surface-variant',
          'is-disabled:border-on-surface',
          'is-disabled:border-opacity-12',
        ],
      },
      {
        variant: 'outlined',
        isToggleable: true,
        isSelected: true,
        className: [
          'bg-inverse-surface state-inverse-on-surface',
          'text-inverse-on-surface ripple:bg-inverse-on-surface',
          'is-disabled:bg-on-surface',
          'is-disabled:bg-opacity-12',
        ],
      },
      // #endregion Outlined
    ],
  },
);

export const iconButtonIconVariants = cva([
  'relative inline-block size-6 overflow-hidden empty:hidden [&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
]);
