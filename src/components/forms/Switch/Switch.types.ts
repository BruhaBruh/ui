import { Props } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaSwitchProps } from 'react-aria';
import { switchContainerVariants } from './Switch.variants';

export type SwitchProps = Omit<
  AriaSwitchProps & Omit<Props<'label'>, keyof AriaSwitchProps>,
  'children'
> &
  VariantProps<typeof switchContainerVariants>;
