import type { Props } from '@/types';
import { cn } from '@/utility';
import { carouselVariants } from '../carousel.variants';

export const CarouselSlideContent: React.FC<Props<'article'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cn(carouselVariants.slideContent(), className)}
    >
      {children}
    </section>
  );
};
