import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaSwitchProps } from 'react-aria';
import { switchVariants } from './switch.variants';

export type SwitchProps = AriaProps<'input', AriaSwitchProps> &
  VariantProps<typeof switchVariants>;
