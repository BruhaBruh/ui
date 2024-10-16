import { IconButton } from '@/components/action';
import type { Meta, StoryObj } from '@storybook/react';
import { IconSquare } from '@tabler/icons-react';
import { TextAreaField } from './TextAreaField';

const meta = {
  title: 'Components/Input/TextAreaField',
  component: TextAreaField,
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
    minRows: {
      description: 'TextAreaField min rows amount',
      table: {
        type: { summary: 'number' },
        defaultValue: {
          detail: '0',
        },
      },
      type: 'number',
      control: 'number',
    },
    maxRows: {
      description: 'TextAreaField max rows amount',
      table: {
        type: { summary: 'number' },
        defaultValue: {
          detail: 'undefined',
        },
      },
      type: 'number',
      control: 'number',
    },
    label: {
      description: 'TextAreaField label',
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
      description: 'TextAreaField description or error message',
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
      description: 'Left item in TextAreaField',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    right: {
      description: 'Right item in TextAreaField',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    isDisabled: {
      description: 'TextAreaField disabled state',
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
      description: 'TextAreaField invalid state',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isVisible: {
      description: 'TextAreaField visible value state',
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
      description: "TextAreaField's child element for Field",
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
    autoComplete: 'off',
    label: '',
    description: '',
    minRows: 0,
    maxRows: undefined,
    left: undefined,
    right: undefined,
    isDisabled: false,
    isInvalid: false,
    isVisible: false,
    child: undefined,
    asChild: false,
  },
  parameters: {
    controls: {
      exclude: /autoComplete|asChild|child|className|left|right/g,
    },
  },
} satisfies Meta<typeof TextAreaField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder',
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
    placeholder: 'Placeholder',
    left: <IconSquare />,
    right: <IconSquare />,
  },
};
