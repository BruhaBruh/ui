'use client';

import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn, unwrapChildren } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { mergeProps, useButton, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { IconButtonProps } from './icon-button.types';
import { iconButtonVariants } from './icon-button.variants';
import { InternalIconButtonIcon } from './internal';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant,
      color,
      isToggleable,
      isSelected,
      className,
      asChild,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const { buttonProps } = useButton(props, ref);

    const state = useToggleState(props);
    const { buttonProps: toggleButtonProps } = useToggleButton(
      props,
      state,
      ref,
    );

    const { interactionsProps, rippleProps } =
      useInteractionsWithRipple<'button'>({
        ...(isToggleable ? buttonProps : toggleButtonProps),
        isDisabled: props.isDisabled,
      });

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        type="button"
        {...mergeProps(props, interactionsProps, rippleProps)}
        ref={ref}
        className={cn(
          iconButtonVariants({
            variant,
            color,
            isToggleable,
            isSelected,
          }),
          className,
        )}
        data-toggleable={isToggleable ?? false}
        data-selected={(isToggleable && isSelected) ?? false}
      >
        {unwrapChildren(
          children,
          (child) => (
            <InternalIconButtonIcon>{child}</InternalIconButtonIcon>
          ),
          !asChild,
        )}
      </Comp>
    );
  },
);
IconButton.displayName = 'IconButton';
