import type { EmblaCarouselType } from 'embla-carousel';
import React from 'react';

type UseNextButtonType = {
  isDisabled: boolean;
  onPress: () => void;
};

export const useNextButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseNextButtonType => {
  const [isDisabled, setIsDisabled] = React.useState(true);

  const onPress = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    setIsDisabled(!api.canScrollNext());
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
