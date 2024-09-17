import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaButtonProps } from 'react-aria';
import { buttonContainerVariants } from './Button.variants';

export type ButtonProps = AriaButtonProps &
  PropsWithAsChild<'button'> &
  VariantProps<typeof buttonContainerVariants> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
