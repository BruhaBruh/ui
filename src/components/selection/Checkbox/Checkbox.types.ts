import { Props } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaCheckboxProps } from 'react-aria';
import { checkboxContainerVariants } from './Checkbox.variants';

export type CheckboxProps = AriaCheckboxProps &
  Props<'label', AriaCheckboxProps> &
  VariantProps<typeof checkboxContainerVariants> & {
    selectedIcon?: React.ReactNode;
    intermediateIcon?: React.ReactNode;
  };
