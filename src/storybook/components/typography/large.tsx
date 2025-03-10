import type { Props } from '@/types';
import { cn } from '@/utility';
import type React from 'react';

export const Large: React.FC<Props<'p'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p {...props} className={cn('pb-xs typography-title-large', className)}>
      {children}
    </p>
  );
};
