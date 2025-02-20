import { cva } from '@/utility';

const variants = cva(
  {
    name: 'checkbox group/checkbox',
    layout: 'relative',
    flex: 'inline-flex items-center',
    spacing: 'gap-xs',
    states: ['is-disabled:pointer-events-none'],
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
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

const markWrapperVariants = cva(
  {
    name: 'checkbox--mark-wrapper',
    layout: 'relative',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    background: 'bg-transparent',
    box: 'size-10 rounded-full',
    overflow: 'overflow-hidden',
    states: [
      'group-is-disabled/checkbox:state-transparent',
      'group-is-hovered/checkbox:hover-state',
      'group-in-focus-visible/checkbox:focus-state',
      'group-is-pressed/checkbox:press-state',
    ],
    ripple: ['ripple-wrapper:inset-0', 'ripple-wrapper:rounded-full'],
  },
  {
    variants: {
      color: {
        primary: {
          ripple: 'ripple:bg-primary',
          states: 'state-primary',
        },
        secondary: {
          ripple: 'ripple:bg-secondary',
          states: 'state-secondary',
        },
        info: {
          ripple: 'ripple:bg-info',
          states: 'state-info',
        },
        success: {
          ripple: 'ripple:bg-success',
          states: 'state-success',
        },
        caution: {
          ripple: 'ripple:bg-caution',
          states: 'state-caution',
        },
        critical: {
          ripple: 'ripple:bg-critical',
          states: 'state-critical',
        },
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

const markVariants = cva(
  {
    name: 'checkbox--mark',
    layout: 'relative',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    box: 'size-4.5 rounded-3xs',
    overflow: 'overflow-hidden',
    borders: 'border-2',
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
        true: {
          borders: 'border-transparent',
        },
        false: {},
      },
      isIndeterminate: {
        true: {
          borders: 'border-transparent',
        },
        false: {},
      },
    },
    defaultVariants: {
      color: 'primary',
      isSelected: false,
      isIndeterminate: false,
    },
    compoundVariants: [
      {
        isSelected: false,
        isIndeterminate: false,
        className: {
          borders: [
            'border-outline',
            'group-is-disabled/checkbox:border-on-surface',
            'group-is-disabled/checkbox:border-opacity-38',
          ],
        },
      },
      {
        isSelected: true,
        className: {
          typography: 'group-is-disabled/checkbox:text-surface',
          background: [
            'group-is-disabled/checkbox:bg-on-surface',
            'group-is-disabled/checkbox:bg-opacity-38',
          ],
        },
      },
      {
        isIndeterminate: true,
        className: {
          typography: 'group-is-disabled/checkbox:text-surface',
          background: [
            'group-is-disabled/checkbox:bg-on-surface',
            'group-is-disabled/checkbox:bg-opacity-38',
          ],
        },
      },
      {
        isSelected: true,
        color: 'primary',
        className: {
          typography: 'text-on-primary',
          background: 'bg-primary',
        },
      },
      {
        isIndeterminate: true,
        color: 'primary',
        className: {
          typography: 'text-on-primary',
          background: 'bg-primary',
        },
      },
      {
        isSelected: true,
        color: 'secondary',
        className: {
          typography: 'text-on-secondary',
          background: 'bg-secondary',
        },
      },
      {
        isIndeterminate: true,
        color: 'secondary',
        className: {
          typography: 'text-on-secondary',
          background: 'bg-secondary',
        },
      },
      {
        isSelected: true,
        color: 'info',
        className: {
          typography: 'text-on-info',
          background: 'bg-info',
        },
      },
      {
        isIndeterminate: true,
        color: 'info',
        className: {
          typography: 'text-on-info',
          background: 'bg-info',
        },
      },
      {
        isSelected: true,
        color: 'success',
        className: {
          typography: 'text-on-success',
          background: 'bg-success',
        },
      },
      {
        isIndeterminate: true,
        color: 'success',
        className: {
          typography: 'text-on-success',
          background: 'bg-success',
        },
      },
      {
        isSelected: true,
        color: 'caution',
        className: {
          typography: 'text-on-caution',
          background: 'bg-caution',
        },
      },
      {
        isIndeterminate: true,
        color: 'caution',
        className: {
          typography: 'text-on-caution',
          background: 'bg-caution',
        },
      },
      {
        isSelected: true,
        color: 'critical',
        className: {
          typography: 'text-on-critical',
          background: 'bg-critical',
        },
      },
      {
        isIndeterminate: true,
        color: 'critical',
        className: {
          typography: 'text-on-critical',
          background: 'bg-critical',
        },
      },
    ],
  },
);

const labelVariants = cva({
  name: 'checkbox--label',
  typography: 'typography-label-large',
  transitions: 'transition easing-standard duration-medium-1',
});

const iconVariants = cva({
  name: 'checkbox--icon',
  layout: 'absolute inline-block',
  transitions: 'transition easing-standard duration-medium-1',
  overflow: 'overflow-hidden empty:hidden',
  other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
});

export const checkboxVariants = Object.assign(variants, {
  markWrapper: markWrapperVariants,
  mark: markVariants,
  label: labelVariants,
  icon: iconVariants,
});
