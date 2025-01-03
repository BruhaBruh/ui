import { Title } from '@/storybook/components';
import React from 'react';

export const ElevationPage: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-screen-lg">
      <Title>Elevation</Title>
      <div className="grid grid-cols-6 gap-md">
        <div className="flex aspect-square items-center justify-center rounded-none elevation-0">
          <p className="typography-title-medium">0</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-none elevation-1">
          <p className="typography-title-medium">1</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-none elevation-2">
          <p className="typography-title-medium">2</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-none elevation-3">
          <p className="typography-title-medium">3</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-none elevation-4">
          <p className="typography-title-medium">4</p>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-none elevation-5">
          <p className="typography-title-medium">5</p>
        </div>
      </div>
    </section>
  );
};
