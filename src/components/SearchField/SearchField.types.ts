import { Props } from '@/types';
import React from 'react';
import { AriaSearchFieldProps } from 'react-aria';

export type SearchFieldProps = Omit<AriaSearchFieldProps, 'errorMessage'> &
  Omit<Props<'input'>, 'autoCapitalize' | 'onChange'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    closeIcon?: React.ReactNode;
    errorMessage?: string;
  };
