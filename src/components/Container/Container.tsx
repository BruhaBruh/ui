'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
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
          {React.isValidElement(children) ? (
            React.cloneElement(
              children,
              children.props,
              <section
                {...containerProps}
                {...children.props}
                className={cn(containerVariants(), containerProps?.className)}
              >
                {children.props.children}
              </section>,
            )
          ) : (
            <section
              {...containerProps}
              className={cn(containerVariants(), containerProps?.className)}
            >
              {children}
            </section>
          )}
        </Slottable>
      </Comp>
    );
  },
);
Container.displayName = 'Container';
