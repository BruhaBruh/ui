import { PropsWithAsChild } from '@/types';
import React from 'react';
import { AriaTextFieldProps } from 'react-aria';
import { FieldProps } from '../Field';

export type TextAreaFieldProps = AriaTextFieldProps &
  Omit<
    FieldProps,
    'input' | 'children' | 'labelId' | 'labelProps' | 'descriptionProps'
  > &
  PropsWithAsChild<
    'textarea',
    AriaTextFieldProps | FieldProps,
    'autoCapitalize'
  > & {
    child?: React.ReactNode;
    minRows?: number;
    maxRows?: number;
  };
