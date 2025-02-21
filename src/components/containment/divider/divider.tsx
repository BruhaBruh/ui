'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { useSeparator } from 'react-aria';
import { DividerProps } from './divider.types';
import { dividerVariants } from './divider.variants';

export const Divider = React.forwardRef<HTMLElement, DividerProps>(
  (
    { inset, orientation = 'horizontal', className, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const { separatorProps } = useSeparator({ orientation, ...props });

    return (
      <section
        {...separatorProps}
        ref={ref}
        className={cn(dividerVariants({ inset }), className)}
        data-orientation={orientation}
      />
    );
  },
);
Divider.displayName = 'Divider';
