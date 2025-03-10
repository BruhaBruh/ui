import type { AriaPropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { SeparatorProps } from 'react-aria';
import type { dividerVariants } from './divider.variants';

export type DividerProps = AriaPropsWithAsChild<'section', SeparatorProps> &
  VariantProps<typeof dividerVariants>;
