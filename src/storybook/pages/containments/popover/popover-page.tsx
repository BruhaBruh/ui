import type { PopoverContentProps } from '@/components';
import {
  Button,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import {
  IconChevronDown,
  IconChevronDownLeft,
  IconChevronDownRight,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronUpLeft,
  IconChevronUpRight,
} from '@tabler/icons-react';
import type React from 'react';

const PopoverStory: React.FC<
  Pick<PopoverContentProps, 'position' | 'children'>
> = ({ position, children }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton>{children}</IconButton>
      </PopoverTrigger>
      <PopoverContent
        position={position}
        className="rounded-xs px-xs py-2xs typography-label-medium bg-inverse-surface text-inverse-on-surface"
      >
        Hello, world!
      </PopoverContent>
    </Popover>
  );
};

export const PopoverPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Popover</Title>
      <Story className="mb-md">
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <Popover>
            <PopoverTrigger>
              <Button>Open</Button>
            </PopoverTrigger>
            <PopoverContent className="rounded-xs px-xs py-2xs typography-label-medium bg-inverse-surface text-inverse-on-surface">
              Hello, world!
            </PopoverContent>
          </Popover>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Positions</Subtitle>
        <StoryFrame>
          <PopoverStory position="top-start">
            <IconChevronUpLeft />
          </PopoverStory>
          <PopoverStory position="top">
            <IconChevronUp />
          </PopoverStory>
          <PopoverStory position="top-end">
            <IconChevronUpRight />
          </PopoverStory>
          <PopoverStory position="bottom-start">
            <IconChevronDownLeft />
          </PopoverStory>
          <PopoverStory position="bottom">
            <IconChevronDown />
          </PopoverStory>
          <PopoverStory position="bottom-end">
            <IconChevronDownRight />
          </PopoverStory>
        </StoryFrame>
        <StoryFrame>
          <PopoverStory position="left-start">
            <IconChevronUpLeft />
          </PopoverStory>
          <PopoverStory position="left">
            <IconChevronLeft />
          </PopoverStory>
          <PopoverStory position="left-end">
            <IconChevronDownLeft />
          </PopoverStory>
          <PopoverStory position="right-start">
            <IconChevronUpRight />
          </PopoverStory>
          <PopoverStory position="right">
            <IconChevronRight />
          </PopoverStory>
          <PopoverStory position="right-end">
            <IconChevronDownRight />
          </PopoverStory>
        </StoryFrame>
      </Story>
    </section>
  );
};
