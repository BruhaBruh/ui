import type React from 'react';
import { Route, Routes } from 'react-router';
import { NavigationPage } from '../navigation-page';
import { useNavigationTree } from '../navigation.context';
import type { NavigationNode } from '../navigation.types';

const nodesToRoutes = (
  nodes: NavigationNode[],
  startsWithToRemove = '/',
): React.ReactNode => {
  return nodes
    .map((node, index) => {
      if (node.type === 'folder') {
        return (
          <Route
            key={node.type + index}
            path={node.href.substring(startsWithToRemove.length)}
          >
            <Route index element={<NavigationPage node={node} />} />
            {nodesToRoutes(node.children, node.href + '/')}
          </Route>
        );
      }

      if (node.type === 'page') {
        return (
          <Route
            key={node.type + index}
            path={node.href.substring(startsWithToRemove.length)}
            element={<NavigationPage node={node} />}
          />
        );
      }

      return null;
    })
    .filter((v) => v);
};

export const NavigationRoutes: React.FC = () => {
  const nodes = useNavigationTree(true);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <NavigationPage
              node={{
                type: 'folder',
                text: 'Home',
                href: '/',
                children: nodes,
              }}
            />
          }
        />
        {nodesToRoutes(nodes)}
      </Routes>
    </>
  );
};
