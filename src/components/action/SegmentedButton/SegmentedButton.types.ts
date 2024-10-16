import { Props } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaToggleButtonProps } from 'react-aria';
import { segmentedButtonVariants } from './SegmentedButton.variants';

export type SegmentedButtonProps = AriaToggleButtonProps &
  Props<'button', AriaToggleButtonProps> &
  VariantProps<typeof segmentedButtonVariants> & {
    selectedIcon?: React.ReactNode;
  };
