'use client';

import { useMergedRefs } from '@/hooks';
import { childrenUnwrapper, cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { ContainerProps } from './Container.types';
import {
  containerVariants,
  containerWrapperVariants,
} from './Container.variants';

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (
    { color, fluid, containerProps, asChild, className, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const Comp = asChild ? Slot : 'section';

    return (
      <Comp
        {...props}
        ref={ref}
        data-fluid={fluid}
        className={cn(containerWrapperVariants({ color }), className)}
      >
        <Slottable>
          {childrenUnwrapper(children, (child) => (
            <section
              {...containerProps}
              className={cn(containerVariants(), containerProps?.className)}
            >
              {child}
            </section>
          ))}
        </Slottable>
      </Comp>
    );
  },
);
Container.displayName = 'Container';
