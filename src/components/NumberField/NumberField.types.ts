import { Props } from '@/types/index.types';
import { AriaNumberFieldProps } from 'react-aria';

export type NumberFieldProps = Omit<AriaNumberFieldProps, 'errorMessage'> &
  Omit<Props<'input'>, 'autoCapitalize'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    errorMessage?: string;
  };
