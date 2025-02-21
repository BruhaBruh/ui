import { cva } from '@/utility';

const variants = cva({
  name: 'dialog group/dialog',
  box: 'min-w-72 max-w-72 sm:max-w-[calc(var(--spacing-96)+var(--spacing-44))]',
  flex: 'inline-flex flex-col',
  spacing: 'p-lg',
  borders: 'rounded-2xl',
  background: 'bg-surface-container-high',
  typography: 'text-on-surface',
  effects: 'elevation-3',
  other: 'outline-none',
});

const iconVariants = cva({
  name: 'dialog--icon',
  typography: 'text-secondary',
  box: 'size-6',
  layout: 'relative inline-block',
  overflow: 'overflow-hidden empty:hidden',
  other: '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
  spacing: 'mx-auto mb-md',
});

const subheadVariants = cva({
  name: 'dialog--subhead',
  typography: 'text-center typography-headline-small text-on-surface',
  spacing: 'mb-md',
});

const dividerVariants = cva(
  {
    name: 'dialog--divider',
  },
  {
    variants: {
      spacing: {
        top: {
          spacing: 'mt-md',
        },
        bottom: {
          spacing: 'mb-md',
        },
        both: {
          spacing: 'my-md',
        },
        none: {},
      },
    },
    defaultVariants: {
      spacing: 'none',
    },
  },
);

const textVariants = cva({
  name: 'dialog--text',
  typography: 'typography-body-medium text-on-surface-variant',
});

const actionsVariants = cva({
  name: 'dialog--actions',
  flex: 'inline-flex items-center justify-end gap-sm',
  spacing: 'mt-lg',
});

export const dialogVariants = Object.assign(variants, {
  icon: iconVariants,
  subhead: subheadVariants,
  divider: dividerVariants,
  text: textVariants,
  actions: actionsVariants,
});
