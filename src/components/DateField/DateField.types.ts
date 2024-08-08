import { Props } from '@/types';
import { AriaDateFieldProps, DateValue } from 'react-aria';

export type DateFieldProps = Omit<
  AriaDateFieldProps<DateValue>,
  'errorMessage'
> &
  Omit<Props<'span'>, 'onChange'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    errorMessage?: string;
  };
