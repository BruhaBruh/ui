import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaCheckboxGroupItemProps } from 'react-aria';
import type { checkboxGroupVariants } from './checkbox-group.variants';

export type CheckboxGroupItemProps = AriaProps<
  'input',
  AriaCheckboxGroupItemProps
> &
  VariantProps<typeof checkboxGroupVariants.item>;
