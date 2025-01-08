import React from 'react';
import {
  NavigationBreadcrumbs,
  NavigationRoutes,
  NavigationSidebar,
} from './components';

export const Storybook: React.FC = () => {
  return (
    <section className="flex h-screen w-screen bg-surface text-on-surface">
      <NavigationSidebar />
      <main className="flex-1 overflow-y-auto p-lg">
        <NavigationBreadcrumbs />
        <NavigationRoutes />
      </main>
    </section>
  );
};
