import { cva } from '@/utility';

const variants = cva(
  {
    name: 'field group/field',
    layout: 'relative',
    box: 'min-h-14 w-full rounded-md',
    flex: 'inline-flex items-center justify-between',
    transitions: 'transition easing-standard duration-medium-1',
    borders: 'border-2 outline-none',
    overflow: 'overflow-hidden',
    background: ['bg-surface-container-highest', 'is-disabled:bg-on-surface/8'],
    typography: 'whitespace-nowrap text-on-surface',
    spacing: 'px-md',
    states: [
      'state-on-surface',
      'is-disabled:state-transparent',
      'is-disabled:pointer-events-none',
      'is-hovered:state-hover',
      'in-focus-visible-within:state-focus',
    ],
  },
  {
    variants: {
      isInvalid: {
        true: {
          borders: 'border-critical',
        },
        false: {
          borders: 'border-transparent',
        },
      },
      isDisabled: {
        true: {},
        false: {},
      },
    },
    defaultVariants: {
      isInvalid: false,
      isDisabled: false,
    },
  },
);

const wrapperVariants = cva({
  name: 'field--wrapper',
  box: 'inline-grid gap-2xs',
});

const contentVariants = cva({
  name: 'field--content',
  layout: 'relative',
  box: 'min-h-12',
  flex: 'inline-flex flex-1 flex-col justify-center',
  transitions: [
    'transition-[grid-template-rows,color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]',
    'easing-standard duration-medium-1',
  ],
  overflow: 'overflow-hidden',
  typography: 'whitespace-nowrap typography-body-large',
});

const labelVariants = cva(
  {
    name: 'field--label',
    typography: [
      'text-ellipsis whitespace-nowrap typography-label-medium',
      'group-is-disabled/field:text-on-surface/38',
    ],
    transitions: 'transition easing-standard duration-medium-1',
    overflow: 'overflow-hidden',
    other: 'select-none',
  },
  {
    variants: {
      isInvalid: {
        true: {
          typography: 'text-critical',
        },
        false: {
          typography: 'text-on-surface-variant',
        },
      },
    },
    defaultVariants: {
      isInvalid: false,
    },
  },
);

const descriptionVariants = cva(
  {
    name: 'field--description',
    spacing: 'px-md',
    typography: 'typography-body-small',
    transitions: 'transition easing-standard duration-medium-1',
    flex: 'inline-flex items-center justify-between gap-md',
  },
  {
    variants: {
      isErrorMessage: {
        true: {
          typography: 'text-critical',
        },
        false: {
          typography: 'text-on-surface-variant',
        },
      },
    },
    defaultVariants: {
      isErrorMessage: false,
    },
  },
);

const iconVariants = cva(
  {
    name: 'field--icon',
    typography: [
      'text-on-surface-variant',
      'group-is-disabled/field:text-on-surface/38',
    ],
    layout: 'relative inline-block',
    box: 'size-6',
    overflow: 'overflow-hidden empty:hidden',
    other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
  },
  {
    variants: {
      position: {
        left: {
          box: 'mr-sm',
        },
        right: {
          box: 'ml-sm',
        },
        none: {},
      },
    },
    defaultVariants: {
      position: 'none',
    },
  },
);

export const fieldVariants = Object.assign(variants, {
  wrapper: wrapperVariants,
  content: contentVariants,
  label: labelVariants,
  description: descriptionVariants,
  icon: iconVariants,
});
