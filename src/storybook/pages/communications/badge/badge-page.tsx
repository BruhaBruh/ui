import { Badge, IconButton } from '@/components';
import {
  Story,
  StoryFrame,
  StoryPlayground,
  StoryPlaygroundControls,
  StoryPlaygroundRender,
  Subtitle,
  Title,
} from '@/storybook/components';
import {
  IconMail,
  IconMessage,
  IconUsers,
  IconVideo,
} from '@tabler/icons-react';
import type React from 'react';

export const BadgePage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Badge</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          size: {
            type: 'select',
            label: 'Size of Badge',
            defaultValue: 'small',
            options: ['small', 'large'],
          },
          color: {
            type: 'select',
            label: 'Color of Badge',
            defaultValue: 'primary',
            options: [
              'primary',
              'primary-container',
              'secondary',
              'secondary-container',
              'info',
              'info-container',
              'success',
              'success-container',
              'caution',
              'caution-container',
              'critical',
              'critical-container',
            ],
          },
          value: {
            type: 'number',
            label: 'Value of Badge',
            defaultValue: 1,
          },
          maxValue: {
            type: 'number',
            label: 'Max value of Badge',
            defaultValue: 999,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ ...args }) => <Badge {...args} />}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>Colors</Subtitle>
        <StoryFrame>
          <Badge color="primary" />
          <Badge color="primary-container" />
          <Badge color="secondary" />
          <Badge color="secondary-container" />
          <Badge color="info" />
          <Badge color="info-container" />
          <Badge color="success" />
          <Badge color="success-container" />
          <Badge color="caution" />
          <Badge color="caution-container" />
          <Badge color="critical" />
          <Badge color="critical-container" />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Variants</Subtitle>
        <StoryFrame>
          <Badge size="small" />
          <Badge size="large" value={1} />
          <Badge size="large" value={500} />
          <Badge size="large" value={1000} />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>On IconButton</Subtitle>
        <StoryFrame className="gap-2xl">
          <IconButton>
            <span className="relative">
              <IconMail />
              <Badge size="large" value={1000} placement="icon" />
            </span>
          </IconButton>
          <IconButton>
            <span className="relative">
              <IconMessage />
              <Badge size="large" value={10} placement="icon" />
            </span>
          </IconButton>
          <IconButton>
            <span className="relative">
              <IconUsers />
              <Badge size="small" placement="icon" />
            </span>
          </IconButton>
          <IconButton>
            <span className="relative">
              <IconVideo />
              <Badge size="large" value={3} placement="icon" />
            </span>
          </IconButton>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>On Icons</Subtitle>
        <StoryFrame className="gap-2xl">
          <span className="relative">
            <IconMail />
            <Badge size="large" value={1000} placement="icon" />
          </span>
          <span className="relative">
            <IconMessage />
            <Badge size="large" value={10} placement="icon" />
          </span>
          <span className="relative">
            <IconUsers />
            <Badge size="small" placement="icon" />
          </span>
          <span className="relative">
            <IconVideo />
            <Badge size="large" value={3} placement="icon" />
          </span>
        </StoryFrame>
      </Story>
    </section>
  );
};
