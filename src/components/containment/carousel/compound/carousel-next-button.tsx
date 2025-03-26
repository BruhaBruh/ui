import type { IconButtonProps } from '@/components/action';
import { IconButton } from '@/components/action';
import { cn } from '@/utility';
import { IconChevronRight } from '@tabler/icons-react';
import { carouselVariants } from '../carousel.variants';
import { useCarouselContext } from '../context';
import { useNextButton } from './use-next-button';

export const CarouselNextButton: React.FC<IconButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const [{ emblaApi }] = useCarouselContext();
  const { isDisabled, onPress } = useNextButton(emblaApi);

  return (
    <IconButton
      color="secondary"
      {...props}
      isDisabled={isDisabled}
      onPress={onPress}
      className={cn(carouselVariants.arrowButton(), className)}
    >
      {children ?? <IconChevronRight />}
    </IconButton>
  );
};
