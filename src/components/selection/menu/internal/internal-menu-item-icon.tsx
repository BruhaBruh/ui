import { cn } from '@/utility';
import React from 'react';
import { menuVariants } from '../menu.variants';

export const InternalMenuItemIcon: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => {
  return (
    <>
      {children && (
        <span className={cn(menuVariants.icon(), className)}>{children}</span>
      )}
    </>
  );
};
