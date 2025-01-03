import { ExtendedFab, ExtendedFabIcon } from '@/components';
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

export const ExtendedFabPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Actions/ExtendedFab</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          children: {
            type: 'text',
            label: 'Text',
            defaultValue: 'Extended Fab',
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
          icon: {
            type: 'select',
            label: 'Icon',
            defaultValue: 'none',
            options: ['none', 'square', 'circle'],
          },
          lowered: {
            type: 'switch',
            label: 'Is lowered state',
            defaultValue: false,
          },
          asFab: {
            type: 'switch',
            label: 'As fab',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ icon, children, ...args }) => (
              <ExtendedFab {...args}>
                <ExtendedFabIcon>
                  {icon === 'square' && <IconSquare />}
                  {icon === 'circle' && <IconCircle />}
                </ExtendedFabIcon>
                {children as React.ReactNode}
              </ExtendedFab>
            )}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>As link</Subtitle>
        <StoryFrame>
          <ExtendedFab asChild>
            <NavLink to="#navigated">Extended Fab</NavLink>
          </ExtendedFab>
          <ExtendedFab asChild>
            <NavLink to="#navigated">
              <ExtendedFabIcon>
                <IconSquare />
              </ExtendedFabIcon>
              Extended Fab
            </NavLink>
          </ExtendedFab>
          <ExtendedFab asFab asChild>
            <NavLink to="#navigated">
              <ExtendedFabIcon>
                <IconSquare />
              </ExtendedFabIcon>
            </NavLink>
          </ExtendedFab>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <ExtendedFab color="surface">
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
          <ExtendedFab color="primary">
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
          <ExtendedFab color="secondary">
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
          <ExtendedFab color="info">
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
          <ExtendedFab color="success">
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
          <ExtendedFab color="caution">
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
          <ExtendedFab color="critical">
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Lowered</Subtitle>
        <StoryFrame>
          <ExtendedFab>
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
          <ExtendedFab lowered>
            <ExtendedFabIcon>
              <IconSquare />
            </ExtendedFabIcon>
            Extended Fab
          </ExtendedFab>
        </StoryFrame>
      </Story>
    </section>
  );
};
