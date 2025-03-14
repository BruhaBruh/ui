import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useToggleButtonGroup } from 'react-aria';
import { useToggleGroupState } from 'react-stately';
import { SegmentedButtonGroupContextProvider } from '../../context';
import { segmentedButtonVariants } from '../../segmented-button.variants';
import type { SegmentedButtonGroupProps } from './segmented-button-group.types';

export const SegmentedButtonGroup = React.forwardRef<
  HTMLElement,
  SegmentedButtonGroupProps
>(({ density, className, asChild, children, ...props }, forwardedRef) => {
  const state = useToggleGroupState(props);
  const ref = useMergedRefs(forwardedRef);
  const { groupProps } = useToggleButtonGroup(props, state, ref);

  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      {...groupProps}
      className={cn(segmentedButtonVariants.group({ density }), className)}
      ref={ref}
    >
      <SegmentedButtonGroupContextProvider state={state}>
        {children}
      </SegmentedButtonGroupContextProvider>
    </Comp>
  );
});
SegmentedButtonGroup.displayName = 'SegmentedButtonGroup';
