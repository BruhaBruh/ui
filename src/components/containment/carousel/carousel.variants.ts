import { cva } from '@/utility';

const variants = cva({
  name: 'carousel group/carousel',
  box: 'grid gap-2xs',
});

const containerVariants = cva({
  name: 'carousel--container',
  flex: 'flex items-center justify-center',
  spacing: 'gap-2xs',
});

const arrowButtonVariants = cva({
  name: 'carousel--arrow-button',
  box: 'h-auto self-stretch',
});

const viewVariants = cva({
  name: 'carousel--view',
  flex: 'flex-1',
  overflow: 'overflow-hidden',
  spacing: 'p-3xs',
});

const viewContainerVariants = cva({
  name: 'carousel--view-container',
  flex: 'flex',
  spacing: '-ml-md',
  other: 'touch-pan-y touch-pinch-zoom',
});

const slideVariants = cva({
  name: 'carousel--slide',
  box: 'min-w-0',
  flex: 'shrink-0 grow-0',
  transforms: 'translate-x-0 translate-y-0',
  spacing: 'pl-md',
});

const slideContentVariants = cva({
  name: 'carousel--content',
  other: 'select-none',
});

const circleContainerVariants = cva({
  name: 'carousel--circle-container',
  flex: 'flex items-center justify-center',
  spacing: 'gap-3xs',
});

const circleVariants = cva(
  {
    name: 'carousel--circle',
    flex: 'flex items-center justify-center',
    spacing: 'size-6',
    transitions: 'transition easing-standard duration-medium-1',
    other: '[&>*]:size-4',
  },
  {
    variants: {
      isSelected: {
        true: {
          typography: 'text-outline',
        },
        false: {
          typography: 'text-outline-variant',
        },
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  },
);

export const carouselVariants = Object.assign(variants, {
  container: containerVariants,
  arrowButton: arrowButtonVariants,
  view: viewVariants,
  viewContainer: viewContainerVariants,
  slide: slideVariants,
  slideContent: slideContentVariants,
  circleContainer: circleContainerVariants,
  cirlce: circleVariants,
});
