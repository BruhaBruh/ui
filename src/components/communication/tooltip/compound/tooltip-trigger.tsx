import { useMergedRefs } from '@/hooks';
import type { AriaProps } from '@/types';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import type { TooltipTriggerProps as AriaTooltipTriggerProps } from 'react-aria';
import { useTooltipTrigger } from 'react-aria';
import { useTooltipTriggerState } from 'react-stately';
import { useTooltipContext, useTooltipSetContext } from '../context';

export type TooltipTriggerProps = AriaProps<'button', AriaTooltipTriggerProps>;

export const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  TooltipTriggerProps
>(({ children, delay = 0, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);
  const [isOpen] = useTooltipContext((s) => s.tooltipProps?.isOpen);
  const setState = useTooltipSetContext();

  const mergedProps: AriaTooltipTriggerProps = {
    ...props,
    delay,
    isOpen: props.isOpen || isOpen,
  };

  const state = useTooltipTriggerState(mergedProps);
  const { triggerProps, tooltipProps } = useTooltipTrigger(
    mergedProps,
    state,
    ref,
  );

  React.useEffect(() => {
    setState((p) => ({
      ...p,
      state,
      triggerTooltipProps: tooltipProps,
      trigger: ref.current,
    }));

    return () => {
      setState((prev) => ({
        ...prev,
        state: undefined,
        triggerTooltipProps: undefined,
        trigger: null,
      }));
    };
  }, [ref, setState, state, tooltipProps]);

  const Comp = Slot;

  return (
    <Comp {...triggerProps} ref={ref}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
});
TooltipTrigger.displayName = 'TooltipTrigger';
