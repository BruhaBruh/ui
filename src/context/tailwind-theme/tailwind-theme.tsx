'use client';

import { tailwindTheme } from '@/config/tailwind-theme';
import React from 'react';

const Context = React.createContext<Record<string, unknown>>(tailwindTheme);

export const TailwindThemeProvider = Context.Provider;

export const useTailwindTheme = <
  T extends Record<string, unknown> = typeof tailwindTheme,
>(): T => {
  return React.useContext(Context) as T;
};
