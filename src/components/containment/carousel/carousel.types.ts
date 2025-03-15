import type { Props } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import type { carouselVariants } from './carousel.variants';

export type CarouselProps = Props<'section'> &
  VariantProps<typeof carouselVariants> & {
    apiRef?: React.Ref<EmblaCarouselType>;
    options?: EmblaOptionsType;
    after?: React.ReactNode;
  };
