import React from 'react';
import { Title } from '../../typography';
import { NavigationNode } from '../navigation.types';
import { NavigationPageTree } from './navigation-page-tree';

export const NavigationPage: React.FC<{ node: NavigationNode }> = ({
  node,
}) => {
  if (node.type === 'page') return node.page;

  return (
    <section className="mx-auto w-full max-w-screen-lg">
      <Title>{node.text}</Title>
      <NavigationPageTree tree={node.children} />
    </section>
  );
};
