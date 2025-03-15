import { useMergedRefs } from '@/hooks';
import type { PropsWithAsChild } from '@/types';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { carouselVariants } from '../carousel.variants';

export const CarouselSlideContent = React.forwardRef<
  HTMLElement,
  PropsWithAsChild<'section'>
>(({ asChild, className, children, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);

  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      {...props}
      ref={ref}
      className={cn(carouselVariants.slideContent(), className)}
    >
      {children}
    </Comp>
  );
});
CarouselSlideContent.displayName = 'CarouselSlideContent';
