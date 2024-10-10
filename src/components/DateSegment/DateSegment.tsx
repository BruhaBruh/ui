'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useDateSegment } from 'react-aria';
import { DateSegmentProps } from './DateSegment.types';
import { dateSegmentVariants } from './DateSegment.variants';

export const DateSegment = React.forwardRef<HTMLSpanElement, DateSegmentProps>(
  ({ segment, state, className, asChild, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const { segmentProps } = useDateSegment(segment, state, ref);

    const Comp = asChild ? Slot : 'span';

    return (
      <Comp
        {...props}
        {...segmentProps}
        ref={ref}
        className={cn(dateSegmentVariants(), className)}
        data-placeholder={segment.isPlaceholder}
      >
        {segment.text}
      </Comp>
    );
  },
);
DateSegment.displayName = 'DateSegment';
