import type { AriaPropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { useToggleButtonGroupItem } from 'react-aria';
import type { segmentedButtonVariants } from './segmented-button.variants';

type AriaToggleButtonGroupItemProps = Parameters<
  typeof useToggleButtonGroupItem
>[0];

export type SegmentedButtonProps = AriaPropsWithAsChild<
  'button',
  AriaToggleButtonGroupItemProps
> &
  VariantProps<typeof segmentedButtonVariants> & {
    checkIcon?: React.ReactNode;
  };
