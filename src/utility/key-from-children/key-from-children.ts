import React from 'react';

export const keyFromChildren = (children: React.ReactNode): string => {
  const childrenString =
    React.Children.map(children, (child) => {
      if (React.isValidElement<React.PropsWithChildren>(child)) {
        return JSON.stringify({
          type: child.type,
          // props: child.props,
          key: child.key,
        });
      }
      return String(child);
    })?.join('') ?? '';

  let hash = 0;
  for (let i = 0; i < childrenString.length; i++) {
    const char = childrenString.charCodeAt(i);
    hash = (hash * 31 + char) % 1_000_000_007;
  }

  return hash.toString(16);
};
