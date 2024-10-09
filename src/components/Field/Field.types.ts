import { Props, PropsWithAsChild } from '@/types';
import React from 'react';

export type FieldProps = PropsWithAsChild<'div', object, 'autoCapitalize'> & {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isVisible?: boolean;
  labelId?: string;
  labelProps?: Props<'label'>;
  description?: React.ReactNode;
  descriptionProps?: Props<'p'>;
  left?: React.ReactNode;
  right?: React.ReactNode;
  label: React.ReactNode;
  input: (className: string) => React.ReactNode;
};
