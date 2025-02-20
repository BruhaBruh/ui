import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaRadioProps } from 'react-aria';
import { radioVariants } from './radio.variants';

export type RadioProps = AriaProps<'input', AriaRadioProps> &
  VariantProps<typeof radioVariants>;
