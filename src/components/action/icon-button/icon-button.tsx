'use client';

import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn, keyFromChildren, unwrapChildren } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { mergeProps, useButton, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { IconButtonIcon } from './icon-button-icon';
import { IconButtonProps } from './icon-button.types';
import { iconButtonVariants } from './icon-button.variants';

export const IconButton: React.FC<IconButtonProps> = ({
  variant,
  color,
  isToggleable,
  isSelected,
  className,
  asChild,
  children,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);

  const { interactionsProps, rippleProps } = useInteractionsWithRipple({
    autoFocus: props.autoFocus,
    isDisabled: props.isDisabled,
  });

  const { buttonProps } = useButton(props, ref);

  const state = useToggleState(props);

  const { buttonProps: toggleButtonProps } = useToggleButton(props, state, ref);

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      type="button"
      {...mergeProps(
        isToggleable ? buttonProps : toggleButtonProps,
        interactionsProps,
        rippleProps,
      )}
      ref={ref}
      className={cn(
        'icon-button',
        iconButtonVariants({
          variant,
          color,
          isToggleable,
          isSelected,
        }),
        className,
      )}
      data-toggleable={isToggleable || 'false'}
      data-selected={(isToggleable && isSelected) || 'false'}
    >
      {unwrapChildren(
        children,
        (child) => (
          <AnimatePresence mode="wait">
            <IconButtonIcon key={keyFromChildren(child)}>
              {child}
            </IconButtonIcon>
          </AnimatePresence>
        ),
        !asChild,
      )}
    </Comp>
  );
};
