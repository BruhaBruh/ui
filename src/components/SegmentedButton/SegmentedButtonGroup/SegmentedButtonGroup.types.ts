import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { segmentedButtonGroupVariants } from './SegmentedButtonGroup.variants';

export type SegmentedButtonGroupProps = PropsWithAsChild<'div'> &
  VariantProps<typeof segmentedButtonGroupVariants>;
