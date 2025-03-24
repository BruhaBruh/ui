import { cva } from '@/utility';

const variants = cva(
  {
    name: 'slider group/slider',
    flex: 'inline-flex flex-col',
    layout: 'relative',
  },
  {
    variants: {
      color: {
        standard: {},
        primary: {},
        secondary: {},
        info: {},
        success: {},
        caution: {},
        critical: {},
      },
    },
    defaultVariants: {
      color: 'standard',
    },
  },
);

const labelVariants = cva({
  name: 'slider--label',
  flex: 'inline-flex items-center justify-between',
  spacing: 'gap-xs',
  typography: 'typography-label-large',
});

const trackVariants = cva({
  name: 'slider--track',
  flex: 'inline-flex items-center',
  box: 'h-12',
  layout: 'relative',
});

const activeTrackVariants = cva(
  {
    name: 'slider--active-track',
    layout: 'absolute',
    box: 'h-4',
    flex: 'inline-flex items-center',
    background: 'bg-primary',
    overflow: 'overflow-hidden',
    transitions: 'transition easing-standard duration-medium-1',
    states: ['group-is-disabled/slider:bg-on-surface/38'],
  },
  {
    variants: {
      color: {
        standard: {
          background: 'bg-primary',
        },
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
      position: {
        left: {
          borders: 'rounded-l-3xl rounded-r-xs',
        },
        center: {
          borders: 'rounded-3xs',
        },
        right: {
          borders: 'rounded-l-xs rounded-r-3xl',
        },
      },
    },
    defaultVariants: {
      color: 'standard',
      position: 'center',
    },
  },
);

const inactiveTrackVariants = cva(
  {
    name: 'slider--inactive-track',
    layout: 'absolute',
    box: 'h-4',
    flex: 'inline-flex items-center',
    overflow: 'overflow-hidden',
    transitions: 'transition easing-standard duration-medium-1',
    states: [
      'group-is-disabled/slider:bg-on-surface/12',
      'group-is-disabled/slider:after:bg-on-surface/38',
    ],
  },
  {
    variants: {
      color: {
        standard: {
          background: 'bg-secondary-container',
          after: 'after:bg-primary',
        },
        primary: {
          background: 'bg-primary-container',
          after: 'after:bg-primary',
        },
        secondary: {
          background: 'bg-secondary-container',
          after: 'after:bg-secondary',
        },
        info: {
          background: 'bg-info-container',
          after: 'after:bg-info',
        },
        success: {
          background: 'bg-success-container',
          after: 'after:bg-success',
        },
        caution: {
          background: 'bg-caution-container',
          after: 'after:bg-caution',
        },
        critical: {
          background: 'bg-critical-container',
          after: 'after:bg-critical',
        },
      },
      position: {
        left: {
          borders: 'rounded-l-3xl rounded-r-xs',
          after: [
            'after:absolute',
            'after:left-1.5',
            'after:size-1',
            'after:rounded-full',
          ],
        },
        center: {
          borders: 'rounded-3xs',
        },
        right: {
          borders: 'rounded-l-xs rounded-r-3xl',
          after: [
            'after:absolute',
            'after:right-1.5',
            'after:size-1',
            'after:rounded-full',
          ],
        },
      },
    },
    defaultVariants: {
      color: 'standard',
      position: 'center',
    },
  },
);

const thumbVariants = cva(
  {
    name: 'slider--thumb',
    flex: 'inline-flex items-center justify-between',
    transitions: [
      'transition-[width,height,color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]',
      'easing-standard duration-medium-1',
    ],
    box: 'h-11',
    borders: 'rounded-full',
    layout: 'relative top-1/2',
    states: ['group-is-disabled/slider:bg-on-surface/38'],
  },
  {
    variants: {
      color: {
        standard: {
          background: 'bg-primary',
        },
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
      isDragging: {
        true: { box: 'w-0.5' },
        false: { box: 'w-1' },
      },
    },
    defaultVariants: {
      color: 'standard',
      isDragging: false,
    },
  },
);

const tooltipVariants = cva({
  name: 'slider--tooltip',
  layout: 'absolute bottom-full left-1/2',
  transforms: '-translate-y-1',
  spacing: 'px-4 py-3',
  background: 'bg-inverse-surface',
  typography: 'typography-label-large text-inverse-on-surface',
  borders: 'rounded-full',
});

export const sliderVariants = Object.assign(variants, {
  label: labelVariants,
  track: trackVariants,
  activeTrack: activeTrackVariants,
  inactiveTrack: inactiveTrackVariants,
  thumb: thumbVariants,
  tooltip: tooltipVariants,
});
