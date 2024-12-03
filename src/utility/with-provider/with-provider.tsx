import React from 'react';

export const withProvider = <T extends object, ProviderValue>(
  Provider: React.FC<{ value?: ProviderValue; children: React.ReactNode }>,
  Component: React.FC<T>,
  value?: ProviderValue,
) => {
  const hoc: React.FC<T> = (props) => {
    return (
      <Provider value={value}>
        <Component {...props} />
      </Provider>
    );
  };

  return hoc;
};
