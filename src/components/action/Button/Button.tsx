'use client';

import { useInteractionsWithRipple } from '@/hooks';
import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn, withProvider } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { mergeProps, useButton } from 'react-aria';
import { ButtonProps } from './Button.types';
import { buttonLabelVariants, buttonVariants } from './Button.variants';
import { ButtonProvider, useButtonContext } from './ButtonContext';

const _Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, color, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const { left, right } = useButtonContext();

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
        <AnimatePresence mode="wait">{left}</AnimatePresence>
        <span className={cn('button--label', buttonLabelVariants({ variant }))}>
          {children}
        </span>
        <AnimatePresence mode="wait">{right}</AnimatePresence>
      </Comp>
    );
  },
);
_Button.displayName = 'Button';

export const Button = withProvider(ButtonProvider, _Button);
