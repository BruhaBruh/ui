import { Props } from '@/types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaCheckboxGroupItemProps } from 'react-aria';
import { checkboxContainerVariants } from '../Checkbox.variants';

export type CheckboxProps = AriaCheckboxGroupItemProps &
  Props<'label', AriaCheckboxGroupItemProps> &
  VariantProps<typeof checkboxContainerVariants> & {
    selectedIcon?: React.ReactNode;
    intermediateIcon?: React.ReactNode;
  };
