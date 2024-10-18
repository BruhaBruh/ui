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
  const { focusProps, isFocusVisible } = useFocusRing(props);
  const {
    focusProps: focusVisibleWithinProps,
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
        'data-focus-visible': isFocusVisible,
        'data-focus-visible-within': isFocusVisibleWithin,
        'data-hovered': isHovered,
        'data-pressed': isPressed,
      },
    ),
    isFocusVisible,
    isFocusWithinVisible: isFocusVisibleWithin,
    isHovered,
    isPressed,
  };
};
