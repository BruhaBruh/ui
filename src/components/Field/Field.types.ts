import { Props } from '@/types/props';
import { AriaFieldProps, AriaTextFieldProps } from 'react-aria';

export type FieldProps = Omit<AriaFieldProps, 'errorMessage'> &
  Props<'span'> &
  Required<Pick<Props<'span'>, 'children'>> & {
    errorMessage?: string;
  };

export type TextFieldProps = AriaTextFieldProps &
  Omit<Props<'input'>, 'autoCapitalize'>;

export type TextAreaFieldProps = AriaTextFieldProps &
  Omit<Props<'textarea'> & Props<'input'>, 'autoCapitalize'>;
