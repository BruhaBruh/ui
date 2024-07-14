import { Props } from '@/types/index.types';
import { AriaSearchFieldProps } from 'react-aria';

export type SearchFieldProps = Omit<AriaSearchFieldProps, 'errorMessage'> &
  Omit<Props<'input'>, 'autoCapitalize'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    errorMessage?: string;
  };
