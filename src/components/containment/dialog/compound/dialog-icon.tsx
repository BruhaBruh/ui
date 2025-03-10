import type { Props } from '@/types';
import { cn } from '@/utility';
import { dialogVariants } from '../dialog.variants';

export const DialogIcon: React.FC<Props<'span'>> = ({
  className,
  ...props
}) => {
  return <span {...props} className={cn(dialogVariants.icon(), className)} />;
};
