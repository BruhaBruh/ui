import { Props } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaRadioProps } from 'react-aria';
import { radioContainerVariants } from './Radio.variants';

export type RadioProps = AriaRadioProps &
  Omit<Props<'label'>, keyof AriaRadioProps> &
  VariantProps<typeof radioContainerVariants>;
