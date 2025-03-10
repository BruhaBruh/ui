import { Label, Subtitle, Title } from '@/storybook/components';
import { cn } from '@/utility';
import type React from 'react';

export const EasingPage: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-screen-lg">
      <Title>Easing</Title>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-96">
          <Subtitle className="pb-0">Standard</Subtitle>
          <Label className="pb-0">cubic-bezier(0.2, 0.0, 0, 1.0)</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'easing-standard duration-extra-long-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-96">
          <Subtitle className="pb-0">Standard Accelerate</Subtitle>
          <Label className="pb-0">cubic-bezier(0.3, 0, 1, 1)</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'easing-standard-accelerate duration-extra-long-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-96">
          <Subtitle className="pb-0">Standard Decelerate</Subtitle>
          <Label className="pb-0">cubic-bezier(0, 0, 0, 1)</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'easing-standard-decelerate duration-extra-long-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-96">
          <Subtitle className="pb-0">Emphasized</Subtitle>
          <Label className="pb-0">cubic-bezier(0.2, 0.0, 0, 1.0)</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'easing-emphasized duration-extra-long-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-96">
          <Subtitle className="pb-0">Emphasized Accelerate</Subtitle>
          <Label className="pb-0">cubic-bezier(0.3, 0.0, 0.8, 0.15)</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'easing-emphasized-accelerate duration-extra-long-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-sm">
        <div className="w-96">
          <Subtitle className="pb-0">Emphasized Decelerate</Subtitle>
          <Label className="pb-0">cubic-bezier(0.05, 0.7, 0.1, 1.0)</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'easing-emphasized-decelerate duration-extra-long-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
    </section>
  );
};
