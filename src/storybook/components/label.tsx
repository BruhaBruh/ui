import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';

export const Label: React.FC<Props<'p'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn('pb-2xs typography-label-large text-secondary', className)}
    >
      {children}
    </p>
  );
};
