import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type React from 'react';
import type { AriaFieldProps } from 'react-aria';
import type { fieldVariants } from './field.variants';

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
  } & {
    fieldClassName?: string;
  };
