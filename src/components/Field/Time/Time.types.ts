import { Props } from '@/types/props';
import { AriaTimeFieldProps, TimeValue } from 'react-aria';

export type TimeFieldProps = AriaTimeFieldProps<TimeValue> &
  Omit<Props<'span'>, 'autoCapitalize'>;
