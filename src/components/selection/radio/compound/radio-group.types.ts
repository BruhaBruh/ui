import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaRadioGroupProps } from 'react-aria';
import { radioGroupVariants } from './radio-group.variants';

export type RadioGroupProps = AriaProps<'section', AriaRadioGroupProps> &
  VariantProps<typeof radioGroupVariants>;
