'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { FabProps } from './Fab.types';
import { fabVariants } from './Fab.variants';

const _Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  (
    { color, size, lowered, className, asChild, children, ...props },
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
          'fab',
          fabVariants({
            color,
            size,
          }),
          className,
        )}
        data-lowered={lowered || false}
      >
        {children}
      </Comp>
    );
  },
);
_Fab.displayName = 'Fab';

export const Fab = _Fab;
