import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { SeparatorProps } from 'react-aria';
import { dividerVariants } from './Divider.variants';

export type DividerProps = SeparatorProps &
  PropsWithAsChild<'span', SeparatorProps> &
  VariantProps<typeof dividerVariants>;
