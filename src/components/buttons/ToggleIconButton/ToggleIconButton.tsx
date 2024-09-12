'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import React from 'react';
import { useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { ButtonProps } from '../Button';
import { IconButton } from '../IconButton';
import { ToggleIconButtonProps } from './ToggleIconButton.types';

export const ToggleIconButton = React.forwardRef<
  HTMLButtonElement,
  ToggleIconButtonProps
>(
  (
    {
      selectedVariant = 'filled',
      unselectedVariant = 'outlined',
      color,
      size,
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
      <IconButton
        disabled={disabled}
        isDisabled={isDisabled}
        {...(buttonProps as ButtonProps)}
        variant={state.isSelected ? selectedVariant : unselectedVariant}
        className={className}
        color={color}
        size={size}
      >
        {children}
      </IconButton>
    );
  },
);
ToggleIconButton.displayName = '@bruhabruh/ui/ToggleIconButton';