import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn, mergeProps, unwrapChildren, withProvider } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { ExtendedFabContextProvider, useExtendedFabContext } from './context';
import { ExtendedFabProps } from './extended-fab.types';
import { extendedFabVariants } from './extended-fab.variants';
import { InternalExtendedFabIcon, InternalExtendedFabLabel } from './internal';

const ExtendedFabImpl = React.forwardRef<HTMLButtonElement, ExtendedFabProps>(
  (
    { color, lowered, asFab, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ icon }] = useExtendedFabContext();

    const { buttonProps } = useButton(props, ref);

    const { interactionsProps, rippleProps } =
      useInteractionsWithRipple<'button'>(buttonProps);

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        type="button"
        {...mergeProps(props, interactionsProps, rippleProps)}
        ref={ref}
        className={cn(
          extendedFabVariants({
            color,
            lowered,
            asFab,
          }),
          className,
        )}
        data-lowered={lowered ?? false}
        data-as-fab={asFab ?? false}
      >
        <InternalExtendedFabIcon asFab={asFab ?? false}>
          {icon}
        </InternalExtendedFabIcon>
        <Slottable>
          {unwrapChildren(
            children,
            (child) => (
              <InternalExtendedFabLabel asFab={asFab ?? false}>
                {child}
              </InternalExtendedFabLabel>
            ),
            !asChild,
          )}
        </Slottable>
      </Comp>
    );
  },
);
ExtendedFabImpl.displayName = 'ExtendedFab';

export const ExtendedFab = withProvider(
  ExtendedFabContextProvider,
  ExtendedFabImpl,
);
