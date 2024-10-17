'use client';

import { useMergedRefs } from '@/hooks';
import { cn, withProvider } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { PageContainerProps } from './PageContainer.types';
import { pageContainerVariants } from './PageContainer.variants';
import {
  PageContainerProvider,
  usePageContainerIsZoomed,
} from './PageContainerContext';

const _PageContainer = React.forwardRef<HTMLDivElement, PageContainerProps>(
  ({ asChild, className, children, ...props }, forwardedRef) => {
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
  },
);
_PageContainer.displayName = 'PageContainer';

export const PageContainer = withProvider(
  PageContainerProvider,
  _PageContainer,
);
