import { cva } from '@/utility';

const variants = cva({
  name: 'breadcrumbs group/breadcrumbs',
  flex: 'flex items-baseline',
  spacing: 'gap-2xs',
});

const itemVariants = cva(
  {
    name: 'breadcrumbs--item',
    typography: 'text-on-surface typography-label-large',
    transitions: 'transition easing-standard duration-medium-1',
    other: 'select-none',
  },
  {
    variants: {
      isActive: {
        true: {
          typography: 'text-on-surface',
        },
        false: {
          typography:
            'text-on-surface-variant hover:text-primary cursor-pointer',
        },
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
);

const arrowVariants = cva({
  name: 'breadcrumbs--arrow',
  box: 'size-4',
  transforms: 'translate-y-0.75',
  typography: 'text-on-surface-variant',
});

export const breadcrumbsVariants = Object.assign(variants, {
  item: itemVariants,
  arrow: arrowVariants,
});
