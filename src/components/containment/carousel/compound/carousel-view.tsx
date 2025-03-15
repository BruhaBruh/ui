import { useMergedRefs } from '@/hooks';
import type { PropsWithAsChild } from '@/types';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { carouselVariants } from '../carousel.variants';
import { useCarouselContext } from '../context';

export type CarouselViewProps = PropsWithAsChild<'section'> & {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const CarouselView = React.forwardRef<HTMLElement, CarouselViewProps>(
  ({ left, right, className, asChild, children, ...props }, forwardedRef) => {
    const [{ emblaRef }] = useCarouselContext();
    const ref = useMergedRefs(forwardedRef, emblaRef);

    const Comp = asChild ? Slot : 'section';

    return (
      <>
        {left}
        <Comp
          {...props}
          ref={ref}
          className={cn(carouselVariants.view(), className)}
        >
          <div className={cn(carouselVariants.viewContainer())}>
            {children}
            {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <div
                key={index}
                className={cn(carouselVariants.slide(), 'basis-1/4')}
              >
                <div
                  className={cn(
                    carouselVariants.slideContent(),
                    'flex h-96 items-center justify-center rounded-lg border typography-display-large border-outline',
                  )}
                >
                  {index + 1}
                </div>
              </div>
            ))} */}
          </div>
        </Comp>
        {right}
      </>
    );
  },
);
CarouselView.displayName = 'CarouselView';
