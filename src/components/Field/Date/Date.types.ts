import { Props } from '@/types/props';
import { AriaDateFieldProps, DateValue } from 'react-aria';

export type DateFieldProps = AriaDateFieldProps<DateValue> &
  Omit<Props<'span'>, 'autoCapitalize' | 'defaultValue'>;
