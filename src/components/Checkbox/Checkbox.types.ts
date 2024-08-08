import { Props } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaCheckboxProps } from 'react-aria';
import { checkboxVariants } from './Checkbox.variants';

export type CheckboxProps = Omit<AriaCheckboxProps, 'errorMessage'> &
  Omit<Props<'input'>, 'autoCapitalize' | 'onChange' | 'size'> &
  Omit<VariantProps<typeof checkboxVariants>, 'active'>;
