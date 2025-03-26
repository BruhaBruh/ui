import type { IconButtonProps } from '@/components/action';
import { IconButton } from '@/components/action';
import { cn } from '@/utility';
import { IconChevronLeft } from '@tabler/icons-react';
import { carouselVariants } from '../carousel.variants';
import { useCarouselContext } from '../context';
import { usePrevButton } from './use-prev-button';

export const CarouselPrevButton: React.FC<IconButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const [{ emblaApi }] = useCarouselContext();
  const { isDisabled, onPress } = usePrevButton(emblaApi);

  return (
    <IconButton
      color="secondary"
      {...props}
      isDisabled={isDisabled}
      onPress={onPress}
      className={cn(carouselVariants.arrowButton(), className)}
    >
      {children ?? <IconChevronLeft />}
    </IconButton>
  );
};
