import type { Props } from '@/types';
import { cn } from '@/utility';
import { dialogVariants } from '../dialog.variants';

export const DialogText: React.FC<Props<'p'>> = ({ className, ...props }) => {
  return <p {...props} className={cn(dialogVariants.text(), className)} />;
};
