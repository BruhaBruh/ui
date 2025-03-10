import { Label, Subtitle, Title } from '@/storybook/components';
import { cn } from '@/utility';
import type React from 'react';

export const DurationPage: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-screen-lg">
      <Title>Duration</Title>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Short 1</Subtitle>
          <Label className="pb-0">50ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-short-1 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Short 2</Subtitle>
          <Label className="pb-0">100ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-short-2 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Short 3</Subtitle>
          <Label className="pb-0">150ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-short-3 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Short 4</Subtitle>
          <Label className="pb-0">200ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-short-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Medium 1</Subtitle>
          <Label className="pb-0">250ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-medium-1 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Medium 2</Subtitle>
          <Label className="pb-0">300ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-medium-2 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Medium 3</Subtitle>
          <Label className="pb-0">350ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-medium-3 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Medium 4</Subtitle>
          <Label className="pb-0">400ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-medium-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Long 1</Subtitle>
          <Label className="pb-0">450ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-long-1 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Long 2</Subtitle>
          <Label className="pb-0">500ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-long-2 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Long 3</Subtitle>
          <Label className="pb-0">550ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-long-3 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Long 4</Subtitle>
          <Label className="pb-0">600ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-long-4 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Extra Long 1</Subtitle>
          <Label className="pb-0">700ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-extra-long-1 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Extra Long 2</Subtitle>
          <Label className="pb-0">800ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-extra-long-2 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="mb-sm flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Extra Long 3</Subtitle>
          <Label className="pb-0">900ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-extra-long-3 bg-inverse-surface',
              'absolute inset-y-0 aspect-square rounded-full transition',
              'scale-75 group-hover:scale-100',
              'group-hover:translate-x-56',
            )}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-sm">
        <div className="w-64">
          <Subtitle className="pb-0">Extra Long 4</Subtitle>
          <Label className="pb-0">1000ms</Label>
        </div>
        <div className="group relative h-8 w-64 rounded-full border border-outline">
          <div
            className={cn(
              'ease-in-out duration-extra-long-4 bg-inverse-surface',
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
