import { cva } from '@/utility';

const variants = cva(
  {
    name: 'fab group/fab',
    layout: 'relative',
    flex: 'inline-flex items-center justify-center',
    transitions: 'transition easing-standard duration-medium-1',
    borders: 'outline-none border-transparent',
    overflow: 'overflow-hidden',
    typography: 'whitespace-wrap',
    states: [
      'is-hovered:hover-state',
      'in-focus-visible:focus-state',
      'is-pressed:press-state',
    ],
    ripple: 'ripple-wrapper:-inset-1',
  },
  {
    variants: {
      color: {
        surface: {
          typography: 'state-primary',
          ripple: 'ripple:bg-primary',
          states: 'state-primary',
        },
        primary: {
          background: 'bg-primary-container',
          typography: 'text-on-primary-container',
          ripple: 'ripple:bg-on-primary-container',
          states: 'state-on-primary-container',
        },
        secondary: {
          background: 'bg-secondary-container',
          typography: 'text-on-secondary-container',
          ripple: 'ripple:bg-on-secondary-container',
          states: 'state-on-secondary-container',
        },
        info: {
          background: 'bg-info-container',
          typography: 'text-on-info-container',
          ripple: 'ripple:bg-on-info-container',
          states: 'state-on-info-container',
        },
        success: {
          background: 'bg-success-container',
          typography: 'text-on-success-container',
          ripple: 'ripple:bg-on-success-container',
          states: 'state-on-success-container',
        },
        caution: {
          background: 'bg-caution-container',
          typography: 'text-on-caution-container',
          ripple: 'ripple:bg-on-caution-container',
          states: 'state-on-caution-container',
        },
        critical: {
          background: 'bg-critical-container',
          typography: 'text-on-critical-container',
          ripple: 'ripple:bg-on-critical-container',
          states: 'state-on-critical-container',
        },
      },
      size: {
        sm: {
          box: 'size-10 rounded-xs',
        },
        md: {
          box: 'size-14 rounded-md',
          spacing: 'p-md',
        },
        lg: {
          box: 'size-24 rounded-2xl',
          spacing: 'p-md',
        },
      },
      lowered: {
        true: {
          effects: [
            'elevation-1',
            'is-hovered:elevation-2',
            'in-focus-visible:elevation-1',
            'is-pressed:elevation-1',
          ],
        },
        false: {
          effects: [
            'elevation-3',
            'is-hovered:elevation-4',
            'in-focus-visible:elevation-3',
            'is-pressed:elevation-3',
          ],
        },
      },
    },
    defaultVariants: {
      color: 'surface',
      size: 'md',
      lowered: false,
    },
    compoundVariants: [
      {
        color: 'surface',
        lowered: false,
        className: {
          background: 'bg-surface-container-high',
        },
      },
      {
        color: 'surface',
        lowered: true,
        className: {
          background: 'bg-surface-container-low',
        },
      },
    ],
  },
);

const iconVariants = cva(
  {
    name: 'fab--icon',
    layout: 'relative',
    flex: 'inline-flex',
    overflow: 'overflow-hidden empty:hidden',
    other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
  },
  {
    variants: {
      size: {
        sm: {
          box: 'size-6',
        },
        md: {
          box: 'size-6',
        },
        lg: {
          box: 'size-9',
        },
      },
    },
  },
);

export const fabVariants = Object.assign(variants, {
  icon: iconVariants,
});
