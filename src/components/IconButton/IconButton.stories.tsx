import type { Meta, StoryObj } from '@storybook/react';
import { IconSquare, IconSquareFilled } from '@tabler/icons-react';
import { IconButton } from './IconButton';
import { IconButtonProps } from './IconButton.types';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Actions/IconButton',
  component: IconButton,
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
      description: "IconButton's color",
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
      ] satisfies IconButtonProps['color'][],
    },
    variant: {
      description: "IconButton's variant",
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
        'standard',
        'filled',
        'tonal',
        'outlined',
      ] satisfies IconButtonProps['variant'][],
    },
    isDisabled: {
      description: "IconButton's disabled state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    toggleable: {
      description: 'Set `true` to enable toggleable state',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isSelected: {
      description:
        'Set `true` to enable selected state, works only with toggleable state',
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
  args: {
    children: <IconSquare />,
    color: 'primary',
    variant: 'standard',
    isDisabled: false,
    toggleable: false,
    asChild: false,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="gap-xs flex flex-col">
      <div className="gap-xs flex max-w-screen-sm flex-wrap items-center justify-end">
        <p className="typography-title-medium">Default</p>
        <IconButton {...args} color="primary" />
        <IconButton {...args} color="secondary" />
        <IconButton {...args} color="info" />
        <IconButton {...args} color="success" />
        <IconButton {...args} color="caution" />
        <IconButton {...args} color="critical" />
        <IconButton {...args} disabled />
      </div>
      <div className="gap-xs flex max-w-screen-sm flex-wrap items-center justify-end">
        <p className="typography-title-medium">Toggleable Not Selected</p>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          color="primary"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          color="secondary"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          color="info"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          color="success"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          color="caution"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          color="critical"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          disabled
        />
      </div>
      <div className="gap-xs flex max-w-screen-sm flex-wrap items-center justify-end">
        <p className="typography-title-medium">Toggleable Selected</p>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          color="primary"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          color="secondary"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          color="info"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          color="success"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          color="caution"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          color="critical"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          disabled
        >
          <IconSquareFilled />
        </IconButton>
      </div>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color|children|toggleable|isSelected/g,
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="gap-xs flex flex-col">
      <div className="gap-xs flex items-center justify-end">
        <p className="typography-title-medium">Default</p>
        <IconButton {...args} variant="standard" />
        <IconButton {...args} variant="filled" />
        <IconButton {...args} variant="tonal" />
        <IconButton {...args} variant="outlined" />
      </div>
      <div className="gap-xs flex items-center justify-end">
        <p className="typography-title-medium">Toggleable Not Selected</p>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          variant="standard"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          variant="filled"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          variant="tonal"
        />
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          variant="outlined"
        />
      </div>
      <div className="gap-xs flex items-center justify-end">
        <p className="typography-title-medium">Toggleable Selected</p>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          variant="standard"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          variant="filled"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          variant="tonal"
        >
          <IconSquareFilled />
        </IconButton>
        <IconButton
          {...(args as Record<string, unknown>)}
          toggleable
          isSelected
          variant="outlined"
        >
          <IconSquareFilled />
        </IconButton>
      </div>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /variant|children|toggleable|isSelected/g,
    },
  },
};
