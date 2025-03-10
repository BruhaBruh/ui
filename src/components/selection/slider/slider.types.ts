import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaSliderProps } from 'react-aria';
import type { sliderVariants } from './slider.variants';

export type SliderProps = AriaProps<'section', AriaSliderProps> &
  VariantProps<typeof sliderVariants> & {
    formatOptions?: Intl.NumberFormatOptions;
    variant?: 'continuous' | 'centered';
  };
