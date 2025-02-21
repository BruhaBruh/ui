import React from 'react';
import { NavigationSidebarHeader } from './navigation-sidebar-header';
import { NavigationTree } from './navigation-tree';

export const NavigationSidebar: React.FC = () => {
  return (
    <aside className="text-on-surface-container sticky top-0 flex h-screen w-full max-w-64 flex-col items-stretch justify-start elevation-1 bg-surface-container">
      <NavigationSidebarHeader />
      <hr className="border-outline-variant" />
      <NavigationTree />
    </aside>
  );
};
