import { cn } from '@/utility';
import type { VariantProps } from 'class-variance-authority';
import type { DividerProps } from '../../divider';
import { Divider } from '../../divider';
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
