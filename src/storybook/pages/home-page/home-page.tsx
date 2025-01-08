import { Title } from '@/storybook/components';
import React from 'react';
import { HomePageNavigationTree } from './home-page-navigation-tree';

export const HomePage: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-prose">
      <Title>Home Page</Title>
      <HomePageNavigationTree />
    </section>
  );
};
