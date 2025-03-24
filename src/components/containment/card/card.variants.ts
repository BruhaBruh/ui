import { cva } from '@/utility';

const variants = cva(
  {
    name: 'card group/card',
    transitions: 'transition duration-medium-1 easing-standard',
    layout: 'relative',
    borders: 'rounded-xs',
    overflow: 'overflow-hidden',
    ripple: ['ripple-wrapper:inset-0', 'ripple-wrapper:rounded-xs'],
  },
  {
    variants: {
      variant: {
        elevated: {
          background: 'bg-surface-container-low is-disabled:bg-surface/38',
          typography: 'text-on-surface',
          effects: 'elevation-1',
        },
        filled: {
          background:
            'bg-surface-container-highest is-disabled:bg-surface-variant/38',
          typography: 'text-on-surface',
        },
        outlined: {
          background: 'bg-surface',
          typography: 'text-on-surface',
          borders:
            'border border-outline-variant is-disabled:border-outline/12',
        },
      },
      isInteractable: {
        true: {
          states: [
            'is-hovered:state-hover',
            'in-focus:state-focus',
            'is-pressed:state-press',
            'is-disabled:state-transparent',
            'is-disabled:pointer-events-none',
          ],
        },
        false: {},
      },
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
      variant: 'elevated',
      isInteractable: false,
    },
    compoundVariants: [
      {
        variant: 'elevated',
        isInteractable: true,
        className: {
          effects: [
            'is-hovered:elevation-2',
            'in-focus:elevation-1',
            'is-pressed:elevation-1',
          ],
        },
      },
      {
        variant: 'filled',
        isInteractable: true,
        className: {
          effects: [
            'is-hovered:elevation-1',
            'in-focus:elevation-0',
            'is-pressed:elevation-0',
          ],
        },
      },
      {
        variant: 'outlined',
        isInteractable: true,
        className: {
          borders: [
            'in-focus:border-on-surface',
            'is-pressed:border-outline-variant',
          ],
          effects: [
            'is-hovered:elevation-1',
            'in-focus:elevation-0',
            'is-pressed:elevation-0',
          ],
        },
      },
      {
        isInteractable: true,
        color: 'standard',
        className: {
          states: 'state-on-surface',
          ripple: 'ripple:bg-on-surface',
        },
      },
      {
        isInteractable: true,
        color: 'primary',
        className: {
          states: 'state-primary',
          ripple: 'ripple:bg-primary',
        },
      },
      {
        isInteractable: true,
        color: 'secondary',
        className: {
          states: 'state-secondary',
          ripple: 'ripple:bg-secondary',
        },
      },
      {
        isInteractable: true,
        color: 'info',
        className: {
          states: 'state-info',
          ripple: 'ripple:bg-info',
        },
      },
      {
        isInteractable: true,
        color: 'success',
        className: {
          states: 'state-success',
          ripple: 'ripple:bg-success',
        },
      },
      {
        isInteractable: true,
        color: 'caution',
        className: {
          states: 'state-caution',
          ripple: 'ripple:bg-caution',
        },
      },
      {
        isInteractable: true,
        color: 'critical',
        className: {
          states: 'state-critical',
          ripple: 'ripple:bg-critical',
        },
      },
    ],
  },
);

export const cardVariants = Object.assign(variants, {});
