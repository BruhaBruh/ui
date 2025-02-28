'use client';

import { useInteractionsWithRipple } from '@/hooks';
import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn, mergeProps, unwrapChildren, withProvider } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { ButtonProps } from './button.types';
import { buttonVariants } from './button.variants';
import { ButtonContextProvider, useButtonContext } from './context';
import { InternalButtonIcon } from './internal';

const ButtonImpl = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, color, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ leftIcon, rightIcon }] = useButtonContext();

    const { buttonProps } = useButton(props, ref);

    const { interactionsProps, rippleProps } =
      useInteractionsWithRipple<'button'>({
        ...buttonProps,
        isDisabled: props.isDisabled,
      });

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        type="button"
        {...mergeProps(props, interactionsProps, rippleProps)}
        ref={ref}
        className={cn(
          buttonVariants({
            color,
            variant,
          }),
          className,
        )}
      >
        <InternalButtonIcon className="button--icon-left">
          {leftIcon}
        </InternalButtonIcon>
        <Slottable>
          {unwrapChildren(
            children,
            (child) => (
              <span className={cn(buttonVariants.label({ variant }))}>
                {child}
              </span>
            ),
            !asChild,
          )}
        </Slottable>
        <InternalButtonIcon className="button--icon-right">
          {rightIcon}
        </InternalButtonIcon>
      </Comp>
    );
  },
);
ButtonImpl.displayName = 'Button';

export const Button = withProvider(ButtonContextProvider, ButtonImpl);
