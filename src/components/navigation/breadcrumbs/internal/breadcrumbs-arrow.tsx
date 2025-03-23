import { cn } from '@/utility';
import { IconChevronRight } from '@tabler/icons-react';
import { breadcrumbsVariants } from '../breadcrumbs.variants';

export type BreadcrumbsArrowProps = React.ComponentProps<
  typeof IconChevronRight
>;

export const BreadcrumbsArrow: React.FC<BreadcrumbsArrowProps> = ({
  className,
  ...props
}) => {
  return (
    <IconChevronRight
      {...props}
      className={cn(breadcrumbsVariants.arrow(), className)}
    />
  );
};
