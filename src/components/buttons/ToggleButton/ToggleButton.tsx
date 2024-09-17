'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import React from 'react';
import { useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { Button, ButtonProps } from '../Button';
import { ToggleButtonProps } from './ToggleButton.types';

export const ToggleButton = React.forwardRef<
  HTMLButtonElement,
  ToggleButtonProps
>(
  (
    {
      selectedVariant = 'filled',
      unselectedVariant = 'outlined',
      color,
      size,
      leftIcon: icon,
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
    const state = useToggleState(props);
    const { buttonProps } = useToggleButton(
      {
        elementType: asChild ? (children as React.ElementType) : 'button',
        isDisabled: isDisabled || disabled,
        ...props,
      },
      state,
      ref,
    );

    return (
      <Button
        disabled={disabled}
        isDisabled={isDisabled}
        {...(buttonProps as ButtonProps)}
        variant={state.isSelected ? selectedVariant : unselectedVariant}
        className={className}
        color={color}
        size={size}
        leftIcon={icon}
      >
        {children}
      </Button>
    );
  },
);
ToggleButton.displayName = '@bruhabruh/ui/ToggleButton';
