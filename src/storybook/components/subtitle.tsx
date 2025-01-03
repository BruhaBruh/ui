import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';

export const Subtitle: React.FC<Props<'p'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p {...props} className={cn('pb-sm typography-headline-large', className)}>
      {children}
    </p>
  );
};
