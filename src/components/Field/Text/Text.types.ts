import { Props } from '@/types/props';
import { AriaTextFieldProps } from 'react-aria';

export type TextFieldProps = AriaTextFieldProps &
  Omit<Props<'input'>, 'autoCapitalize'>;
