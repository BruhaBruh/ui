import { Switch } from '@/components/selection/Switch';
import type { Meta, StoryObj } from '@storybook/react';
import { PageContainer } from './PageContainer';
import {
  PageContainerProvider,
  usePageContainerIsZoomed,
} from './PageContainer.context';

const ToggleButton = () => {
  const [isZoomed, setIsZoomed] = usePageContainerIsZoomed();

  return (
    <div className="gap-sm border-outline p-md flex w-max items-center rounded-lg border">
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
          className="elevation-5 flex flex-col items-center justify-center"
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
