import { cva } from '@/utility';

const variants = cva(
  {
    name: 'segmented-button group/segmented-button',
    layout: 'relative',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    background: 'is-disabled:bg-transparent',
    borders: [
      'border outline-none border-outline',
      'is-disabled:border-on-surface',
      'is-disabled:border-opacity-38',
    ],
    typography: [
      'typography-label-large',
      'is-disabled:text-on-surface',
      'is-disabled:text-opacity-38',
    ],
    spacing: 'px-sm',
    overflow: 'overflow-hidden',
    states: [
      'is-disabled:state-transparent',
      'is-disabled:pointer-events-none',
      'is-hovered:hover-state',
      'in-focus-visible:focus-state',
      'is-pressed:press-state',
    ],
    ripple: 'ripple-wrapper:-inset-0.25',
  },
  {
    variants: {
      color: {
        primary: {},
        secondary: {},
        info: {},
        success: {},
        caution: {},
        critical: {},
      },
      isSelected: {
        true: {},
        false: {
          background: 'bg-transparent',
          typography: 'text-on-surface',
          states: 'state-on-surface',
          ripple: 'ripple:bg-on-surface',
        },
      },
    },
    defaultVariants: {
      isSelected: false,
      color: 'primary',
    },
    compoundVariants: [
      {
        color: 'primary',
        isSelected: true,
        className: {
          background: 'bg-primary-container',
          typography: 'text-on-primary-container',
          states: 'state-on-primary-container',
          ripple: 'ripple:bg-on-primary-container',
        },
      },
      {
        color: 'secondary',
        isSelected: true,
        className: {
          background: 'bg-secondary-container',
          typography: 'text-on-secondary-container',
          states: 'state-on-secondary-container',
          ripple: 'ripple:bg-on-secondary-container',
        },
      },
      {
        color: 'info',
        isSelected: true,
        className: {
          background: 'bg-info-container',
          typography: 'text-on-info-container',
          states: 'state-on-info-container',
          ripple: 'ripple:bg-on-info-container',
        },
      },
      {
        color: 'success',
        isSelected: true,
        className: {
          background: 'bg-success-container',
          typography: 'text-on-success-container',
          states: 'state-on-success-container',
          ripple: 'ripple:bg-on-success-container',
        },
      },
      {
        color: 'caution',
        isSelected: true,
        className: {
          background: 'bg-caution-container',
          typography: 'text-on-caution-container',
          states: 'state-on-caution-container',
          ripple: 'ripple:bg-on-caution-container',
        },
      },
      {
        color: 'critical',
        isSelected: true,
        className: {
          background: 'bg-critical-container',
          typography: 'text-on-critical-container',
          states: 'state-on-critical-container',
          ripple: 'ripple:bg-on-critical-container',
        },
      },
    ],
  },
);

const groupVariants = cva(
  {
    name: 'segmented-button-group group/segmented-button-group',
    flex: 'inline-grid auto-cols-fr grid-flow-col',
    // background: 'bg-secondary-container',
    other: [
      '[&>*:first-child]:ml-0 [&>*]:-ml-0.25',
      '[&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md',
    ],
  },
  {
    variants: {
      density: {
        0: { box: 'h-10' },
        [-1]: { box: 'h-9' },
        [-2]: { box: 'h-8' },
        [-3]: { box: 'h-7' },
      },
    },
    defaultVariants: {
      density: 0,
    },
  },
);

const labelVariants = cva({
  name: 'segmented-button--label group/segmented-button--label',
  spacing: 'px-2xs',
  other: '[&>svg]:size-4.5',
});

const iconVariants = cva(
  {
    name: 'segmented-button--icon group/segmented-button--icon',
    layout: 'relative inline-block',
    box: 'size-4.5',
    overflow: 'overflow-hidden',
    other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
  },
  {
    variants: {
      hiddenOnEmpty: {
        true: {
          overflow: 'empty:hidden',
        },
        false: {},
      },
    },
    defaultVariants: {
      hiddenOnEmpty: true,
    },
  },
);

export const segmentedButtonVariants = Object.assign(variants, {
  group: groupVariants,
  label: labelVariants,
  icon: iconVariants,
});
