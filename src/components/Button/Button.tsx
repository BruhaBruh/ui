'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { childrenUnwrapper, cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { ButtonProps } from './Button.types';
import { buttonLabelVariants, buttonVariants } from './Button.variants';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      color,
      leftIcon,
      rightIcon,
      disabled,
      isDisabled,
      className,
      asChild,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const { buttonProps } = useButton(
      {
        elementType: asChild ? (children as React.ElementType) : 'button',
        isDisabled: isDisabled || disabled,
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
          'button',
          buttonVariants({
            color,
            variant,
          }),
          className,
        )}
        data-disabled={isDisabled || disabled || 'false'}
      >
        {leftIcon}
        <Slottable>
          {childrenUnwrapper(children, (child) => (
            <span
              className={cn('button--label', buttonLabelVariants({ variant }))}
            >
              {child}
            </span>
          ))}
        </Slottable>
        {rightIcon}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
