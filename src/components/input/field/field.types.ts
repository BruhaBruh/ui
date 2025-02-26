import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaFieldProps } from 'react-aria';
import { fieldVariants } from './field.variants';

export type FieldProps = Omit<
  AriaProps<'label', AriaFieldProps, 'errorMessage'>,
  'children'
> &
  VariantProps<typeof fieldVariants> & {
    errorMessage?: React.ReactNode;
    children: (fieldProps: {
      id?: string;
      'aria-label'?: string;
      'aria-labelledby'?: string;
      'aria-describedby'?: string;
      'aria-details'?: string;
    }) => React.ReactNode;
  } & {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
