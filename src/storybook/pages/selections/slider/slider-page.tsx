import { Slider } from '@/components';
import {
  Story,
  StoryFrame,
  StoryPlayground,
  StoryPlaygroundControls,
  StoryPlaygroundRender,
  Subtitle,
  Title,
} from '@/storybook/components';
import type React from 'react';

export const SliderPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Slider</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          variant: {
            type: 'select',
            label: 'Variant of Slider',
            defaultValue: 'continuous',
            options: ['continuous', 'centered'],
          },
          color: {
            type: 'select',
            label: 'Color of Slider',
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
          isDisabled: {
            type: 'switch',
            label: 'Disable state of Slider',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {(args) => {
              return <Slider {...args} className="w-64" />;
            }}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame className="flex-col">
          <Slider color="primary" defaultValue={50} className="w-64" />
          <Slider color="secondary" defaultValue={50} className="w-64" />
          <Slider color="info" defaultValue={50} className="w-64" />
          <Slider color="success" defaultValue={50} className="w-64" />
          <Slider color="caution" defaultValue={50} className="w-64" />
          <Slider color="critical" defaultValue={50} className="w-64" />
          <Slider isDisabled defaultValue={50} className="w-64" />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Centered</Subtitle>
        <StoryFrame>
          <Slider
            variant="centered"
            minValue={-50}
            maxValue={50}
            defaultValue={0}
            className="w-64"
          />
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Multiple</Subtitle>
        <StoryFrame>
          <Slider defaultValue={[25, 75]} className="w-64" />
        </StoryFrame>
      </Story>
    </section>
  );
};
