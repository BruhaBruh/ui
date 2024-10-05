import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaButtonProps } from 'react-aria';
import { extendedFabContainerVariants } from './ExtendedFab.variants';

export type ExtendedFabProps = AriaButtonProps &
  PropsWithAsChild<'button', AriaButtonProps, 'isDisabled' | 'disabled'> &
  VariantProps<typeof extendedFabContainerVariants> & {
    icon?: React.ReactNode;
    lowered?: boolean;
  };
