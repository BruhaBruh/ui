import { cva } from 'class-variance-authority';

export const circularProgressVariants = cva(
  [
    'group',
    'relative',
    'overflow-hidden',
    'size-12',
    'data-[indeterminate=true]:cursor-progress',
    'transition-[height,width_medium-1_emphasized-decelerate]',
  ],
  {
    variants: {
      color: {
        current: [],
        primary: [],
        secondary: [],
        info: [],
        success: [],
        caution: [],
        critical: [],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

export const circularProgressCircleVariants = cva([
  '-rotate-90',
  'absolute inset-0',
  'group-data-[indeterminate=true]:group-data-[ease-in-out=true]:animate-[circular-progress_1s_ease-in-out_infinite]',
  'group-data-[indeterminate=true]:group-data-[ease-in-out=false]:animate-[circular-progress_1s_linear_infinite]',
]);

export const circularProgressPathVariants = cva([
  'origin-center',
  'stroke-[0.25rem]',
  '[stroke-dasharray:2048]',
]);

export const circularProgressIndicatorVariants = cva(
  ['[stroke-dashoffset:calc(2048*(1-var(--progress-value)))]'],
  {
    variants: {
      color: {
        current: [],
        primary: ['text-primary'],
        secondary: ['text-secondary'],
        info: ['text-info'],
        success: ['text-success'],
        caution: ['text-caution'],
        critical: ['text-critical'],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

export const circularProgressTrackVariants = cva([
  'text-secondary-container rotate-[-20deg]',
  'group-data-[show-indicator=false]:[stroke-dashoffset:0]',
  'group-data-[show-indicator=true]:[stroke-dashoffset:calc(-2048*var(--progress-value)-228)]',
]);
