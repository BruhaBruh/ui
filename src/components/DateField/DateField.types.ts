import { PropsWithAsChild } from '@/types';
import React from 'react';
import {
  AriaDateFieldProps,
  AriaNumberFieldProps,
  DateValue,
} from 'react-aria';
import { FieldProps } from '../Field';

export type DateFieldProps = AriaDateFieldProps<DateValue> &
  Omit<
    FieldProps,
    | 'input'
    | 'children'
    | 'labelId'
    | 'labelProps'
    | 'descriptionProps'
    | 'isVisible'
  > &
  PropsWithAsChild<
    'span',
    AriaNumberFieldProps | FieldProps,
    'autoCapitalize'
  > & {
    child?: React.ReactNode;
  };
