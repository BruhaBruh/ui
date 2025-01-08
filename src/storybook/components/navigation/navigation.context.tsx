import React from 'react';
import { NavigationNode } from './navigation.types';

export const NavigationContext = React.createContext<NavigationNode[]>([]);

const sortNodeArray = (value: NavigationNode[], sortByText: boolean) => {
  return value
    .sort((a, b) => {
      if (a.type === b.type) {
        if (!sortByText) return 0;
        return a.text.localeCompare(b.text);
      }
      if (a.type === 'folder') return -1;
      return 1;
    })
    .map((v): NavigationNode => {
      if (v.type !== 'folder') return v;
      return {
        ...v,
        children: sortNodeArray(v.children, sortByText),
      };
    });
};

export const NavigationProvider: React.FC<
  React.PropsWithChildren<{
    value: NavigationNode[];
  }>
> = ({ value, children }) => {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationTree = (sortByText = false) => {
  const value = React.useContext(NavigationContext);
  return sortNodeArray(value, sortByText);
};
