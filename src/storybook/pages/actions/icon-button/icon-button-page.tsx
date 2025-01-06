import { IconButton } from '@/components';
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

export const IconButtonPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Actions/IconButton</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          variant: {
            type: 'select',
            label: 'Variant of IconButton',
            defaultValue: 'standard',
            options: ['standard', 'filled', 'tonal', 'outlined'],
          },
          color: {
            type: 'select',
            label: 'Color of IconButton',
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
          icon: {
            type: 'select',
            label: 'Icon',
            defaultValue: 'square',
            options: ['square', 'circle'],
          },
          isToggleable: {
            type: 'switch',
            label: 'Toggleable state of IconButton',
            defaultValue: false,
          },
          isSelected: {
            type: 'switch',
            label: 'Selected state of toggleable IconButton',
            defaultValue: false,
          },
          isDisabled: {
            type: 'switch',
            label: 'Disable state of IconButton',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ icon, ...args }) => (
              <IconButton {...args}>
                {icon === 'square' && <IconSquare />}
                {icon === 'circle' && <IconCircle />}
              </IconButton>
            )}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>As link</Subtitle>
        <StoryFrame>
          <IconButton asChild>
            <NavLink to="#navigated">
              <IconSquare />
            </NavLink>
          </IconButton>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <IconButton color="primary">
            <IconSquare />
          </IconButton>
          <IconButton color="secondary">
            <IconSquare />
          </IconButton>
          <IconButton color="info">
            <IconSquare />
          </IconButton>
          <IconButton color="success">
            <IconSquare />
          </IconButton>
          <IconButton color="caution">
            <IconSquare />
          </IconButton>
          <IconButton color="critical">
            <IconSquare />
          </IconButton>
          <IconButton isDisabled>
            <IconSquare />
          </IconButton>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Variants</Subtitle>
        <StoryFrame>
          <IconButton variant="standard">
            <IconSquare />
          </IconButton>
          <IconButton variant="filled">
            <IconSquare />
          </IconButton>
          <IconButton variant="tonal">
            <IconSquare />
          </IconButton>
          <IconButton variant="outlined">
            <IconSquare />
          </IconButton>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Toggleable</Subtitle>
        <StoryFrame className="flex-col">
          <div className="flex items-center justify-center gap-md">
            <IconButton isToggleable variant="standard">
              <IconSquare />
            </IconButton>
            <IconButton isToggleable variant="filled">
              <IconSquare />
            </IconButton>
            <IconButton isToggleable variant="tonal">
              <IconSquare />
            </IconButton>
            <IconButton isToggleable variant="outlined">
              <IconSquare />
            </IconButton>
          </div>
          <div className="flex items-center justify-center gap-md">
            <IconButton isToggleable isSelected variant="standard">
              <IconSquare />
            </IconButton>
            <IconButton isToggleable isSelected variant="filled">
              <IconSquare />
            </IconButton>
            <IconButton isToggleable isSelected variant="tonal">
              <IconSquare />
            </IconButton>
            <IconButton isToggleable isSelected variant="outlined">
              <IconSquare />
            </IconButton>
          </div>
        </StoryFrame>
      </Story>
    </section>
  );
};
