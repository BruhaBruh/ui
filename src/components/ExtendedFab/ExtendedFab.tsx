'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { childrenUnwrapper, cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { ExtendedFabProps } from './ExtendedFab.types';
import {
  extendedFabContainerVariants,
  extendedFabLabelVariants,
} from './ExtendedFab.variants';

export const ExtendedFab = React.forwardRef<
  HTMLButtonElement,
  ExtendedFabProps
>(
  (
    { color, lowered, icon, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const { buttonProps } = useButton(
      {
        elementType: asChild ? (children as React.ElementType) : 'button',
        ...props,
      },
      ref,
    );

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        type="button"
        {...buttonProps}
        ref={ref}
        className={cn(
          'extended-fab',
          extendedFabContainerVariants({
            color,
          }),
          className,
        )}
        data-lowered={lowered || 'false'}
      >
        {icon}
        <Slottable>
          {childrenUnwrapper(children, (child) => (
            <span
              className={cn('extended-fab--label', extendedFabLabelVariants())}
            >
              {child}
            </span>
          ))}
        </Slottable>
      </Comp>
    );
  },
);
ExtendedFab.displayName = 'Fab';
