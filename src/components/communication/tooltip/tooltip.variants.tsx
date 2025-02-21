import { cva } from '@/utility';

const variants = cva(
  {
    name: 'tooltip group/tooltip',
    overflow: 'overflow-hidden',
    layout: 'relative',
    box: 'h-full w-max max-w-full',
  },
  {
    variants: {
      position: {
        'top-left': {},
        top: {},
        'top-right': {},
        right: {},
        'bottom-right': {},
        bottom: {},
        'bottom-left': {},
        left: {},
      },
      variant: {
        plain: {
          background: 'bg-inverse-surface',
          flex: 'inline-flex items-center',
          spacing: 'px-xs py-2xs',
          borders: 'rounded-3xs',
          other: 'select-none',
        },
        rich: {
          background: 'bg-surface-container',
          flex: 'inline-flex flex-col',
          spacing: 'px-md pb-xs pt-sm',
          effects: 'elevation-2',
          borders: 'rounded-sm',
        },
      },
    },
    defaultVariants: {
      variant: 'plain',
      position: 'top',
    },
  },
);

const wrapperVariants = cva(
  {
    name: 'tooltip--wrapper',
    layout: 'fixed z-20 h-max',
  },
  {
    variants: {
      position: {
        'top-left': {
          layout: ['-translate-x-full', '-translate-y-full'],
        },
        top: {
          layout: ['-translate-x-1/2', '-translate-y-full'],
        },
        'top-right': {
          layout: ['-translate-y-full'],
        },
        right: {
          layout: ['-translate-y-1/2'],
        },
        'bottom-right': {},
        bottom: {
          layout: ['-translate-x-1/2'],
        },
        'bottom-left': {
          layout: ['-translate-x-full'],
        },
        left: {
          layout: ['-translate-x-full', '-translate-y-1/2'],
        },
      },
      variant: {
        plain: {
          box: 'max-w-48',
          spacing: 'p-2xs',
        },
        rich: {
          box: 'max-w-80',
          spacing: 'p-xs',
        },
      },
    },
    defaultVariants: {
      position: 'top',
      variant: 'plain',
    },
  },
);

const subheadVariants = cva({
  name: 'tooltip--subhead',
  typography: 'text-balance typography-title-small text-on-surface-variant',
  spacing: 'mb-2xs',
});

const textVariants = cva(
  {
    name: 'tooltip--text',
  },
  {
    variants: {
      variant: {
        plain: {
          typography: 'typography-body-small text-inverse-on-surface',
        },
        rich: {
          typography: 'typography-body-medium text-on-surface-variant',
        },
      },
    },
    defaultVariants: {
      variant: 'plain',
    },
  },
);

const actionsVariants = cva({
  name: 'tooltip--actions',
  box: 'items-centeer inline-flex gap-xs',
  spacing: 'mt-sm',
});

export const tooltipVariants = Object.assign(variants, {
  wrapper: wrapperVariants,
  text: textVariants,
  subhead: subheadVariants,
  actions: actionsVariants,
});
