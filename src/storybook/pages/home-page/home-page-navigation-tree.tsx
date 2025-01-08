import { useNavigationTree } from '@/storybook/components';
import React from 'react';
import { HomePageNavigationTreeNode } from './home-page-navigation-tree-node';

export const HomePageNavigationTree: React.FC = () => {
  const tree = useNavigationTree(true);

  return (
    <section className="flex flex-col">
      {tree.map((node, index) => (
        <HomePageNavigationTreeNode key={node.type + index} {...node} />
      ))}
    </section>
  );
};
