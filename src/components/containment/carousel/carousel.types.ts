import type { Props } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import type { carouselVariants } from './carousel.variants';

export type CarouselProps = Props<'section'> &
  VariantProps<typeof carouselVariants> & {
    onApiInit?: (api?: EmblaCarouselType) => void;
    options?: EmblaOptionsType;
    after?: React.ReactNode;
  };
