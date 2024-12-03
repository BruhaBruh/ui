import {
  UseInteractions,
  useInteractions,
} from '../use-interactions/use-interactions';
import { UseRipple, UseRippleOptions, useRipple } from '../use-ripple';

export const useInteractionsWithRipple = <
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown> = 'div',
>(
  props: Parameters<UseInteractions<T>>[0],
  rippleOptions: Partial<UseRippleOptions> = {},
): ReturnType<UseInteractions<T>> & { rippleProps: ReturnType<UseRipple> } => {
  const rippleProps = useRipple(rippleOptions);
  const interaction = useInteractions<T>({
    ...props,
    onPressStart: (e) => {
      // start(e);
      props.onPressStart?.(e);
    },
    onPressUp: (e) => {
      // onUnpress(e);
      props.onPressUp?.(e);
    },
  });

  return {
    ...interaction,
    rippleProps,
  };
};
