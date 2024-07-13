import { Props } from '@/types';
import { AriaDateFieldProps, DateValue } from 'react-aria';

export type DateFieldProps = Omit<
  AriaDateFieldProps<DateValue>,
  'errorMessage'
> &
  Props<'span'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    errorMessage?: string;
  };
