import { Props } from '@/types';
import React from 'react';
import { AriaNumberFieldProps } from 'react-aria';

export type NumberFieldProps = Omit<AriaNumberFieldProps, 'errorMessage'> &
  Omit<Props<'input'>, 'autoCapitalize'> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    increaseIcon?: React.ReactNode;
    decreaseIcon?: React.ReactNode;
    errorMessage?: string;
  };
