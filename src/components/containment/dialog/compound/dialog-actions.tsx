'use client';

import { Props } from '@/types';
import { cn } from '@/utility';
import { dialogVariants } from '../dialog.variants';

export const DialogActions: React.FC<Props<'section'>> = ({
  className,
  ...props
}) => {
  return (
    <section {...props} className={cn(dialogVariants.actions(), className)} />
  );
};
