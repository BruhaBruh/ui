import { cva } from 'class-variance-authority';

export const linearProgressVariants = cva(
  [
    'group/linear-progress rounded-full',
    'relative string:rounded-full',
    'overflow-hidden',
    'h-1',
    'data-[indeterminate=false]:inline-flex',
    'data-[indeterminate=false]:items-stretch',
    'data-[indeterminate=false]:justify-between',
    'gap-2xs',
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

export const linearProgressIndicatorVariants = cva(
  [
    'rounded-full',
    'group-data-[indeterminate=false]/linear-progress:w-[var(--progress-value)]',
    'group-data-[indeterminate=true]/linear-progress:w-3/4',
    'group-data-[indeterminate=true]/linear-progress:absolute',
    'group-data-[indeterminate=true]/linear-progress:inset-y-0',
    'group-data-[indeterminate=true]/linear-progress:string:w-[200vw]',
    'group-data-[indeterminate=true]/linear-progress:string:rounded-full',
    'group-data-[indeterminate=true]/linear-progress:string:bg-secondary-container',
    'group-data-[indeterminate=true]/linear-progress:string:absolute',
    'group-data-[indeterminate=true]/linear-progress:string:inset-y-0',
    'group-data-[indeterminate=true]/linear-progress:after:left-full',
    'group-data-[indeterminate=true]/linear-progress:after:ml-2xs',
    'group-data-[indeterminate=true]/linear-progress:before:right-full',
    'group-data-[indeterminate=true]/linear-progress:before:mr-2xs',
    'group-data-[indeterminate=true]/linear-progress:animate-[linear-progress_2s_linear_infinite]',
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

export const linearProgressIndicatorEndVariants = cva(
  ['rounded-full', 'absolute', 'aspect-square', 'inset-y-0 right-0'],
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
  'bg-secondary-container',
  'group-data-[indeterminate=false]/linear-progress:flex-1',
  'group-data-[indeterminate=false]/linear-progress:mr-xs',
  'group-data-[indeterminate=false]/linear-progress:w-[var(--progress-value)]',
  'group-data-[indeterminate=false]/linear-progress:w-full',
]);
