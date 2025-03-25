import { Button, Card, IconButton } from '@/components';
import {
  Story,
  StoryFrame,
  StoryPlayground,
  StoryPlaygroundControls,
  StoryPlaygroundRender,
  Subtitle,
  Title,
} from '@/storybook/components';
import { IconDotsVertical } from '@tabler/icons-react';
import type React from 'react';

const VerticalContent = () => {
  return (
    <>
      <section className="py-sm pl-md pr-2xs items-center flex">
        <section className="flex items-center gap-md flex-1">
          <figure className="size-10 rounded-full bg-primary-container text-on-primary-container transition duration-medium-1 easing-standard flex items-center justify-center">
            A
          </figure>
          <section className="grid gap-2xs">
            <p className="typography-title-medium">Header</p>
            <p className="typography-body-medium">Subhead</p>
          </section>
        </section>
        <IconButton color="secondary">
          <IconDotsVertical />
        </IconButton>
      </section>
      <figure className="aspect-video z-2 relative overflow-hidden">
        <img
          className="absolute object-conver inset-0 max-w-full max-h-full"
          src="https://placehold.co/720x360"
          alt=""
        />
      </figure>
      <section className="p-md grid gap-xl">
        <section>
          <p className="typography-body-large">Title</p>
          <p className="typography-body-medium text-on-surface-variant">
            Subtitle
          </p>
        </section>
        <p className="typography-body-medium text-on-surface-variant">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <section className="flex justify-end gap-xs">
          <Button variant="outlined">Action</Button>
          <Button variant="filled">Action</Button>
        </section>
      </section>
    </>
  );
};

const HorizontalContent = () => {
  return (
    <>
      <section className="flex">
        <section className="p-md flex items-center gap-md flex-1">
          <figure className="size-10 rounded-full bg-primary-container text-on-primary-container transition duration-medium-1 easing-standard flex items-center justify-center">
            A
          </figure>
          <section className="grid gap-2xs">
            <p className="typography-title-medium">Header</p>
            <p className="typography-body-medium">Subhead</p>
          </section>
        </section>
        <figure className="block h-20 z-2 aspect-square relative overflow-hidden">
          <img
            className="absolute object-conver inset-0 max-w-full max-h-full"
            src="https://placehold.co/128x128"
            alt=""
          />
        </figure>
      </section>
    </>
  );
};

export const CardPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Card</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          variant: {
            type: 'select',
            label: 'Variant of Card',
            defaultValue: 'elevated',
            options: ['elevated', 'filled', 'outlined', 'none'],
          },
          color: {
            type: 'select',
            label: 'Color of Card',
            defaultValue: 'standard',
            options: [
              'standard',
              'primary',
              'secondary',
              'info',
              'success',
              'caution',
              'critical',
            ],
          },
          isInteractable: {
            type: 'switch',
            label: 'Interactable state of Card',
            defaultValue: false,
          },
          isDisabled: {
            type: 'switch',
            label: 'Disable state of Card',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {(args) => (
              <section className="grid gap-xs">
                <Card {...args} className="w-96">
                  <VerticalContent />
                </Card>
                <Card {...args} className="w-96">
                  <HorizontalContent />
                </Card>
              </section>
            )}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>Elevated</Subtitle>
        <StoryFrame>
          <Card className="w-96">
            <HorizontalContent />
          </Card>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Filled</Subtitle>
        <StoryFrame>
          <Card variant="filled" className="w-96">
            <HorizontalContent />
          </Card>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Outlined</Subtitle>
        <StoryFrame>
          <Card variant="outlined" className="w-96">
            <HorizontalContent />
          </Card>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>None</Subtitle>
        <StoryFrame>
          <Card variant="none" className="w-96">
            <HorizontalContent />
          </Card>
        </StoryFrame>
      </Story>
    </section>
  );
};
