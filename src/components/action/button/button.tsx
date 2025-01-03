'use client';

import { useInteractionsWithRipple } from '@/hooks';
import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn, withProvider } from '@/utility';
import { keyFromChildren } from '@/utility/key-from-children/key-from-children';
import { unwrapChildren } from '@/utility/unwrap-children/unwrap-children';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { mergeProps, useButton } from 'react-aria';
import { ButtonContextProvider, useButtonContext } from './button-context';
import { ButtonIcon } from './button-icon';
import { ButtonProps } from './button.types';
import { buttonLabelVariants, buttonVariants } from './button.variants';

const ButtonImpl: React.FC<ButtonProps> = ({
  variant,
  color,
  className,
  asChild,
  children,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);
  const { leftIcon, rightIcon } = useButtonContext();

  const { interactionsProps, rippleProps } = useInteractionsWithRipple({
    autoFocus: props.autoFocus,
    isDisabled: props.isDisabled,
  });

  const { buttonProps } = useButton(props, ref);

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      type="button"
      {...mergeProps(buttonProps, interactionsProps, rippleProps)}
      ref={ref}
      className={cn(
        'button',
        buttonVariants({
          color,
          variant,
        }),
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <ButtonIcon key={keyFromChildren(leftIcon)}>{leftIcon}</ButtonIcon>
      </AnimatePresence>
      <Slottable>
        {unwrapChildren(
          children,
          (child) => (
            <span
              className={cn('button--label', buttonLabelVariants({ variant }))}
            >
              {child}
            </span>
          ),
          !asChild,
        )}
      </Slottable>
      <AnimatePresence mode="wait">
        <ButtonIcon key={keyFromChildren(rightIcon)}>{rightIcon}</ButtonIcon>
      </AnimatePresence>
    </Comp>
  );
};

export const Button = withProvider(ButtonContextProvider, ButtonImpl);
