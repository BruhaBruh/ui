'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { BadgeProps } from './Badge.types';
import { badgeContainerVariants } from './Badge.variants';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { count, maxCount = 999, color, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const Comp = asChild ? Slot : 'span';

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn('badge', badgeContainerVariants({ color }), className)}
        data-size={(() => {
          if (count === undefined) return 'small';
          if (count < 10 && count <= maxCount) return 'medium';
          return 'large';
        })()}
        data-overflow={(count && count > maxCount) || 'false'}
      >
        {asChild && <Slottable>{children}</Slottable>}
        {count !== undefined && count > maxCount ? maxCount : count}
      </Comp>
    );
  },
);
Badge.displayName = 'Badge';
