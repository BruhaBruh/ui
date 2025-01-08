import React from 'react';
import { useNavigationTree } from '../navigation.context';
import { NavigationTreeNode } from './navigation-tree-node';

export const NavigationTree: React.FC = () => {
  const tree = useNavigationTree(true);

  return (
    <section className="flex flex-col overflow-y-auto overflow-x-hidden p-sm">
      {tree.map((node, index) => (
        <NavigationTreeNode key={node.type + index} {...node} />
      ))}
    </section>
  );
};
