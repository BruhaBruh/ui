import { Props, PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { fieldContainerVariants } from './Field.variants';

export type FieldProps = PropsWithAsChild<'div', object, 'autoCapitalize'> &
  VariantProps<typeof fieldContainerVariants> & {
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
