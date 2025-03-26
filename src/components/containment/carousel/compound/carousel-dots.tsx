import { cn } from '@/utility';
import { IconCircleFilled } from '@tabler/icons-react';
import { carouselVariants } from '../carousel.variants';
import { useCarouselContext } from '../context';
import { useDotButton } from './use-dot-button';

export const CarouselDots: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [{ emblaApi }] = useCarouselContext();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={cn(carouselVariants.circleContainer())}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={cn(
            carouselVariants.cirlce({
              isSelected: selectedIndex === index,
            }),
          )}
        >
          {children ?? <IconCircleFilled />}
        </button>
      ))}
    </div>
  );
};
