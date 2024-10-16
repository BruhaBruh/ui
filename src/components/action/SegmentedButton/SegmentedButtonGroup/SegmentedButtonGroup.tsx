'use client';

import { useMergedRefs } from '@/hooks';
import { cn, withProvider } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { SegmentedButtonProvider } from '../SegmentedButtonContext/SegmentedButton.context';
import { SegmentedButtonGroupProps } from './SegmentedButtonGroup.types';
import { segmentedButtonGroupVariants } from './SegmentedButtonGroup.variants';

const _SegmentedButtonGroup = React.forwardRef<
  HTMLDivElement,
  SegmentedButtonGroupProps
>(({ asChild, className, children, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);

  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      {...props}
      ref={ref}
      className={cn(
        'segmented-button-group',
        segmentedButtonGroupVariants(),
        className,
      )}
    >
      {children}
    </Comp>
  );
});
_SegmentedButtonGroup.displayName = 'SegmentedButtonGroup';

export const SegmentedButtonGroup = withProvider(
  SegmentedButtonProvider,
  _SegmentedButtonGroup,
);
