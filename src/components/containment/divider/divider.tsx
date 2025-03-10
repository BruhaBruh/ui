import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useSeparator } from 'react-aria';
import type { DividerProps } from './divider.types';
import { dividerVariants } from './divider.variants';

export const Divider = React.forwardRef<HTMLElement, DividerProps>(
  (
    { inset, orientation = 'horizontal', asChild, className, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const { separatorProps } = useSeparator({ orientation, ...props });

    const Comp = asChild ? Slot : 'section';

    return (
      <Comp
        {...separatorProps}
        ref={ref}
        className={cn(dividerVariants({ inset }), className)}
        data-orientation={orientation}
      />
    );
  },
);
Divider.displayName = 'Divider';
