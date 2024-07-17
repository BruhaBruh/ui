'use client';

import { cn as defaultCN } from '@/utility';
import React from 'react';

export type CNFunction = typeof defaultCN;

const Context = React.createContext<CNFunction>(defaultCN);

export const useCN = () => {
  const className = React.useContext(Context);
  return className;
};

export const CNProvider = Context.Provider;
