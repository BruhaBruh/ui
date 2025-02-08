import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { SeparatorProps } from 'react-aria';
import { dividerVariants } from './divider.variants';

export type DividerProps = AriaProps<'section', SeparatorProps> &
  VariantProps<typeof dividerVariants>;
