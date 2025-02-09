import { Checkbox } from '@/components';
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

export const CheckboxPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Checkbox</Title>
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
            label: 'Color of Checkbox',
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
            label: 'Invalid state of Checkbox',
            defaultValue: false,
          },
          isReadOnly: {
            type: 'switch',
            label: 'ReadOnly state of Checkbox',
            defaultValue: false,
          },
          isIndeterminate: {
            type: 'switch',
            label: 'Indeterminate state of Checkbox',
            defaultValue: false,
          },
          isDisabled: {
            type: 'switch',
            label: 'Disable state of Checkbox',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ children, ...args }) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [selected, setSelected] = React.useState<string[]>([]);

              return (
                <section
                  role="group"
                  className="flex flex-col items-center justify-center gap-3xs"
                >
                  <Checkbox
                    {...args}
                    value="a"
                    isSelected={selected.includes('a')}
                    onChange={(isSelected) => {
                      if (isSelected) {
                        setSelected((p) => [
                          ...p.filter((v) => v !== 'a'),
                          'a',
                        ]);
                      } else {
                        setSelected((p) => p.filter((v) => v !== 'a'));
                      }
                    }}
                  >
                    {children as React.ReactNode}
                  </Checkbox>
                  <Checkbox
                    {...args}
                    value="b"
                    isSelected={selected.includes('b')}
                    onChange={(isSelected) => {
                      if (isSelected) {
                        setSelected((p) => [
                          ...p.filter((v) => v !== 'b'),
                          'b',
                        ]);
                      } else {
                        setSelected((p) => p.filter((v) => v !== 'b'));
                      }
                    }}
                  >
                    {children as React.ReactNode}
                  </Checkbox>
                  <Checkbox
                    {...args}
                    value="c"
                    isSelected={selected.includes('c')}
                    onChange={(isSelected) => {
                      if (isSelected) {
                        setSelected((p) => [
                          ...p.filter((v) => v !== 'c'),
                          'c',
                        ]);
                      } else {
                        setSelected((p) => p.filter((v) => v !== 'c'));
                      }
                    }}
                  >
                    {children as React.ReactNode}
                  </Checkbox>
                </section>
              );
            }}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>Group</Subtitle>
        <StoryFrame>
          <section
            role="group"
            className="flex flex-col items-center justify-center gap-3xs"
          >
            <Checkbox value="a" isSelected>
              Example
            </Checkbox>
            <Checkbox value="b" isIndeterminate>
              Example
            </Checkbox>
            <Checkbox value="c">Example</Checkbox>
          </section>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>States</Subtitle>
        <StoryFrame>
          <Checkbox aria-label="Test" value="a" isSelected />
          <Checkbox aria-label="Test" value="b" isIndeterminate />
          <Checkbox aria-label="Test" value="c" />
          <Checkbox isDisabled aria-label="Test" value="a" isSelected />
          <Checkbox isDisabled aria-label="Test" value="b" isIndeterminate />
          <Checkbox isDisabled aria-label="Test" value="c" />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <Checkbox color="primary" aria-label="Test" value="a" isSelected />
          <Checkbox color="secondary" aria-label="Test" value="b" isSelected />
          <Checkbox color="info" aria-label="Test" value="c" isSelected />
          <Checkbox color="success" aria-label="Test" value="d" isSelected />
          <Checkbox color="caution" aria-label="Test" value="e" isSelected />
          <Checkbox color="critical" aria-label="Test" value="f" isSelected />
        </StoryFrame>
      </Story>
    </section>
  );
};
