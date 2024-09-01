import { cva } from 'class-variance-authority';

export const fieldWrapperVariants = cva(['inline-grid', 'text-sm', 'gap-0.5']);

export const fieldVariants = cva(
  [
    'inline-grid grid-cols-[max-content_minmax(0,1fr)_max-content] items-center',
    'transition-[grid-template-rows] duration-300',
    'min-h-14 flex-1',
    'text-base',
    'rounded-xl',
    'px-sm py-2xs',
    '[&>[data-field-content]]:px-2xs',
    '[&_svg]:min-w-5',
    '[&_svg]:h-5',
    'font-medium whitespace-nowrap',
    'transition-colors',
    'focus-within:outline-none focus-within:ring-[3px] ring-brand',
    'border border-2',
  ],
  {
    variants: {
      isInvalid: {
        true: [],
        false: [],
      },
      isDisabled: {
        true: ['text-disabled'],
        false: ['text-foreground ring-brand'],
      },
    },
    defaultVariants: {
      isInvalid: false,
      isDisabled: false,
    },
    compoundVariants: [
      {
        isInvalid: true,
        isDisabled: true,
        className: 'border-critical',
      },
      {
        isInvalid: false,
        isDisabled: true,
        className: 'border-disabled',
      },
      {
        isInvalid: true,
        isDisabled: false,
        className: 'border-critical',
      },
      {
        isInvalid: false,
        isDisabled: false,
        className: 'border-secondary',
      },
    ],
  },
);

export const fieldContentVariants = cva([
  'inline-flex flex-col items-between justify-center',
  'flex-1 h-full',
]);

export const fieldLabelVariants = cva([
  'text-sm',
  'text-secondary',
  'font-semibold',
  'truncate',
  'select-none',
]);

export const fieldInputWrapperVariants = cva(
  [
    'inline-flex items-center',
    'transition-[max-height] duration-300',
    'overflow-x-hidden overflow-y-clip',
    '[&:has(input:not(:placeholder-shown))]:max-h-full [&:has(textarea:not(:placeholder-shown))]:max-h-full',
    '[&:has(textarea:focus-visible)]:max-h-full [&:has(input:focus-visible)]:max-h-full',
    '[&:has(textarea:not([placeholder=""]))]:max-h-full [&:has(input:not([placeholder=""]))]:max-h-full',
  ],
  {
    variants: {
      visible: {
        true: 'max-h-full',
        false: 'max-h-0',
      },
    },
    defaultVariants: {
      visible: false,
    },
  },
);

export const fieldInputVariants = cva([
  'bg-transparent text-on-secondary',
  'placeholder:text-placeholder',
  'outline-none resize-none h-max flex-1',
]);

export const fieldDescriptionVariants = cva([
  'w-0 min-w-full',
  'text-secondary',
  'px-md',
]);

export const fieldErrorVariants = cva([
  'w-0 min-w-full',
  'text-critical',
  'px-md',
]);
