'use client';

import React from 'react';

export type ButtonContextState = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  setLeftIcon: (node: React.ReactNode) => void;
  setRightIcon: (node: React.ReactNode) => void;
};

const ButtonContext = React.createContext<ButtonContextState | null>(null);

export const useButtonContext = () => {
  const value = React.useContext(ButtonContext);
  if (!value)
    throw new Error('This component must be used within a <Button> component');
  return value;
};

export const ButtonContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [leftIcon, setLeftIcon] = React.useState<React.ReactNode>(null);
  const [rightIcon, setRightIcon] = React.useState<React.ReactNode>(null);

  const value = React.useMemo<ButtonContextState>(
    () => ({
      leftIcon,
      rightIcon,
      setLeftIcon,
      setRightIcon,
    }),
    [leftIcon, rightIcon],
  );

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
