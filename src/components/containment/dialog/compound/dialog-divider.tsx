'use client';

import { cn } from '@/utility';
import { VariantProps } from 'class-variance-authority';
import { Divider, DividerProps } from '../../divider';
import { dialogVariants } from '../dialog.variants';

export const DialogDivider: React.FC<
  DividerProps & VariantProps<typeof dialogVariants.divider>
> = ({ spacing, className, ...props }) => {
  return (
    <Divider
      {...props}
      className={cn(dialogVariants.divider({ spacing }), className)}
    />
  );
};
