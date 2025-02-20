import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaCheckboxGroupItemProps } from 'react-aria';
import { checkboxGroupVariants } from './checkbox-group.variants';

export type CheckboxGroupItemProps = AriaProps<
  'input',
  AriaCheckboxGroupItemProps
> &
  VariantProps<typeof checkboxGroupVariants.item>;
