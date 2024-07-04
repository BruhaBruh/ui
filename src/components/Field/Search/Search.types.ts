import { Props } from '@/types/props';
import { AriaSearchFieldProps } from 'react-aria';

export type SearchFieldProps = AriaSearchFieldProps &
  Omit<Props<'input'>, 'autoCapitalize'>;
