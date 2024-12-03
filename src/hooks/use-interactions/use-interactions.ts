'use client';

import { Props } from '@/types';
import React from 'react';
import {
  AriaFocusRingProps,
  HoverProps,
  LongPressProps,
  PressHookProps,
  mergeProps,
  useFocusRing,
  useHover,
  useLongPress,
  usePress,
} from 'react-aria';

export type UseInteractions<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown> = 'div',
> = typeof useInteractions<T>;

export const useInteractions = <
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown> = 'div',
>(
  props: Omit<AriaFocusRingProps, 'within'> &
    HoverProps &
    LongPressProps &
    PressHookProps,
) => {
  const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
  const {
    focusProps: focusVisibleWithinProps,
    isFocused: isFocusedWithin,
    isFocusVisible: isFocusVisibleWithin,
  } = useFocusRing({
    ...props,
    within: true,
  });
  const { hoverProps, isHovered } = useHover(props);
  const { pressProps, isPressed } = usePress(props);
  const { longPressProps } = useLongPress(props);

  return {
    interactionsProps: mergeProps(
      focusProps as Props<T>,
      focusVisibleWithinProps as Props<T>,
      hoverProps as Props<T>,
      longPressProps as Props<T>,
      pressProps as Props<T>,
      {
        'data-focused': isFocused,
        'data-focused-within': isFocusedWithin,
        'data-focused-visible': isFocusVisible,
        'data-focused-visible-within': isFocusVisibleWithin,
        'data-hovered': isHovered,
        'data-pressed': isPressed,
        'data-disabled': props.isDisabled,
      },
    ),
    isFocusVisible,
    isFocusWithinVisible: isFocusVisibleWithin,
    isHovered,
    isPressed,
  };
};
