import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../Switch';
import { PageContainer } from './PageContainer';
import {
  PageContainerProvider,
  usePageContainerIsZoomed,
} from './PageContainer.context';

const ToggleButton = () => {
  const [isZoomed, setIsZoomed] = usePageContainerIsZoomed();

  return (
    <div className="flex w-max items-center gap-sm rounded-lg border border-outline p-md">
      <Switch
        aria-labelledby="zoom-label"
        id="zoom"
        isSelected={isZoomed}
        onChange={setIsZoomed}
      />
      <label id="zoom-label" htmlFor="zoom" className="typography-body-large">
        Zoom
      </label>
    </div>
  );
};

const meta = {
  title: 'Components/Layout/PageContainer',
  component: PageContainer,
  argTypes: {
    asChild: {
      description: 'Pass `true` to render as a child element',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => {
    return (
      <PageContainerProvider>
        <PageContainer
          {...args}
          className="flex flex-col items-center justify-center elevation-5"
        >
          <h1 className="mb-xl typography-display-large">Page Container</h1>
          <ToggleButton />
        </PageContainer>
      </PageContainerProvider>
    );
  },
  args: {
    asChild: false,
  },
} satisfies Meta<typeof PageContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
