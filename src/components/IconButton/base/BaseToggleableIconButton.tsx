'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { PropsWithAsChild } from '@/types';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaToggleButtonProps, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { iconButtonContainerVariants } from '../IconButton.variants';

export type BaseToggleableIconButtonProps = AriaToggleButtonProps &
  PropsWithAsChild<'button', AriaToggleButtonProps> &
  VariantProps<typeof iconButtonContainerVariants> & {
    toggleable: true;
  };

export const BaseToggleableIconButton = React.forwardRef<
  HTMLButtonElement,
  BaseToggleableIconButtonProps
>(
  (
    {
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

    const state = useToggleState({
      elementType: asChild ? (children as React.ElementType) : 'button',
      isDisabled: isDisabled || disabled,
      isSelected,
      ...props,
    });

    const { buttonProps } = useToggleButton(
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
        {...buttonProps}
        ref={ref}
        className={cn(
          'icon-button',
          iconButtonContainerVariants({
            color,
            variant,
          }),
          className,
        )}
        data-toggleable
        data-selected={isSelected || 'false'}
        data-disabled={isDisabled || disabled || 'false'}
      >
        {children}
      </Comp>
    );
  },
);
BaseToggleableIconButton.displayName = 'IconButton';
