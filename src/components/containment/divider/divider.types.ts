import { AriaPropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { SeparatorProps } from 'react-aria';
import { dividerVariants } from './divider.variants';

export type DividerProps = AriaPropsWithAsChild<'section', SeparatorProps> &
  VariantProps<typeof dividerVariants>;
