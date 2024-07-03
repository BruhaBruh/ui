import { Props } from '@/types/props';
import { AriaTextFieldProps } from 'react-aria';

export type TextAreaFieldProps = AriaTextFieldProps &
  Omit<Props<'textarea'> & Props<'input'>, 'autoCapitalize'>;
