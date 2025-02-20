import { Switch, SwitchSelectedIcon, SwitchUnselectedIcon } from '@/components';
import {
  Story,
  StoryFrame,
  StoryPlayground,
  StoryPlaygroundControls,
  StoryPlaygroundRender,
  Subtitle,
  Title,
} from '@/storybook/components';
import { IconCheck, IconX } from '@tabler/icons-react';
import React from 'react';

export const SwitchPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Switch</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          children: {
            type: 'text',
            label: 'Text',
            defaultValue: 'Label',
          },
          color: {
            type: 'select',
            label: 'Color of Switch',
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
          isSelected: {
            type: 'switch',
            label: 'Selected state of Switch',
            defaultValue: false,
          },
          isDisabled: {
            type: 'switch',
            label: 'Disable state of Switch',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ children, ...args }) => {
              return (
                <Switch {...args} value="a">
                  {children as React.ReactNode}
                </Switch>
              );
            }}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>States</Subtitle>
        <StoryFrame>
          <Switch isSelected={false} />
          <Switch isSelected />
          <Switch isDisabled />
          <Switch isDisabled isSelected />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <Switch color="primary" isSelected />
          <Switch color="secondary" isSelected />
          <Switch color="info" isSelected />
          <Switch color="success" isSelected />
          <Switch color="caution" isSelected />
          <Switch color="critical" isSelected />
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>With icons</Subtitle>
        <StoryFrame>
          <Switch>
            <SwitchUnselectedIcon>
              <IconX />
            </SwitchUnselectedIcon>
          </Switch>
          <Switch>
            <SwitchUnselectedIcon>
              <IconX />
            </SwitchUnselectedIcon>
            <SwitchSelectedIcon>
              <IconCheck />
            </SwitchSelectedIcon>
          </Switch>
          <Switch>
            <SwitchSelectedIcon>
              <IconCheck />
            </SwitchSelectedIcon>
          </Switch>
        </StoryFrame>
      </Story>
    </section>
  );
};
