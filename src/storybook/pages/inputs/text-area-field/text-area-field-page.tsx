import { TextAreaField } from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import { IconSearch, IconXboxX } from '@tabler/icons-react';
import type React from 'react';

export const TextAreaFieldPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>TextAreaField</Title>
      <Story className="mb-md">
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <TextAreaField />
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Disabled</Subtitle>
        <StoryFrame>
          <TextAreaField
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
          <TextAreaField
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
          <TextAreaField
            label="Preferred contact method"
            description="Supporting text"
            placeholder="Placeholder..."
          />
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>With error messsage</Subtitle>
        <StoryFrame>
          <TextAreaField
            label="Preferred contact method"
            errorMessage="Supporting text"
            isInvalid
          />
        </StoryFrame>
      </Story>
    </section>
  );
};
