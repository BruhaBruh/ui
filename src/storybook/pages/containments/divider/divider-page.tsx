import { Divider } from '@/components';
import {
  Story,
  StoryFrame,
  StoryPlayground,
  StoryPlaygroundControls,
  StoryPlaygroundRender,
  Subtitle,
  Title,
} from '@/storybook/components';
import { cn } from '@/utility';
import type React from 'react';

export const DividerPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Divider</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          orientation: {
            type: 'select',
            label: 'Orientation of Divider',
            defaultValue: 'horizontal',
            options: ['horizontal', 'vertical'],
          },
          inset: {
            type: 'switch',
            label: 'Inset state of Divider',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ ...args }) => (
              <section
                className={cn(
                  'inline-flex items-center justify-center gap-md',
                  args.orientation === 'vertical' && 'h-12',
                  args.orientation === 'horizontal' && 'w-24 flex-col',
                )}
              >
                <span>One</span>
                <Divider {...args} />
                <span>Two</span>
                <Divider {...args} />
                <span>Three</span>
                <Divider {...args} />
                <span>Four</span>
              </section>
            )}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>Vertical Orientation</Subtitle>
        <StoryFrame>
          <section className="inline-flex h-12 items-center justify-center gap-md">
            <span>One</span>
            <Divider orientation="vertical" inset />
            <span>Two</span>
            <Divider orientation="vertical" />
            <span>Three</span>
            <Divider orientation="vertical" inset />
            <span>Four</span>
          </section>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Horizontal Orientation</Subtitle>
        <StoryFrame>
          <section className="inline-flex w-24 flex-col items-center justify-center gap-md">
            <span>One</span>
            <Divider orientation="horizontal" inset />
            <span>Two</span>
            <Divider orientation="horizontal" />
            <span>Three</span>
            <Divider orientation="horizontal" inset />
            <span>Four</span>
          </section>
        </StoryFrame>
      </Story>
    </section>
  );
};
