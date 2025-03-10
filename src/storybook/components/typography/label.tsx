import type { PropsWithAsChild } from '@/types';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import type React from 'react';

export const Label: React.FC<PropsWithAsChild<'p'>> = ({
  className,
  children,
  asChild,
  ...props
}) => {
  const Comp = asChild ? Slot : 'p';

  return (
    <Comp
      {...props}
      className={cn('pb-2xs typography-label-large text-secondary', className)}
    >
      {children}
    </Comp>
  );
};
