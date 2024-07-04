import { Props } from '@/types/props';
import React from 'react';
import { AriaFieldProps } from 'react-aria';

export type FieldProps = Omit<AriaFieldProps, 'errorMessage'> &
  Props<'span'> &
  Required<Pick<Props<'span'>, 'children'>> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    errorMessage?: string;
  };
