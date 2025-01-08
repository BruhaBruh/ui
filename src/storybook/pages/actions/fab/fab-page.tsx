import { Fab } from '@/components';
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

export const FabPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Fab</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          size: {
            type: 'select',
            label: 'Size of FAB',
            defaultValue: 'md',
            options: ['sm', 'md', 'lg'],
          },
          color: {
            type: 'select',
            label: 'Color of FAB',
            defaultValue: 'surface',
            options: [
              'surface',
              'primary',
              'secondary',
              'info',
              'success',
              'caution',
              'critical',
            ],
          },
          lowered: {
            type: 'switch',
            label: 'Is lowered state',
            defaultValue: false,
          },
          icon: {
            type: 'select',
            label: 'Icon',
            defaultValue: 'square',
            options: ['square', 'circle'],
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ icon, ...args }) => (
              <Fab {...args}>
                {icon === 'square' && <IconSquare />}
                {icon === 'circle' && <IconCircle />}
              </Fab>
            )}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>As link</Subtitle>
        <StoryFrame>
          <Fab asChild>
            <NavLink to="#navigated">
              <IconSquare />
            </NavLink>
          </Fab>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <Fab color="surface">
            <IconSquare />
          </Fab>
          <Fab color="primary">
            <IconSquare />
          </Fab>
          <Fab color="secondary">
            <IconSquare />
          </Fab>
          <Fab color="info">
            <IconSquare />
          </Fab>
          <Fab color="success">
            <IconSquare />
          </Fab>
          <Fab color="caution">
            <IconSquare />
          </Fab>
          <Fab color="critical">
            <IconSquare />
          </Fab>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Sizes</Subtitle>
        <StoryFrame>
          <Fab size="sm">
            <IconSquare />
          </Fab>
          <Fab size="md">
            <IconSquare />
          </Fab>
          <Fab size="lg">
            <IconSquare />
          </Fab>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Lowered</Subtitle>
        <StoryFrame>
          <Fab>
            <IconSquare />
          </Fab>
          <Fab lowered>
            <IconSquare />
          </Fab>
        </StoryFrame>
      </Story>
    </section>
  );
};
