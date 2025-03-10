import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { containerVariants } from '../../container.variants';
import type { ContainerContentProps } from './container-content.types';

export const ContainerContent = React.forwardRef<
  HTMLElement,
  ContainerContentProps
>(
  (
    { variant, padding, fluid, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const Comp = asChild ? Slot : 'section';

    return (
      <Comp
        {...props}
        className={cn(
          containerVariants.content({ variant, padding, fluid }),
          className,
        )}
        ref={ref}
      >
        {children}
      </Comp>
    );
  },
);
ContainerContent.displayName = 'ContainerContent';
