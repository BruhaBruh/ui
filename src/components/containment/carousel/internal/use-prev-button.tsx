import type { EmblaCarouselType } from 'embla-carousel';
import React from 'react';

type UsePrevButtonType = {
  isDisabled: boolean;
  onPress: () => void;
};

export const usePrevButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevButtonType => {
  const [isDisabled, setIsDisabled] = React.useState(true);

  const onPress = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    setIsDisabled(!api.canScrollPrev());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    isDisabled,
    onPress,
  };
};
