import type { TooltipContentProps } from '@/components';
import {
  Button,
  IconButton,
  Tooltip,
  TooltipActions,
  TooltipContent,
  TooltipSubhead,
  TooltipText,
  TooltipTrigger,
} from '@/components';
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
  IconChevronDown,
  IconChevronDownLeft,
  IconChevronDownRight,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronUpLeft,
  IconChevronUpRight,
  IconSquare,
} from '@tabler/icons-react';
import type React from 'react';

export const TooltipPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Tooltip</Title>
      <StoryPlayground
        className="mb-md"
        arguments={{
          variant: {
            type: 'select',
            label: 'Variant of Tooltip',
            defaultValue: 'plain',
            options: ['plain', 'rich'],
          },
          position: {
            type: 'select',
            label: 'Position of Tooltip',
            defaultValue: 'top',
            options: [
              'top-left',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
            ],
          },
          subhead: {
            type: 'text',
            label: 'Subhead',
            defaultValue: 'Subhead in Rich Tooltip',
          },
          text: {
            type: 'text',
            label: 'Text',
            defaultValue: 'Tooltip',
          },
          showActions: {
            type: 'switch',
            label: 'Show actions in Rich Tooltip',
            defaultValue: false,
          },
        }}
      >
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <StoryPlaygroundRender>
            {({ variant, position, subhead, text, showActions }) => (
              <Tooltip>
                <TooltipTrigger>
                  <IconButton>
                    <IconSquare />
                  </IconButton>
                </TooltipTrigger>
                <TooltipContent
                  variant={variant as TooltipContentProps['variant']}
                  position={position as TooltipContentProps['position']}
                >
                  {(subhead as React.ReactNode) && (
                    <TooltipSubhead>
                      {subhead as React.ReactNode}
                    </TooltipSubhead>
                  )}
                  <TooltipText>{text as React.ReactNode}</TooltipText>
                  {(showActions as boolean) && (
                    <TooltipActions>
                      <Button variant="text">Action</Button>
                    </TooltipActions>
                  )}
                </TooltipContent>
              </Tooltip>
            )}
          </StoryPlaygroundRender>
        </StoryFrame>
        <StoryPlaygroundControls />
      </StoryPlayground>
      <Story className="mb-md">
        <Subtitle>Plain</Subtitle>
        <StoryFrame>
          <Tooltip isOpen>
            <TooltipTrigger>
              <div />
            </TooltipTrigger>
            <TooltipContent className="relative !left-auto !top-auto !translate-x-0 !translate-y-0">
              <TooltipText>Plain tooltip</TooltipText>
            </TooltipContent>
          </Tooltip>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Rich</Subtitle>
        <StoryFrame>
          <Tooltip isOpen>
            <TooltipTrigger>
              <div />
            </TooltipTrigger>
            <TooltipContent
              position="top-right"
              variant="rich"
              className="relative !left-auto !top-auto !translate-x-0 !translate-y-0"
            >
              <TooltipSubhead>Rich tooltip</TooltipSubhead>
              <TooltipText>
                Supporting line text lorem ipsum dolor sit amet, consectetur
              </TooltipText>
              <TooltipActions>
                <Button variant="text">Action</Button>
              </TooltipActions>
            </TooltipContent>
          </Tooltip>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Plain Positions</Subtitle>
        <StoryFrame>
          <Tooltip>
            <TooltipTrigger>
              <IconButton>
                <IconChevronLeft />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent position="left">
              <TooltipText>Plain tooltip</TooltipText>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <IconButton>
                <IconChevronUp />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent position="top">
              <TooltipText>Plain tooltip</TooltipText>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <IconButton>
                <IconChevronDown />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent position="bottom">
              <TooltipText>Plain tooltip</TooltipText>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <IconButton>
                <IconChevronRight />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent position="right">
              <TooltipText>Plain tooltip</TooltipText>
            </TooltipContent>
          </Tooltip>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Rich Positions</Subtitle>
        <StoryFrame>
          <Tooltip>
            <TooltipTrigger>
              <IconButton>
                <IconChevronUpLeft />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent position="top-left" variant="rich">
              <TooltipSubhead>Rich tooltip</TooltipSubhead>
              <TooltipText>
                Supporting line text lorem ipsum dolor sit amet, consectetur
              </TooltipText>
              <TooltipActions>
                <Button variant="text">Action</Button>
              </TooltipActions>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <IconButton>
                <IconChevronUpRight />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent position="top-right" variant="rich">
              <TooltipSubhead>Rich tooltip</TooltipSubhead>
              <TooltipText>
                Supporting line text lorem ipsum dolor sit amet, consectetur
              </TooltipText>
              <TooltipActions>
                <Button variant="text">Action</Button>
              </TooltipActions>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <IconButton>
                <IconChevronDownLeft />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent position="bottom-left" variant="rich">
              <TooltipSubhead>Rich tooltip</TooltipSubhead>
              <TooltipText>
                Supporting line text lorem ipsum dolor sit amet, consectetur
              </TooltipText>
              <TooltipActions>
                <Button variant="text">Action</Button>
              </TooltipActions>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <IconButton>
                <IconChevronDownRight />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent position="bottom-right" variant="rich">
              <TooltipSubhead>Rich tooltip</TooltipSubhead>
              <TooltipText>
                Supporting line text lorem ipsum dolor sit amet, consectetur
              </TooltipText>
              <TooltipActions>
                <Button variant="text">Action</Button>
              </TooltipActions>
            </TooltipContent>
          </Tooltip>
        </StoryFrame>
      </Story>
    </section>
  );
};
