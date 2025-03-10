import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaRadioProps } from 'react-aria';
import type { radioVariants } from './radio.variants';

export type RadioProps = AriaProps<'input', AriaRadioProps> &
  VariantProps<typeof radioVariants>;
