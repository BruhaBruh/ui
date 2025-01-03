import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn, withProvider } from '@/utility';
import { keyFromChildren } from '@/utility/key-from-children/key-from-children';
import { unwrapChildren } from '@/utility/unwrap-children/unwrap-children';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { mergeProps, useButton } from 'react-aria';
import {
  ExtendedFabContextProvider,
  useExtendedFabContext,
} from './extended-fab-context/extended-fab.context';
import { ExtendedFabInternalIcon } from './extended-fab-internal-icon';
import { ExtendedFabLabel } from './extended-fab-label';
import { ExtendedFabProps } from './extended-fab.types';
import { extendedFabVariants } from './extended-fab.variants';

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
  const { icon } = useExtendedFabContext();

  const { interactionsProps, rippleProps } =
    useInteractionsWithRipple<'button'>({
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

  return (
    <Comp
      type="button"
      {...mergeProps(buttonProps, interactionsProps, rippleProps)}
      ref={ref}
      className={cn(
        'extended-fab',
        extendedFabVariants({
          color,
          lowered,
          asFab,
        }),
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <ExtendedFabInternalIcon asFab={asFab} key={keyFromChildren(icon)}>
          {icon}
        </ExtendedFabInternalIcon>
      </AnimatePresence>
      <Slottable>
        {unwrapChildren(
          children,
          (child) => (
            <AnimatePresence mode="wait">
              <ExtendedFabLabel asFab={asFab} key={`${asFab}`}>
                {child}
              </ExtendedFabLabel>
            </AnimatePresence>
          ),
          !asChild,
        )}

        {/* {unwrapChildren(
          children,
          (child) => (
            <AnimatePresence mode="wait">
              <ExtendedFabLabel key={keyFromChildren(child)}>
                {child}
              </ExtendedFabLabel>
            </AnimatePresence>
          ),
          !asChild,
        )} */}
      </Slottable>
    </Comp>
  );
};

export const ExtendedFab = withProvider(
  ExtendedFabContextProvider,
  ExtendedFabImpl,
);
