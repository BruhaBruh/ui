import { AriaPropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaToggleButtonGroupProps } from 'react-aria';
import { segmentedButtonVariants } from '../../segmented-button.variants';

export type SegmentedButtonGroupProps = AriaPropsWithAsChild<
  'section',
  AriaToggleButtonGroupProps
> &
  VariantProps<typeof segmentedButtonVariants.group>;
