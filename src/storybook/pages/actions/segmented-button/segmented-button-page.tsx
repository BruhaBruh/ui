import { SegmentedButton, SegmentedButtonGroup } from '@/components';
import {
  Story,
  StoryFrame,
  StoryPlayground,
  StoryPlaygroundControls,
  StoryPlaygroundRender,
  Subtitle,
  Title,
} from '@/storybook/components';
import { IconCoins, IconSquare } from '@tabler/icons-react';
import type React from 'react';

export const SegmentedButtonButtonPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>SegmentedButton</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          color: {
            type: 'select',
            label: 'Color of SegmentedButton',
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
          selectionMode: {
            type: 'select',
            label: 'Selection mode of SegmentedButtonGroup',
            defaultValue: 'single',
            options: ['single', 'multiple'],
          },
          isDisabled: {
            type: 'switch',
            label: 'Disable state of SegmentedButton',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ selectionMode, ...args }) => (
              <SegmentedButtonGroup
                selectionMode={selectionMode as 'single' | 'multiple'}
                defaultSelectedKeys={['a']}
              >
                <SegmentedButton id="a" {...args}>
                  A
                </SegmentedButton>
                <SegmentedButton id="b" {...args} isDisabled>
                  B
                </SegmentedButton>
                <SegmentedButton id="c" {...args}>
                  C
                </SegmentedButton>
                <SegmentedButton id="d" {...args}>
                  D
                </SegmentedButton>
              </SegmentedButtonGroup>
            )}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>Single And Multiple Modes</Subtitle>
        <StoryFrame>
          <SegmentedButtonGroup selectionMode="single">
            <SegmentedButton id="a">A</SegmentedButton>
            <SegmentedButton id="b">B</SegmentedButton>
            <SegmentedButton id="c">C</SegmentedButton>
          </SegmentedButtonGroup>
          <SegmentedButtonGroup selectionMode="multiple">
            <SegmentedButton id="a">A</SegmentedButton>
            <SegmentedButton id="b">B</SegmentedButton>
            <SegmentedButton id="c">C</SegmentedButton>
          </SegmentedButtonGroup>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <SegmentedButtonGroup
            defaultSelectedKeys={[
              'primary',
              'secondary',
              'info',
              'success',
              'caution',
              'critical',
              'disabled',
            ]}
            selectionMode="multiple"
          >
            <SegmentedButton color="primary" id="primary">
              Primary
            </SegmentedButton>
            <SegmentedButton color="secondary" id="secondary">
              Secondary
            </SegmentedButton>
            <SegmentedButton color="info" id="info">
              Info
            </SegmentedButton>
            <SegmentedButton color="success" id="success">
              Success
            </SegmentedButton>
            <SegmentedButton color="caution" id="caution">
              Caution
            </SegmentedButton>
            <SegmentedButton color="critical" id="critical">
              Critical
            </SegmentedButton>
            <SegmentedButton isDisabled id="disabled">
              Disabled
            </SegmentedButton>
          </SegmentedButtonGroup>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>With Icons</Subtitle>
        <StoryFrame>
          <SegmentedButtonGroup selectionMode="multiple">
            <SegmentedButton id="a">
              <IconCoins />
            </SegmentedButton>
            <SegmentedButton id="b">
              <IconCoins />
            </SegmentedButton>
            <SegmentedButton id="c">
              <IconCoins />
            </SegmentedButton>
          </SegmentedButtonGroup>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>With Custom Check Icon</Subtitle>
        <StoryFrame>
          <SegmentedButtonGroup selectionMode="multiple">
            <SegmentedButton checkIcon={<IconSquare />} id="a">
              A
            </SegmentedButton>
            <SegmentedButton checkIcon={<IconSquare />} id="b">
              B
            </SegmentedButton>
            <SegmentedButton checkIcon={<IconSquare />} id="c">
              C
            </SegmentedButton>
          </SegmentedButtonGroup>
        </StoryFrame>
      </Story>
    </section>
  );
};
