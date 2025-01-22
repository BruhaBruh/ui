import { cva } from 'class-variance-authority';

export const fabVariants = cva(
  [
    'group/fab relative',
    'inline-flex items-center justify-center',
    'transition easing-standard duration-medium-1',
    'border-transparent',
    'overflow-hidden',
    'whitespace-nowrap outline-none',
    'ripple-wrapper:-inset-1',
    'is-hovered:hover-state',
    'in-focus-visible:focus-state',
    'is-pressed:press-state',
  ],
  {
    variants: {
      color: {
        surface: ['state-primary text-primary ripple:bg-primary'],
        primary: [
          'bg-primary-container state-on-primary-container',
          'text-on-primary-container ripple:bg-on-primary-container',
        ],
        secondary: [
          'bg-secondary-container state-on-secondary-container',
          'text-on-secondary-container ripple:bg-on-secondary-container',
        ],
        info: [
          'bg-info-container state-on-info-container',
          'text-on-info-container ripple:bg-on-info-container',
        ],
        success: [
          'bg-success-container state-on-success-container',
          'text-on-success-container ripple:bg-on-success-container',
        ],
        caution: [
          'bg-caution-container state-on-caution-container',
          'text-on-caution-container ripple:bg-on-caution-container',
        ],
        critical: [
          'bg-critical-container state-on-critical-container',
          'text-on-critical-container ripple:bg-on-critical-container',
        ],
      },
      size: {
        sm: ['size-10 rounded-xs'],
        md: ['size-14 rounded-md p-md'],
        lg: ['size-24 rounded-2xl p-md'],
      },
      lowered: {
        true: [
          'elevation-1',
          'is-hovered:elevation-2',
          'in-focus-visible:elevation-1',
          'is-pressed:elevation-1',
        ],
        false: [
          'elevation-3',
          'is-hovered:elevation-4',
          'in-focus-visible:elevation-3',
          'is-pressed:elevation-3',
        ],
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
        className: ['bg-surface-container-high'],
      },
      {
        color: 'surface',
        lowered: true,
        className: ['bg-surface-container-low'],
      },
    ],
  },
);

export const fabIconVariants = cva(
  [
    'relative inline-block overflow-hidden empty:hidden [&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
  ],
  {
    variants: {
      size: {
        sm: 'size-6',
        md: 'size-6',
        lg: 'size-9',
      },
    },
  },
);
