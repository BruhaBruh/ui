import React from 'react';
import {
  NavigationBreadcrumbs,
  NavigationRoutes,
  NavigationSidebar,
} from './components';

export const Storybook: React.FC = () => {
  return (
    <section className="flex min-h-screen w-screen bg-surface text-on-surface">
      <NavigationSidebar />
      <main className="flex-1 p-lg">
        <NavigationBreadcrumbs />
        <NavigationRoutes />
      </main>
    </section>
  );
};
