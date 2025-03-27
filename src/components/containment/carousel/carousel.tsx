import { useMergedRefs } from '@/hooks';
import { cn, withProvider } from '@/utility';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import type { CarouselProps } from './carousel.types';
import { carouselVariants } from './carousel.variants';
import { CarouselContextProvider, useCarouselContext } from './context';

const CarouselImpl = React.forwardRef<HTMLElement, CarouselProps>(
  (
    { after, onApiInit, options, className, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [emblaRef, emblaApi] = useEmblaCarousel(options, []);
    const [, setState] = useCarouselContext();

    React.useEffect(() => {
      onApiInit?.(emblaApi);
    }, [onApiInit, emblaApi]);

    React.useEffect(() => {
      setState((prev) => ({
        ...prev,
        emblaApi,
        emblaRef,
      }));
    }, [emblaApi, emblaRef, setState]);

    return (
      <section
        {...props}
        ref={ref}
        className={cn(carouselVariants(), className)}
      >
        <section className={cn(carouselVariants.container())}>
          {children}
        </section>
        {after}
      </section>
    );
  },
);
CarouselImpl.displayName = 'Carousel';

export const Carousel = withProvider(CarouselContextProvider, CarouselImpl);
