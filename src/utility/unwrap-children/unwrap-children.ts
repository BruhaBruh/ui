import type { UnknownRecord } from '@bruhabruh/type-safe';
import React from 'react';

export const unwrapChildren = (
  node: React.ReactNode,
  render: (children: React.ReactNode) => React.ReactNode,
  ignore = false,
) => {
  if (
    !React.isValidElement<React.PropsWithChildren<UnknownRecord>>(node) ||
    ignore
  )
    return render(node);

  return React.cloneElement(node, node.props, render(node.props.children));
};
