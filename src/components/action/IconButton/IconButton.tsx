'use client';

import { useInteractions, useMergedRefs, useRipple } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { mergeProps, useButton, useToggleButton } from 'react-aria';
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

    const { onStart, onEnd } = useRipple();

    const { interactionsProps } = useInteractions<'button'>({
      autoFocus: props.autoFocus,
      isDisabled: isDisabled || disabled,
    });

    const { buttonProps } = useButton(
      {
        elementType: asChild ? (children as React.ElementType) : 'button',
        isDisabled: isDisabled || disabled,
        ...props,
        onPressStart: (e) => {
          onStart(e);
          props.onPressStart?.(e);
        },
        onPressUp: (e) => {
          onEnd(e);
          props.onPressUp?.(e);
        },
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
        onPressStart: (e) => {
          onStart(e);
          props.onPressStart?.(e);
        },
        onPressUp: (e) => {
          onEnd(e);
          props.onPressUp?.(e);
        },
      },
      state,
      ref,
    );

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        type="button"
        {...mergeProps(
          toggleable ? toggleButtonProps : buttonProps,
          interactionsProps,
        )}
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
