import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaSliderProps } from 'react-aria';
import { sliderVariants } from './slider.variants';

export type SliderProps = AriaProps<'section', AriaSliderProps> &
  VariantProps<typeof sliderVariants> & {
    formatOptions?: Intl.NumberFormatOptions;
    variant?: 'continuous' | 'centered';
  };
