import { TextField } from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import { IconSearch, IconXboxX } from '@tabler/icons-react';
import React from 'react';

export const TextFieldPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>TextField</Title>
      <Story className="mb-md">
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <TextField />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Disabled</Subtitle>
        <StoryFrame>
          <TextField
            label="Preferred contact method"
            description="Supporting text"
            left={<IconSearch />}
            right={<IconXboxX />}
            isDisabled
            value="Example"
          />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>With icons</Subtitle>
        <StoryFrame>
          <TextField
            label="Preferred contact method"
            description="Supporting text"
            left={<IconSearch />}
            right={<IconXboxX />}
          />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>With placeholder</Subtitle>
        <StoryFrame>
          <TextField
            label="Preferred contact method"
            description="Supporting text"
            placeholder="Placeholder..."
          />
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>With error messsage</Subtitle>
        <StoryFrame>
          <TextField
            label="Preferred contact method"
            errorMessage="Supporting text"
            isInvalid
          />
        </StoryFrame>
      </Story>
    </section>
  );
};
