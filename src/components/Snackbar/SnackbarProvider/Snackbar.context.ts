'use client';

import { ToastState } from '@react-stately/toast';
import React from 'react';
import { SnackbarContent } from '../Snackbar.types';

export const SnackbarContext = React.createContext<ToastState<SnackbarContent>>(
  null as unknown as ToastState<SnackbarContent>,
);

export const useSnackbar = () => {
  const state = React.useContext(SnackbarContext);
  return state;
};
