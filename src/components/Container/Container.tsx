'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { useCN } from '@/providers';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { ContainerProps } from './Container.types';
import { containerVariants } from './Container.variants';

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ color, className, asChild, children, ...props }, forwardedRef) => {
    const cn = useCN();

    const ref = useMergedRefs(forwardedRef);

    const Comp = asChild ? Slot : 'section';

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(containerVariants({ color }), className)}
      >
        {children}
      </Comp>
    );
  },
);
Container.displayName = '@bruhabruh/ui/Container';
