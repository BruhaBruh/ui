'use client';

import { useToastState } from '@react-stately/toast';
import React from 'react';
import { SnackbarContent } from '../Snackbar.types';
import { SnackbarContext } from './Snackbar.context';
import { SnackbarProviderProps } from './SnackbarProvider.types';

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
  maxVisibleToasts = 5,
}) => {
  const state = useToastState<SnackbarContent>({
    maxVisibleToasts,
    hasExitAnimation: true,
  });

  return (
    <SnackbarContext.Provider value={state}>
      {children}
    </SnackbarContext.Provider>
  );
};
