import { Props } from '@/types';
import { AriaTextFieldProps } from 'react-aria';

export type TextAreaFieldProps = Omit<AriaTextFieldProps, 'errorMessage'> &
  Omit<Props<'textarea'> & Props<'input'>, 'autoCapitalize' | 'onChange'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    errorMessage?: string;
  };
