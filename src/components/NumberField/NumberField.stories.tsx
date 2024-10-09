import type { Meta, StoryObj } from '@storybook/react';
import { NumberField } from './NumberField';

const meta = {
  title: 'Components/Input/NumberField',
  component: NumberField,
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
      description: 'NumberField label',
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
      description: 'NumberField description or error message',
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
      description: 'Left item in NumberField',
      table: {
        type: { summary: '(props: IconButtonProps) => React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    right: {
      description: 'Right item in NumberField',
      table: {
        type: { summary: '(props: IconButtonProps) => React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    incrementButton: {
      description: 'SearchField with increment button',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    decrementButton: {
      description: 'SearchField with decrement button',
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
      description: 'NumberField disabled state',
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
      description: 'NumberField invalid state',
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
      description: 'NumberField visible value state',
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
      description: "NumberField's child element for Field",
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
    incrementButton: false,
    decrementButton: false,
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
} satisfies Meta<typeof NumberField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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

export const WithAll: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
  },
};
