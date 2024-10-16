import { ToastStateProps } from '@react-stately/toast';
import React from 'react';

export type SnackbarProviderProps = React.PropsWithChildren<
  Omit<ToastStateProps, 'hasExitAnimation'>
>;
