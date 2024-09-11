'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { ButtonProps } from './Button.types';
import {
  buttonContainerVariants,
  buttonLabelVariants,
} from './Button.variants';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      color,
      size,
      icon,
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
          buttonContainerVariants({
            color,
            variant,
            size,
          }),
          className,
        )}
        data-disabled={isDisabled || disabled}
      >
        {icon}
        <Slottable>
          {React.isValidElement(children) ? (
            React.cloneElement(
              children,
              children.props,
              <span className={cn(buttonLabelVariants({ variant, size }))}>
                {children.props.children}
              </span>,
            )
          ) : (
            <span className={cn(buttonLabelVariants({ variant, size }))}>
              {children}
            </span>
          )}
        </Slottable>
      </Comp>
    );
  },
);
Button.displayName = '@bruhabruh/ui/Button';
