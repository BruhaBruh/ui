import { Props } from '@/types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaSwitchProps } from 'react-aria';
import { switchVariants } from './Switch.variants';

export type SwitchProps = Omit<
  AriaSwitchProps & Props<'label', AriaSwitchProps>,
  'children'
> &
  VariantProps<typeof switchVariants> & {
    selectedIcon?: React.ReactNode;
    unselectedIcon?: React.ReactNode;
  };
