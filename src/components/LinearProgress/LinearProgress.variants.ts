import { cva } from 'class-variance-authority';

export const linearProgressVariants = cva(
  [
    'group rounded-full',
    'string:rounded-full relative',
    'overflow-hidden',
    'h-1',
    'data-[indeterminate=false]:inline-flex',
    'data-[indeterminate=false]:items-stretch',
    'data-[indeterminate=false]:justify-between',
    'data-[indeterminate=false]:gap-2xs',
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

export const linearProgressIndeterminateVariants = cva([
  'absolute right-0 top-0',
  'h-full w-[200%]',
  'gap-2xs inline-flex items-stretch justify-between',
  'group-data-[ease-in-out=true]:animate-[linear-progress_1s_ease-in-out_infinite]',
  'group-data-[ease-in-out=false]:animate-[linear-progress_1s_linear_infinite]',
]);

export const linearProgressIndicatorVariants = cva(
  [
    'rounded-full',
    'group-data-[indeterminate=true]:flex-1',
    'group-data-[indeterminate=false]:w-[var(--progress-value)]',
  ],
  {
    variants: {
      color: {
        current: ['bg-current'],
        primary: ['bg-primary'],
        secondary: ['bg-secondary'],
        info: ['bg-info'],
        success: ['bg-success'],
        caution: ['bg-caution'],
        critical: ['bg-critical'],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

export const linearProgressTrackVariants = cva([
  'rounded-full',
  'flex-1',
  'bg-secondary-container',
]);
