import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaCheckboxGroupProps, AriaCheckboxProps } from 'react-aria';
import { checkboxGroupVariants } from './CheckboxGroup.variants';

export type CheckboxGroupProps = AriaCheckboxGroupProps &
  Omit<
    PropsWithAsChild<'div'>,
    Exclude<keyof AriaCheckboxProps, 'children'> | 'errorMessage'
  > &
  VariantProps<typeof checkboxGroupVariants> & {
    errorMessage?: React.ReactNode;
  };
