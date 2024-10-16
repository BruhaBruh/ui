import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaButtonProps } from 'react-aria';
import { buttonVariants } from './Button.variants';

export type ButtonProps = AriaButtonProps &
  PropsWithAsChild<'button', AriaButtonProps> &
  VariantProps<typeof buttonVariants> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
