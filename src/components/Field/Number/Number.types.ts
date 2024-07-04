import { Props } from '@/types/props';
import { AriaNumberFieldProps } from 'react-aria';

export type NumberFieldProps = AriaNumberFieldProps &
  Omit<Props<'input'>, 'autoCapitalize'>;
