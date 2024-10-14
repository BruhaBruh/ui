import type { Meta, StoryObj } from '@storybook/react';
import { IconSquare } from '@tabler/icons-react';
import { IconButton } from '../IconButton';
import { TimeField } from './TimeField';

const meta = {
  title: 'Components/Input/TimeField',
  component: TimeField,
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
    label: {
      description: 'TimeField label',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          detail: 'Required',
        },
      },
      type: 'string',
      control: 'text',
    },
    description: {
      description: 'TimeField description or error message',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
      type: 'string',
      control: 'text',
    },
    left: {
      description: 'Left item in TimeField',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    right: {
      description: 'Right item in TimeField',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    isDisabled: {
      description: 'TimeField disabled state',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isInvalid: {
      description: 'TimeField invalid state',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    child: {
      description: "TimeField's child element for Field",
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
  args: {
    className: 'w-96',
    label: '',
    description: '',
    left: undefined,
    right: undefined,
    isDisabled: false,
    isInvalid: false,
    child: undefined,
    asChild: false,
  },
  parameters: {
    controls: {
      exclude: /autoComplete|asChild|child|className|left|right/g,
    },
  },
} satisfies Meta<typeof TimeField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const WithDescription: Story = {
  args: {
    description: 'Description',
  },
};

export const WithError: Story = {
  args: {
    isInvalid: true,
    description: 'Error message',
  },
  parameters: {
    controls: {
      exclude: /autoComplete|asChild|child|className|left|right|isInvalid/g,
    },
  },
};

export const WithLeftIcon: Story = {
  args: {
    left: <IconSquare />,
  },
};

export const WithRightIcon: Story = {
  args: {
    right: <IconSquare />,
  },
};

export const WithBothIcons: Story = {
  args: {
    left: <IconSquare />,
    right: <IconSquare />,
  },
};

export const WithIconAndButton: Story = {
  args: {
    left: <IconSquare />,
    right: (
      <IconButton>
        <IconSquare />
      </IconButton>
    ),
  },
};

export const WithAll: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    left: <IconSquare />,
    right: <IconSquare />,
  },
};
