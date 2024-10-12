import React from 'react';

export const childrenUnwrapper = (
  children: React.ReactNode,
  render: (children: React.ReactNode) => React.ReactNode,
) => {
  if (!React.isValidElement(children)) return render(children);

  return React.cloneElement(
    children,
    children.props,
    render(children.props.children),
  );
};
