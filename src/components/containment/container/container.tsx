import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import type { ContainerProps } from './container.types';
import { containerVariants } from './container.variants';

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ color, className, asChild, children, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);

    const Comp = asChild ? Slot : 'section';

    return (
      <Comp
        {...props}
        className={cn(containerVariants({ color }), className)}
        ref={ref}
      >
        {children}
      </Comp>
    );
  },
);
Container.displayName = 'Container';
