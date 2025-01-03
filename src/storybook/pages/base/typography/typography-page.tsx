import { Title } from '@/storybook/components';
import React from 'react';

export const TypographyPage: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-screen-lg">
      <Title>Typography</Title>
      <div className="mb-md rounded-lg border border-outline p-lg">
        <p className="typography-display-large">Display Large</p>
        <p className="typography-display-medium">Display Medium</p>
        <p className="typography-display-small">Display Small</p>
      </div>
      <div className="mb-md rounded-lg border border-outline p-lg">
        <p className="typography-headline-large">Headline Large</p>
        <p className="typography-headline-medium">Headline Medium</p>
        <p className="typography-headline-small">Headline Small</p>
      </div>
      <div className="mb-md rounded-lg border border-outline p-lg">
        <p className="typography-title-large">Title Large</p>
        <p className="typography-title-medium">Title Medium</p>
        <p className="typography-title-small">Title Small</p>
      </div>
      <div className="mb-md rounded-lg border border-outline p-lg">
        <p className="typography-label-large">Label Large</p>
        <p className="typography-label-medium">Label Medium</p>
        <p className="typography-label-small">Label Small</p>
      </div>
      <div className="mb-md rounded-lg border border-outline p-lg">
        <p className="typography-body-large">Body Large</p>
        <p className="typography-body-medium">Body Medium</p>
        <p className="typography-body-small">Body Small</p>
      </div>
    </section>
  );
};
