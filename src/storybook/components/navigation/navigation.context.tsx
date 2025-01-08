import React from 'react';
import { NavigationNode } from './navigation.types';

export const NavigationContext = React.createContext<NavigationNode[]>([]);

const mapWithFullHref = (value: NavigationNode[], baseHref = '') => {
  return value.map((v): NavigationNode => {
    const href = `${baseHref}${v.href}`;
    if (v.type !== 'folder')
      return {
        ...v,
        href,
      };
    return {
      ...v,
      href,
      children: mapWithFullHref(v.children, href),
    };
  });
};

export const NavigationProvider: React.FC<
  React.PropsWithChildren<{
    value: NavigationNode[];
  }>
> = ({ value, children }) => {
  return (
    <NavigationContext.Provider value={mapWithFullHref(value)}>
      {children}
    </NavigationContext.Provider>
  );
};

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

export const useNavigationTree = (sortByText = false) => {
  const value = React.useContext(NavigationContext);
  return sortNodeArray(value, sortByText);
};

const groupByHref = (
  nodes: NavigationNode[],
): Record<string, NavigationNode> => {
  const group: Record<string, NavigationNode> = {};

  nodes.forEach((node) => {
    group[node.href] = node;
    if (node.type !== 'folder') return;
    Object.entries(groupByHref(node.children)).forEach(([key, value]) => {
      group[key] = value;
    });
  });

  return group;
};

export const useNavigationNodeByHref = (
  href: string,
): NavigationNode | null => {
  const value = React.useContext(NavigationContext);
  const grouped = groupByHref(value);

  return grouped[href] ?? null;
};

export const useNavigationNodesByHref = (
  hrefToFound: string,
): Omit<NavigationNode, 'children'>[] => {
  const value = React.useContext(NavigationContext);
  const grouped = groupByHref(value);

  const hrefs = hrefToFound
    .split('/')
    .filter((v) => v)
    .map((v) => `/${v}`)
    .map((part, index, arr) => `${arr.slice(0, index).join('')}${part}`);

  return hrefs
    .map((href) => grouped[href] ?? null)
    .filter((v) => v)
    .map((v) => ({
      type: v.type,
      text: v.text,
      icon: v.icon,
      href: v.href,
    }));
};
