'use client';

import { useInteractionsWithRipple } from '@/hooks';
import { useMergedRefs } from '@/hooks/use-merge-refs';
import { childrenUnwrapper, cn, withProvider } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { mergeProps, useButton } from 'react-aria';
import { Fab } from '../Fab';
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
    { color, lowered, asFab, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ icon }] = useExtendedFabContext();

    const { interactionsProps } = useInteractionsWithRipple<'button'>({
      autoFocus: props.autoFocus,
    });

    const { buttonProps } = useButton(
      {
        elementType: asChild ? (children as React.ElementType) : 'button',
        ...props,
      },
      ref,
    );

    const Comp = asChild ? Slot : 'button';

    if (asFab)
      return (
        <Fab
          lowered={lowered}
          className={className}
          asChild={asChild}
          color={color}
          {...props}
        >
          {childrenUnwrapper(children, () => icon)}
        </Fab>
      );

    return (
      <Comp
        type="button"
        {...mergeProps(buttonProps, interactionsProps)}
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
_ExtendedFab.displayName = 'ExtendedFab';

export const ExtendedFab = Object.assign(
  withProvider(ExtendedFabProvider, _ExtendedFab),
  {
    Icon: ExtendedFabIcon,
  },
);
