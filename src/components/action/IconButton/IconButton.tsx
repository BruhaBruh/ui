'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useButton, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { IconButtonProps } from './IconButton.types';
import { iconButtonVariants } from './IconButton.variants';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      toggleable,
      variant,
      color,
      disabled,
      isDisabled,
      isSelected,
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

    const state = useToggleState({
      elementType: asChild ? (children as React.ElementType) : 'button',
      isDisabled: isDisabled || disabled,
      isSelected,
      ...props,
    });

    const { buttonProps: toggleButtonProps } = useToggleButton(
      {
        elementType: asChild ? (children as React.ElementType) : 'button',
        isDisabled: isDisabled || disabled,
        isSelected,
        ...props,
      },
      state,
      ref,
    );

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        type="button"
        {...(toggleable ? toggleButtonProps : buttonProps)}
        ref={ref}
        className={cn(
          'icon-button',
          iconButtonVariants({
            color,
            variant,
          }),
          className,
        )}
        data-toggleable={toggleable || undefined}
        data-selected={(toggleable && isSelected) || false}
        data-disabled={isDisabled || disabled || false}
      >
        {children}
      </Comp>
    );
  },
);
IconButton.displayName = 'IconButton';
