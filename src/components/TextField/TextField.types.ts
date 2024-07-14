import { Props } from '@/types/index.types';
import { AriaTextFieldProps } from 'react-aria';

export type TextFieldProps = Omit<AriaTextFieldProps, 'errorMessage'> &
  Omit<Props<'input'>, 'autoCapitalize'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    errorMessage?: string;
  };
