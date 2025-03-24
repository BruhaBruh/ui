import { cva } from '@/utility';

const variants = cva(
  {
    name: 'radio group/radio',
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
    name: 'radio--mark-wrapper',
    layout: 'relative',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    box: 'size-10 rounded-full',
    overflow: 'overflow-hidden',
    states: [
      'group-is-disabled/radio:state-transparent',
      'group-is-hovered/radio:state-hover',
      'group-in-focus-visible/radio:state-focus',
      'group-is-pressed/radio:state-press',
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
    name: 'radio--mark',
    layout: 'relative',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    box: 'size-5 rounded-full',
    overflow: 'overflow-hidden',
    borders: ['border-2', 'group-is-disabled/radio:border-on-surface/38'],
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
          borders: 'border-on-surface-variant',
        },
      },
    },
    defaultVariants: {
      color: 'primary',
      isSelected: false,
    },
    compoundVariants: [
      {
        isSelected: true,
        color: 'primary',
        className: {
          borders: 'border-primary',
        },
      },
      {
        isSelected: true,
        color: 'secondary',
        className: {
          borders: 'border-secondary',
        },
      },
      {
        isSelected: true,
        color: 'info',
        className: {
          borders: 'border-info',
        },
      },
      {
        isSelected: true,
        color: 'success',
        className: {
          borders: 'border-success',
        },
      },
      {
        isSelected: true,
        color: 'caution',
        className: {
          borders: 'border-caution',
        },
      },
      {
        isSelected: true,
        color: 'critical',
        className: {
          borders: 'border-critical',
        },
      },
    ],
  },
);

const iconVariants = cva(
  {
    name: 'radio--icon',
    layout: 'relative',
    transitions: 'transition easing-standard duration-medium-1',
    box: 'size-2.5 rounded-full',
    overflow: 'overflow-hidden',
    background: ['group-is-disabled/radio:bg-on-surface/38'],
  },
  {
    variants: {
      color: {
        primary: {
          background: 'bg-primary',
        },
        secondary: {
          background: 'bg-secondary',
        },
        info: {
          background: 'bg-info',
        },
        success: {
          background: 'bg-success',
        },
        caution: {
          background: 'bg-caution',
        },
        critical: {
          background: 'bg-critical',
        },
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

const labelVariants = cva({
  name: 'radio--label',
  typography: 'typography-label-large',
  transitions: 'transition easing-standard duration-medium-1',
});

export const radioVariants = Object.assign(variants, {
  markWrapper: markWrapperVariants,
  mark: markVariants,
  icon: iconVariants,
  label: labelVariants,
});
