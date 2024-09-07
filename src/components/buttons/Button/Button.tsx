'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { IconSlot } from '../../utilities';
import { ButtonProps } from './Button.types';
import {
  buttonContainerVariants,
  buttonIconVariants,
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
            isDisabled: isDisabled || disabled,
          }),
          className,
        )}
      >
        {icon && (
          <IconSlot className={buttonIconVariants({ color, variant, size })}>
            {icon}
          </IconSlot>
        )}
        {children && (
          <span className={buttonLabelVariants({ color, variant, size })}>
            {children}
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = '@bruhabruh/ui/Button';
