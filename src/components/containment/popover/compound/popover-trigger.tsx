import { useMergedRefs } from '@/hooks';
import type { AriaProps } from '@/types';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { useOverlayTrigger } from 'react-aria';
import type { OverlayTriggerProps } from 'react-stately';
import { useOverlayTriggerState } from 'react-stately';
import { usePopoverContext, usePopoverSetContext } from '../context';

export type PopoverTriggerProps = AriaProps<'button', OverlayTriggerProps>;

export const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(({ children, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);
  const [type] = usePopoverContext((s) => s.popoverProps?.type ?? 'dialog');
  const setState = usePopoverSetContext();

  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { ...props, type },
    state,
    ref,
  );

  React.useEffect(() => {
    setState((p) => ({
      ...p,
      state,
      triggerRef: ref,
      triggerPopoverProps: overlayProps,
    }));

    return () => {
      setState((prev) => ({
        ...prev,
        state: undefined,
        triggerRef: undefined,
        triggerPopoverProps: undefined,
      }));
    };
  }, [ref, setState, state, overlayProps]);

  const Comp = Slot;

  return (
    <Comp {...triggerProps} ref={ref}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
});
PopoverTrigger.displayName = 'PopoverTrigger';
