import { AriaPropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { useToggleButtonGroupItem } from 'react-aria';
import { segmentedButtonVariants } from './segmented-button.variants';

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
