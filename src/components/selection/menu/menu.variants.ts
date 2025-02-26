import { cva } from '@/utility';

const variants = cva({
  name: 'menu group/menu',
  layout: 'relative',
  background: 'bg-surface-container',
  effects: 'elevation-2',
  borders: 'rounded-3xs',
  spacing: 'py-xs',
  overflow: 'overflow-y-auto overflow-x-hidden',
  box: 'inline-grid min-w-28 max-w-72',
});

const listVariants = cva(
  {
    name: 'menu--list',
    layout: 'relative',
    box: 'inline-grid w-full',
  },
  {
    variants: {
      withScroll: {
        true: {
          overflow: 'overflow-y-auto overflow-x-hidden',
        },
        false: {
          overflow: 'overflow-hidden',
        },
      },
    },
    defaultVariants: {
      withScroll: false,
    },
  },
);

const itemVariants = cva(
  {
    name: 'menu--item group/menu--item',
    layout: 'relative',
    borders: 'outline-none border-transparent',
    overflow: 'overflow-hidden',
    flex: 'inline-flex items-center gap-sm',
    typography: [
      'typography-label-large',
      'is-disabled:text-on-surface',
      'is-disabled:text-opacity-38',
    ],
    box: 'h-12',
    spacing: 'px-sm',
    transitions: 'transition easing-standard duration-medium-1',
    states: [
      'is-disabled:state-transparent',
      'is-disabled:pointer-events-none',
      'is-hovered:hover-state',
      'in-focus-visible:focus-state',
      'is-pressed:press-state',
    ],
    ripple: 'ripple-wrapper:inset-0',
    other: 'cursor-pointer',
  },
  {
    variants: {
      isSelected: {
        true: {
          background: [
            'bg-primary-container',
            'is-disabled:bg-on-surface',
            'is-disabled:bg-opacity-8',
          ],
          typography: 'text-on-primary-container',
          states: 'state-on-primary-container',
          ripple: 'ripple:bg-on-primary-container',
        },
        false: {
          background: 'bg-transparent',
          typography: 'text-on-surface',
          states: 'state-on-surface',
          ripple: 'ripple:bg-primary',
        },
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  },
);

const labelVariants = cva({
  name: 'menu--label',
  flex: 'inline-flex flex-1 items-center',
  box: 'min-w-16',
});

const iconVariants = cva({
  name: 'menu--icon',
  typography: [
    'text-on-surface-variant',
    'group-data-[is-selected=true]/menu--item:text-on-primary-container',
    'group-is-disabled/menu--item:text-on-surface',
    'group-is-disabled/menu--item:text-opacity-38',
  ],
  layout: 'relative inline-block',
  box: 'size-6',
  overflow: 'overflow-hidden empty:hidden',
  other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
});

const dividerVariants = cva({
  name: 'menu--divider',
  spacing: 'my-xs first:mt-0 last:mb-0',
});

export const menuVariants = Object.assign(variants, {
  list: listVariants,
  item: itemVariants,
  label: labelVariants,
  icon: iconVariants,
  divider: dividerVariants,
});
