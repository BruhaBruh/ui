import type { Meta, StoryObj } from '@storybook/react';
import {
  PageContainer,
  PageContainerProvider,
  usePageContainerIsZoomed,
} from '../PageContainer';
import { Switch } from '../Switch';
import { Container } from './Container';
import { ContainerProps } from './Container.types';

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
  title: 'Components/Layout/Container',
  component: Container,
  argTypes: {
    color: {
      description: "Container's color",
      table: {
        type: {
          summary:
            'surfaceContainerLowest | surfaceContainerLow | surfaceContainer | ' +
            'surfaceContainerHigh | surfaceContainerHighest | primary | primaryContainer | ' +
            'secondary | secondaryContainer | info | ' +
            'infoContainer | success | successContainer | ' +
            'caution | cautionContainer | critical | criticalContainer | none',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      type: 'string',
      control: 'select',
      options: [
        'surfaceContainerLowest',
        'surfaceContainerLow',
        'surfaceContainer',
        'surfaceContainerHigh',
        'surfaceContainerHighest',
        'primary',
        'primaryContainer',
        'secondary',
        'secondaryContainer',
        'info',
        'infoContainer',
        'success',
        'successContainer',
        'caution',
        'cautionContainer',
        'critical',
        'criticalContainer',
        'none',
      ] satisfies ContainerProps['color'][],
    },
    fluid: {
      description: 'Fluid container',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
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
        <PageContainer className="elevation-5">
          <Container {...args} className="py-lg">
            <h1 className="mb-xl typography-display-large">Container</h1>
            <ToggleButton />
          </Container>
        </PageContainer>
      </PageContainerProvider>
    );
  },
  args: {
    color: 'none',
    fluid: false,
    asChild: false,
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => {
    return (
      <>
        <Container {...args} color="surfaceContainerHighest" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Surface Container Highest
          </h1>
        </Container>
        <Container {...args} color="surfaceContainerHigh" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Surface Container High
          </h1>
        </Container>
        <Container {...args} color="surfaceContainer" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Surface Container
          </h1>
        </Container>
        <Container {...args} color="surfaceContainerLow" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Surface Container Low
          </h1>
        </Container>
        <Container {...args} color="surfaceContainerLowest" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Surface Container Lowest
          </h1>
        </Container>
        <Container {...args} color="primary" className="py-2xl">
          <h1 className="text-center typography-display-large">Primary</h1>
        </Container>
        <Container {...args} color="primaryContainer" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Primary Container
          </h1>
        </Container>
        <Container {...args} color="secondary" className="py-2xl">
          <h1 className="text-center typography-display-large">Secondary</h1>
        </Container>
        <Container {...args} color="secondaryContainer" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Secondary Container
          </h1>
        </Container>
        <Container {...args} color="info" className="py-2xl">
          <h1 className="text-center typography-display-large">Info</h1>
        </Container>
        <Container {...args} color="infoContainer" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Info Container
          </h1>
        </Container>
        <Container {...args} color="success" className="py-2xl">
          <h1 className="text-center typography-display-large">Success</h1>
        </Container>
        <Container {...args} color="successContainer" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Success Container
          </h1>
        </Container>
        <Container {...args} color="caution" className="py-2xl">
          <h1 className="text-center typography-display-large">Caution</h1>
        </Container>
        <Container {...args} color="cautionContainer" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Caution Container
          </h1>
        </Container>
        <Container {...args} color="critical" className="py-2xl">
          <h1 className="text-center typography-display-large">Critical</h1>
        </Container>
        <Container {...args} color="criticalContainer" className="py-2xl">
          <h1 className="text-center typography-display-large">
            Critical Container
          </h1>
        </Container>
        <Container {...args} color="none" className="py-2xl">
          <h1 className="text-center typography-display-large">None</h1>
        </Container>
      </>
    );
  },
  parameters: {
    controls: {
      exclude: /color/g,
    },
  },
};
