import React from 'react';

export const withProvider = <T extends object, ProviderValue>(
  Provider: React.FC<{ value?: ProviderValue; children: React.ReactNode }>,
  Component: React.FC<T>,
  value?: ProviderValue,
) => {
  const hoc = React.forwardRef<HTMLElement, T>((props, ref) => {
    const propsWithRef = { ...props, ref } as T;
    return (
      <Provider value={value}>
        <Component {...propsWithRef} />
      </Provider>
    );
  });
  const providerName = Provider.displayName ?? Provider.name;
  const componentName = (Component.displayName ?? Component.name).replace(
    /Impl$/,
    '',
  );
  hoc.displayName = `${componentName}With${providerName}`;

  return hoc;
};
