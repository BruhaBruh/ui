import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn, unwrapChildren, withProvider } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { mergeProps, useButton } from 'react-aria';
import { ExtendedFabContextProvider, useExtendedFabContext } from './context';
import { ExtendedFabProps } from './extended-fab.types';
import { extendedFabVariants } from './extended-fab.variants';
import { InternalExtendedFabIcon, InternalExtendedFabLabel } from './internal';

const ExtendedFabImpl: React.FC<ExtendedFabProps> = ({
  color,
  lowered,
  asFab,
  className,
  asChild,
  children,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);
  const [{ icon }] = useExtendedFabContext();

  const { interactionsProps, rippleProps } =
    useInteractionsWithRipple<'button'>(props);

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
      {...mergeProps(interactionsProps, rippleProps, buttonProps)}
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
};

export const ExtendedFab = withProvider(
  ExtendedFabContextProvider,
  ExtendedFabImpl,
);
