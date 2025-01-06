import { Button, ButtonLeftIcon, ButtonRightIcon } from '@/components';
import {
  Story,
  StoryFrame,
  StoryPlayground,
  StoryPlaygroundControls,
  StoryPlaygroundRender,
  Subtitle,
  Title,
} from '@/storybook/components';
import { IconCircle, IconSquare } from '@tabler/icons-react';
import React from 'react';
import { NavLink } from 'react-router';

export const ButtonPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Actions/Button</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          children: {
            type: 'text',
            label: 'Text',
            defaultValue: 'Button',
          },
          variant: {
            type: 'select',
            label: 'Variant of Button',
            defaultValue: 'elevated',
            options: ['elevated', 'filled', 'tonal', 'outlined', 'text'],
          },
          color: {
            type: 'select',
            label: 'Color of Button',
            defaultValue: 'primary',
            options: [
              'primary',
              'secondary',
              'info',
              'success',
              'caution',
              'critical',
            ],
          },
          leftIcon: {
            type: 'select',
            label: 'Left icon',
            defaultValue: 'none',
            options: ['square', 'circle', 'none'],
          },
          rightIcon: {
            type: 'select',
            label: 'Right icon',
            defaultValue: 'none',
            options: ['square', 'circle', 'none'],
          },
          isDisabled: {
            type: 'switch',
            label: 'Disable state of Button',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ leftIcon, rightIcon, children, ...args }) => (
              <Button {...args}>
                {leftIcon === 'square' && (
                  <ButtonLeftIcon>
                    <IconSquare key={leftIcon} />
                  </ButtonLeftIcon>
                )}
                {leftIcon === 'circle' && (
                  <ButtonLeftIcon>
                    <IconCircle key={leftIcon} />
                  </ButtonLeftIcon>
                )}
                {children as React.ReactNode}
                {rightIcon === 'square' && (
                  <ButtonRightIcon>
                    <IconSquare key={rightIcon} />
                  </ButtonRightIcon>
                )}
                {rightIcon === 'circle' && (
                  <ButtonRightIcon>
                    <IconCircle key={rightIcon} />
                  </ButtonRightIcon>
                )}
              </Button>
            )}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>As link</Subtitle>
        <StoryFrame>
          <Button asChild>
            <NavLink to="#navigated">Button</NavLink>
          </Button>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <Button color="primary">Button</Button>
          <Button color="secondary">Button</Button>
          <Button color="info">Button</Button>
          <Button color="success">Button</Button>
          <Button color="caution">Button</Button>
          <Button color="critical">Button</Button>
          <Button isDisabled>Button</Button>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Variants</Subtitle>
        <StoryFrame>
          <Button variant="elevated">Button</Button>
          <Button variant="filled">Button</Button>
          <Button variant="tonal">Button</Button>
          <Button variant="outlined">Button</Button>
          <Button variant="text">Button</Button>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>With Icons</Subtitle>
        <StoryFrame>
          <div className="flex flex-col items-center gap-md">
            <Button>
              <ButtonLeftIcon>
                <IconSquare />
              </ButtonLeftIcon>
              Button
            </Button>
            <Button className="w-64">
              <ButtonLeftIcon>
                <IconSquare />
              </ButtonLeftIcon>
              Button
            </Button>
          </div>
          <div className="flex flex-col items-center gap-md">
            <Button>
              <ButtonLeftIcon>
                <IconSquare />
              </ButtonLeftIcon>
              Button
              <ButtonRightIcon>
                <IconSquare />
              </ButtonRightIcon>
            </Button>
            <Button className="w-64">
              <ButtonLeftIcon>
                <IconSquare />
              </ButtonLeftIcon>
              Button
              <ButtonRightIcon>
                <IconSquare />
              </ButtonRightIcon>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-md">
            <Button>
              Button
              <ButtonRightIcon>
                <IconSquare />
              </ButtonRightIcon>
            </Button>
            <Button className="w-64">
              Button
              <ButtonRightIcon>
                <IconSquare />
              </ButtonRightIcon>
            </Button>
          </div>
        </StoryFrame>
      </Story>
    </section>
  );
};
