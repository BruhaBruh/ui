'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { usePageContainerIsZoomed } from './PageContainer.context';
import { PageContainerProps } from './PageContainer.types';
import { pageContainerVariants } from './PageContainer.variants';

export const PageContainer = React.forwardRef<
  HTMLDivElement,
  PageContainerProps
>(({ asChild, className, children, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);
  const [isZoomed] = usePageContainerIsZoomed();

  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      {...props}
      ref={ref}
      data-is-zoomed={isZoomed}
      className={cn('page-container', pageContainerVariants(), className)}
    >
      {children}
    </Comp>
  );
});
PageContainer.displayName = 'PageContainer';
