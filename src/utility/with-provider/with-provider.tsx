import React from 'react';

export const withProvider = <T extends object, ProviderValue>(
  Provider: React.FC<{ value?: ProviderValue; children: React.ReactNode }>,
  Component: React.FC<T>,
  value?: ProviderValue,
) => {
  const ProviderWithComponent: React.FC<T> = (props) => {
    return (
      <Provider value={value}>
        <Component {...props} />
      </Provider>
    );
  };
  if (Provider.displayName && Component.displayName)
    ProviderWithComponent.displayName = `${Component.displayName}With${Provider.displayName}`;

  return ProviderWithComponent;
};
