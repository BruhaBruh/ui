import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaRadioGroupProps } from 'react-aria';
import type { radioGroupVariants } from './radio-group.variants';

export type RadioGroupProps = AriaProps<'section', AriaRadioGroupProps> &
  VariantProps<typeof radioGroupVariants>;
