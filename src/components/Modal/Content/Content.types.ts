import { Props } from '@/types';
import React from 'react';
import { AriaModalOverlayProps } from 'react-aria';

export type ModalContentProps = AriaModalOverlayProps &
  Props<'div'> & {
    closeIcon?: React.ReactNode;
  };
