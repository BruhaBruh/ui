import type { Meta, StoryObj } from '@storybook/react';
import { IconSquare } from '@tabler/icons-react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

const meta = {
  title: 'Components/Actions/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'Child element',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
    },
    color: {
      description: "Button's color",
      table: {
        type: {
          summary: 'primary | secondary | info | success | caution | critical',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
      type: 'string',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'caution',
        'critical',
      ] satisfies ButtonProps['color'][],
    },
    variant: {
      description: "Button's variant",
      table: {
        type: {
          summary: 'text | elevated | filled | tonal | outlined',
        },
        defaultValue: {
          summary: 'elevated',
        },
      },
      type: 'string',
      control: 'select',
      options: [
        'elevated',
        'filled',
        'tonal',
        'outlined',
        'text',
      ] satisfies ButtonProps['variant'][],
    },
    isDisabled: {
      description: "Button's disabled state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    leftIcon: {
      description: "Button's left icon",
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    rightIcon: {
      description: "Button's right icon",
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
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
  args: {
    children: 'Button',
    color: 'primary',
    variant: 'elevated',
    isDisabled: false,
    asChild: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="gap-xs flex max-w-screen-sm flex-wrap items-center justify-center">
      <Button {...args} color="primary" />
      <Button {...args} color="secondary" />
      <Button {...args} color="info" />
      <Button {...args} color="success" />
      <Button {...args} color="caution" />
      <Button {...args} color="critical" />
      <Button {...args} disabled />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color/g,
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="gap-xs flex">
      <Button {...args} variant="elevated" />
      <Button {...args} variant="filled" />
      <Button {...args} variant="tonal" />
      <Button {...args} variant="outlined" />
      <Button {...args} variant="text" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /variant/g,
    },
  },
};

export const WithIcon: Story = {
  render: ({ children, ...args }) => (
    <div className="gap-xs flex items-center">
      <div className="gap-xs flex flex-col items-center">
        <Button {...args} leftIcon={<IconSquare />}>
          {children}
        </Button>
        <Button {...args} className="w-64" leftIcon={<IconSquare />}>
          {children}
        </Button>
      </div>
      <div className="gap-xs flex flex-col items-center">
        <Button {...args} rightIcon={<IconSquare />}>
          {children}
        </Button>
        <Button {...args} className="w-64" rightIcon={<IconSquare />}>
          {children}
        </Button>
      </div>
      <div className="gap-xs flex flex-col items-center">
        <Button {...args} leftIcon={<IconSquare />} rightIcon={<IconSquare />}>
          {children}
        </Button>
        <Button
          {...args}
          className="w-64"
          leftIcon={<IconSquare />}
          rightIcon={<IconSquare />}
        >
          {children}
        </Button>
      </div>
    </div>
  ),
};
