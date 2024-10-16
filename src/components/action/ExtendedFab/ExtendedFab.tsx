'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { childrenUnwrapper, cn, withProvider } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { ExtendedFabProps } from './ExtendedFab.types';
import {
  extendedFabLabelVariants,
  extendedFabVariants,
} from './ExtendedFab.variants';
import {
  ExtendedFabProvider,
  useExtendedFabContext,
} from './ExtendedFabContext';
import { ExtendedFabIcon } from './ExtendedFabIcon';

const _ExtendedFab = React.forwardRef<HTMLButtonElement, ExtendedFabProps>(
  (
    { color, lowered, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ icon }] = useExtendedFabContext();

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
          extendedFabVariants({
            color,
          }),
          className,
        )}
        data-lowered={lowered || false}
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
_ExtendedFab.displayName = 'Fab';

export const ExtendedFab = Object.assign(
  withProvider(ExtendedFabProvider, _ExtendedFab),
  {
    Icon: ExtendedFabIcon,
  },
);
