import { PropsWithAsChild } from '@/types';
import React from 'react';
import {
  AriaNumberFieldProps,
  AriaTimeFieldProps,
  TimeValue,
} from 'react-aria';
import { FieldProps } from '../Field';

export type TimeFieldProps = AriaTimeFieldProps<TimeValue> &
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
