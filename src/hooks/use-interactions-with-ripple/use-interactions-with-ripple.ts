import {
  UseInteractions,
  useInteractions,
} from '../use-interactions/use-interactions';
import { UseRippleOptions, useRipple } from '../use-ripple';

export const useInteractionsWithRipple = <
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown> = 'div',
>(
  props: Parameters<UseInteractions<T>>[0],
  rippleOptions: Partial<UseRippleOptions> = {},
): ReturnType<UseInteractions<T>> => {
  const { onStart, onEnd } = useRipple(rippleOptions);

  return useInteractions<T>({
    ...props,
    onPressStart: (e) => {
      onStart(e);
      props.onPressStart?.(e);
    },
    onPressUp: (e) => {
      onEnd(e);
      props.onPressUp?.(e);
    },
  });
};
