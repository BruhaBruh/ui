import { Title } from '@/storybook/components';
import React from 'react';

export const RadiusPage: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-screen-lg">
      <Title>Radius</Title>
      <div className="grid grid-cols-6 gap-md">
        <div className="flex aspect-square items-center justify-center rounded-none border border-outline">
          <p className="typography-title-medium">none</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-3xs border border-outline">
          <p className="typography-title-medium">3xs</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-2xs border border-outline">
          <p className="typography-title-medium">2xs</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-xs border border-outline">
          <p className="typography-title-medium">xs</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-sm border border-outline">
          <p className="typography-title-medium">sm</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-md border border-outline">
          <p className="typography-title-medium">md</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-lg border border-outline">
          <p className="typography-title-medium">lg</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-xl border border-outline">
          <p className="typography-title-medium">xl</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-2xl border border-outline">
          <p className="typography-title-medium">2xl</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-3xl border border-outline">
          <p className="typography-title-medium">3xl</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-full border border-outline">
          <p className="typography-title-medium">full</p>
        </div>
      </div>
    </section>
  );
};
