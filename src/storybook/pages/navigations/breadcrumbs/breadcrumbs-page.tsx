import { Breadcrumbs, BreadcrumbsItem } from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import type React from 'react';

export const BreadcrumbsPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Breadcrumbs</Title>
      <Story>
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <Breadcrumbs>
            <BreadcrumbsItem>Home</BreadcrumbsItem>
            <BreadcrumbsItem>Apple</BreadcrumbsItem>
            <BreadcrumbsItem>iPhone</BreadcrumbsItem>
            <BreadcrumbsItem>15</BreadcrumbsItem>
            <BreadcrumbsItem>Pro</BreadcrumbsItem>
            <BreadcrumbsItem isActive>iPhone 15 Pro</BreadcrumbsItem>
          </Breadcrumbs>
        </StoryFrame>
      </Story>
    </section>
  );
};
