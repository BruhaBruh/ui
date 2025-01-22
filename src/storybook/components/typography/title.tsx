import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';

export const Title: React.FC<Props<'p'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p {...props} className={cn('pb-md typography-display-large', className)}>
      {children}
    </p>
  );
};