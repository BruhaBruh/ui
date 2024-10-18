import type { Meta, StoryObj } from '@storybook/react';
import { IconSearch } from '@tabler/icons-react';
import { SearchField } from './SearchField';

const meta = {
  title: 'Components/Input/SearchField',
  component: SearchField,
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
      description: 'SearchField label',
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
      description: 'SearchField description or error message',
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
      description: 'Left item in SearchField',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    right: {
      description: 'Right item in SearchField',
      table: {
        type: { summary: '(props: IconButtonProps) => React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    clearButton: {
      description: 'SearchField with clear button',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isDisabled: {
      description: 'SearchField disabled state',
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
      description: 'SearchField invalid state',
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
      description: 'SearchField visible value state',
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
      description: "SearchField's child element for Field",
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
    left: undefined,
    right: undefined,
    clearButton: false,
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
} satisfies Meta<typeof SearchField>;

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
    left: <IconSearch />,
  },
};

export const WithAll: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
    left: <IconSearch />,
  },
};
