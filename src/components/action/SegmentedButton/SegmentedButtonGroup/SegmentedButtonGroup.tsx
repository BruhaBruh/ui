'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { SegmentedButtonGroupProps } from './SegmentedButtonGroup.types';
import { segmentedButtonGroupVariants } from './SegmentedButtonGroup.variants';

export const SegmentedButtonGroup = React.forwardRef<
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
SegmentedButtonGroup.displayName = 'SegmentedButtonGroup';
