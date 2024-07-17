'use client';

import { useCN } from '@/providers';
import React from 'react';
import { useDateSegment } from 'react-aria';
import { DateSegmentProps } from './DateSegment.types';
import { dateSegmentVariants } from './DateSegment.variants';

export const DateSegment: React.FC<DateSegmentProps> = ({
  segment,
  state,
  className,
  ...props
}) => {
  const cn = useCN();

  const ref = React.useRef<HTMLSpanElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <span
      {...props}
      {...segmentProps}
      ref={ref}
      className={cn(
        dateSegmentVariants({
          isPlaceholder: segment.isPlaceholder,
        }),
        className,
      )}
    >
      {segment.type === 'hour' ? segment.text.padStart(2, '0') : segment.text}
    </span>
  );
};
