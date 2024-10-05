import { Props } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaToggleButtonProps } from 'react-aria';
import { segmentedButtonContainerVariants } from './SegmentedButton.variants';

export type SegmentedButtonProps = AriaToggleButtonProps &
  Props<'button', AriaToggleButtonProps> &
  VariantProps<typeof segmentedButtonContainerVariants> & {
    selectedIcon?: React.ReactNode;
  };
