import type React from 'react';
import type { NavigationNode } from '../navigation.types';
import { NavigatioPageTreeNode } from './navigation-page-tree-node';

export const NavigationPageTree: React.FC<{
  tree: NavigationNode[];
}> = ({ tree }) => {
  return (
    <section className="flex flex-col">
      {tree.map((node, index) => (
        <NavigatioPageTreeNode key={node.type + index} {...node} />
      ))}
    </section>
  );
};
