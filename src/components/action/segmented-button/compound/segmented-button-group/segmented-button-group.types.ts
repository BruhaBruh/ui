import type { AriaPropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaToggleButtonGroupProps } from 'react-aria';
import type { segmentedButtonVariants } from '../../segmented-button.variants';

export type SegmentedButtonGroupProps = AriaPropsWithAsChild<
  'section',
  AriaToggleButtonGroupProps
> &
  VariantProps<typeof segmentedButtonVariants.group>;
