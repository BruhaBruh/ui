import { Radio, RadioGroup } from '@/components';
import {
  Story,
  StoryFrame,
  StoryPlayground,
  StoryPlaygroundControls,
  StoryPlaygroundRender,
  Subtitle,
  Title,
} from '@/storybook/components';
import React from 'react';

export const RadioPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Radio</Title>
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
            label: 'Color of Radio',
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
          isInvalid: {
            type: 'switch',
            label: 'Invalid state of Radio',
            defaultValue: false,
          },
          isReadOnly: {
            type: 'switch',
            label: 'ReadOnly state of Radio',
            defaultValue: false,
          },
          isDisabled: {
            type: 'switch',
            label: 'Disable state of Radio',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ isReadOnly, isInvalid, children, ...args }) => {
              return (
                <RadioGroup
                  isReadOnly={isReadOnly as boolean}
                  isInvalid={isInvalid as boolean}
                >
                  <Radio {...args} value="a">
                    {children as React.ReactNode}
                  </Radio>
                  <Radio {...args} value="b">
                    {children as React.ReactNode}
                  </Radio>
                  <Radio {...args} value="c">
                    {children as React.ReactNode}
                  </Radio>
                </RadioGroup>
              );
            }}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>Group</Subtitle>
        <StoryFrame>
          <RadioGroup label="Radio Group" description="Radio Description">
            <Radio value="a">Example</Radio>
            <Radio value="b">Example</Radio>
            <Radio value="c">Example</Radio>
          </RadioGroup>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>States</Subtitle>
        <StoryFrame>
          <RadioGroup className="flex-row">
            <Radio aria-label="Test" value="a" />
            <Radio aria-label="Test" value="b" />
            <Radio isDisabled aria-label="Test" value="a" />
            <Radio isDisabled aria-label="Test" value="b" />
          </RadioGroup>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <RadioGroup className="flex-row">
            <Radio color="primary" aria-label="Test" value="a" />
            <Radio color="secondary" aria-label="Test" value="b" />
            <Radio color="info" aria-label="Test" value="c" />
            <Radio color="success" aria-label="Test" value="d" />
            <Radio color="caution" aria-label="Test" value="e" />
            <Radio color="critical" aria-label="Test" value="f" />
          </RadioGroup>
        </StoryFrame>
      </Story>
    </section>
  );
};
