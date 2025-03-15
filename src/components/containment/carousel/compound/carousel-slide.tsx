import { useMergedRefs } from '@/hooks';
import type { PropsWithAsChild } from '@/types';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { carouselVariants } from '../carousel.variants';

export const CarouselSlide = React.forwardRef<
  HTMLElement,
  PropsWithAsChild<'article'>
>(({ asChild, className, children, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);

  const Comp = asChild ? Slot : 'article';

  return (
    <Comp
      {...props}
      ref={ref}
      className={cn(carouselVariants.slide(), className)}
    >
      {children}
    </Comp>
  );
});
CarouselSlide.displayName = 'CarouselSlide';
