import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';

export const Text: React.FC<Props<'p'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn('typography-body-large text-secondary', className)}
    >
      {children}
    </p>
  );
};
