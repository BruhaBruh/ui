import { IconButtonProps } from '@/components/action';
import { PropsWithAsChild } from '@/types';
import React from 'react';
import { AriaSearchFieldProps, AriaTextFieldProps } from 'react-aria';
import { FieldProps } from '../Field';

export type SearchFieldProps = AriaSearchFieldProps &
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
    right?: (props: IconButtonProps) => React.ReactNode;
    searchButton?: boolean;
  };
