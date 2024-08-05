import { Props } from '@/types';
import { AriaTimeFieldProps, TimeValue } from 'react-aria';

export type TimeFieldProps = Omit<
  AriaTimeFieldProps<TimeValue>,
  'errorMessage'
> &
  Props<'span'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    errorMessage?: string;
  };