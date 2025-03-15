import type { Props } from '@/types';
import { cn } from '@/utility';
import { carouselVariants } from '../carousel.variants';

export const CarouselSlide: React.FC<Props<'article'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <article {...props} className={cn(carouselVariants.slide(), className)}>
      {children}
    </article>
  );
};
