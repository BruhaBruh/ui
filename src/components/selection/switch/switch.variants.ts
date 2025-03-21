import { cva } from '@/utility';

const variants = cva(
  {
    name: 'switch group/switch',
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

const trackVariants = cva(
  {
    name: 'switch--track',
    layout: 'relative',
    flex: 'inline-flex items-center',
    transitions: 'transition easing-standard duration-medium-1',
    borders: ['border-2'],
    box: 'h-8 w-13 rounded-full',
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
          background: [
            'bg-surface-container-highest',
            'group-is-disabled/switch:bg-on-surface/12',
          ],
          typography: 'group-is-disabled/switch:text-on-surface/38',
        },
        false: {
          borders: [
            'border-outline',
            'group-is-disabled/switch:border-outline/12',
          ],
          typography: 'text-surface-container-highest',
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
          background: 'bg-primary',
          typography: 'text-on-primary-container',
        },
      },
      {
        isSelected: true,
        color: 'secondary',
        className: {
          background: 'bg-secondary',
          typography: 'text-on-secondary-container',
        },
      },
      {
        isSelected: true,
        color: 'info',
        className: {
          background: 'bg-info',
          typography: 'text-on-info-container',
        },
      },
      {
        isSelected: true,
        color: 'success',
        className: {
          background: 'bg-secondary',
          typography: 'text-on-secondary-container',
        },
      },
      {
        isSelected: true,
        color: 'caution',
        className: {
          background: 'bg-caution',
          typography: 'text-on-caution-container',
        },
      },
      {
        isSelected: true,
        color: 'critical',
        className: {
          background: 'bg-critical',
          typography: 'text-on-critical-container',
        },
      },
    ],
  },
);

const thumbWrapperVariants = cva(
  {
    name: 'switch--thumb-wrapper',
    layout: 'absolute',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    box: 'size-10 rounded-full',
    background: 'bg-transparent',
    states: [
      'group-is-disabled/switch:state-transparent',
      'group-is-hovered/switch:state-hover',
      'group-in-focus-visible/switch:state-focus',
      'group-is-pressed/switch:state-press',
    ],
  },
  {
    variants: {
      color: {
        primary: {
          states: 'state-primary',
        },
        secondary: {
          states: 'state-secondary',
        },
        info: {
          states: 'state-info',
        },
        success: {
          states: 'state-success',
        },
        caution: {
          states: 'state-caution',
        },
        critical: {
          states: 'state-critical',
        },
      },
      isSelected: {
        true: {
          transforms: 'translate-x-3.5',
        },
        false: {
          transforms: '-translate-x-1.5',
        },
      },
    },
    defaultVariants: {
      color: 'primary',
      isSelected: false,
    },
  },
);

const thumbVariants = cva(
  {
    name: 'switch--thumb',
    layout: 'relative',
    flex: 'inline-flex items-center justify-center',
    transitions: [
      'transition-[width,height,color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]',
      'easing-standard duration-medium-1',
    ],
    background: 'bg-outline',
    box: ['rounded-full', 'group-is-pressed/switch:size-7'],
  },
  {
    variants: {
      size: {
        default: {},
        icon: {
          box: 'size-6',
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
      isSelected: {
        true: {
          background: ['group-is-disabled/switch:bg-surface'],
        },
        false: {
          background: ['group-is-disabled/switch:bg-on-surface/38'],
        },
      },
    },
    defaultVariants: {
      size: 'default',
      color: 'primary',
      isSelected: false,
    },
    compoundVariants: [
      {
        isSelected: false,
        size: 'default',
        className: {
          box: 'size-4',
        },
      },
      {
        isSelected: true,
        className: {
          box: 'size-6',
        },
      },
      {
        isSelected: true,
        color: 'primary',
        className: {
          background: 'bg-on-primary',
        },
      },
      {
        isSelected: true,
        color: 'secondary',
        className: {
          background: 'bg-on-secondary',
        },
      },
      {
        isSelected: true,
        color: 'info',
        className: {
          background: 'bg-on-info',
        },
      },
      {
        isSelected: true,
        color: 'success',
        className: {
          background: 'bg-on-success',
        },
      },
      {
        isSelected: true,
        color: 'caution',
        className: {
          background: 'bg-on-caution',
        },
      },
      {
        isSelected: true,
        color: 'critical',
        className: {
          background: 'bg-on-critical',
        },
      },
    ],
  },
);

const iconVariants = cva({
  name: 'switch--icon',
  layout: 'relative inline-block',
  box: 'size-4',
  overflow: 'overflow-hidden empty:hidden',
  other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
});

const labelVariants = cva({
  name: 'switch--label',
  typography: 'typography-label-large',
  transitions: 'transition easing-standard duration-medium-1',
  box: 'empty:hidden',
});

export const switchVariants = Object.assign(variants, {
  track: trackVariants,
  thumbWrapper: thumbWrapperVariants,
  thumb: thumbVariants,
  icon: iconVariants,
  label: labelVariants,
});
