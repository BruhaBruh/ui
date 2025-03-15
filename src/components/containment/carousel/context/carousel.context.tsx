import type { ContextState } from '@/types';
import type { EmblaCarouselType } from 'embla-carousel';
import type { EmblaViewportRefType } from 'embla-carousel-react';
import React from 'react';

export type CarouselContextState = ContextState<{
  emblaApi?: EmblaCarouselType;
  emblaRef?: EmblaViewportRefType;
}>;

const CarouselContext = React.createContext<CarouselContextState | null>(null);

export const useCarouselContext = () => {
  const value = React.useContext(CarouselContext);
  if (!value)
    throw new Error(
      'This component must be used within a <Carousel> component',
    );
  return value;
};

export const CarouselContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = React.useState<CarouselContextState[0]>({});

  return (
    <CarouselContext.Provider value={state}>
      {children}
    </CarouselContext.Provider>
  );
};
