import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import type { BadgeProps } from './badge.types';
import { badgeVariants } from './badge.variants';

export const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  (
    {
      size,
      color,
      placement,
      value,
      maxValue = 999,
      className,
      asChild,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    if (size === 'large' && !value) return null;

    const displayValue = (value || 0) > maxValue ? `${maxValue}+` : value;

    const Comp = asChild ? Slot : 'section';

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(badgeVariants({ size, color, placement }), className)}
        data-one-digit={(value || 0).toString().length === 1}
      >
        {size === 'large' && displayValue}
      </Comp>
    );
  },
);
Badge.displayName = 'Badge';
