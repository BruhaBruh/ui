import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaSwitchProps } from 'react-aria';
import type { switchVariants } from './switch.variants';

export type SwitchProps = AriaProps<'input', AriaSwitchProps> &
  VariantProps<typeof switchVariants>;
