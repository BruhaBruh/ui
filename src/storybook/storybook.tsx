import React from 'react';
import { NavigationSidebar } from './components';
import { Pages } from './pages';

export const Storybook: React.FC = () => {
  return (
    <section className="flex h-screen w-screen bg-surface text-on-surface">
      <NavigationSidebar />
      <main className="flex-1 overflow-y-auto p-lg">
        <Pages />
      </main>
    </section>
  );
};
