import { PropsWithAsChild } from '@/types';
import React from 'react';
import { AriaTextFieldProps } from 'react-aria';
import { FieldProps } from '../Field';

export type TextFieldProps = AriaTextFieldProps &
  Omit<
    FieldProps,
    'input' | 'children' | 'labelId' | 'labelProps' | 'descriptionProps'
  > &
  PropsWithAsChild<
    'input',
    AriaTextFieldProps | FieldProps,
    'autoCapitalize'
  > & {
    child?: React.ReactNode;
  };
