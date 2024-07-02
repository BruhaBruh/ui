import { cva } from 'class-variance-authority';

export const fieldWrapperVariants = cva(['inline-grid', 'text-sm', 'gap-0.5']);

export const fieldVariants = cva(
  [
    'bg-secondary text-on-secondary',
    'inline-flex flex-col items-between justify-center',
    'min-h-14 flex-1',
    'text-base',
    'rounded-xl',
    'px-2 py-1.5',
    '[&>*:not(svg)]:px-[0.3125rem]',
    '[&>svg]:min-w-5',
    '[&>svg]:h-5',
    'font-medium whitespace-nowrap',
    'transition-colors',
    'focus-within:outline-none focus-within:ring-[3px]',
  ],
  {
    variants: {
      error: {
        true: ['ring-[2px] ring-critical'],
        false: ['ring-info'],
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

export const fieldLabelVariants = cva([
  'text-sm',
  'text-placeholder',
  'font-semibold',
  'truncate',
  'select-none',
]);

export const fieldInputWrapperVariants = cva([
  'inline-flex items-center',
  'max-h-0',
  'transition-[max-height] duration-300',
  'overflow-x-hidden overflow-y-clip',
  '[&:has(input:not(:placeholder-shown))]:max-h-full [&:has(input:focus-visible)]:max-h-full [&:has(input:not([placeholder=""]))]:max-h-full',
  '[&:has(textarea:not(:placeholder-shown))]:max-h-full [&:has(textarea:focus-visible)]:max-h-full [&:has(textarea:not([placeholder=""]))]:max-h-full',
]);

export const fieldInputVariants = cva([
  'bg-transparent text-foreground',
  'placeholder:text-placeholder',
  'outline-none resize-none h-max',
]);

export const fieldDescriptionVariants = cva([
  'w-0 min-w-full',
  'text-secondary',
  'px-[0.8125rem]',
]);

export const fieldErrorVariants = cva([
  'w-0 min-w-full',
  'text-critical',
  'px-[0.8125rem]',
]);
