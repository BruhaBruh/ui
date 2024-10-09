import { PropsWithAsChild } from '@/types';
import React from 'react';
import { AriaNumberFieldProps } from 'react-aria';
import { FieldProps } from '../Field';
import { IconButtonProps } from '../IconButton';

export type NumberFieldProps = AriaNumberFieldProps &
  Omit<
    FieldProps,
    'input' | 'children' | 'labelId' | 'labelProps' | 'descriptionProps'
  > &
  PropsWithAsChild<
    'input',
    AriaNumberFieldProps | FieldProps,
    'autoCapitalize'
  > & {
    child?: React.ReactNode;
    left?: (props: IconButtonProps) => React.ReactNode;
    right?: (props: IconButtonProps) => React.ReactNode;
    incrementButton?: boolean;
    decrementButton?: boolean;
  };
