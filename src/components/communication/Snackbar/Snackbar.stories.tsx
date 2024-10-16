import { Button } from '@/components/action';
import { QueuedToast } from '@react-stately/toast';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Snackbar } from './Snackbar';
import { SnackbarContent, SnackbarProps } from './Snackbar.types';
import {
  SnackbarProvider,
  SnackbarProviderProps,
  useSnackbar,
} from './SnackbarProvider';
import { SnackbarRegion, SnackbarRegionProps } from './SnackbarRegion';

const toasts = {
  oneLine: {
    key: 'oneLine',
    content: {
      title: 'Hello, world!',
    },
    animation: 'entering',
  },
  oneLineWithAction: {
    key: 'oneLineWithAction',
    content: {
      title: 'Hello, world!',
      actions: <Button variant="text">Action</Button>,
    },
    animation: 'entering',
  },
  twoLines: {
    key: 'twoLines',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
    },
    animation: 'entering',
  },
  twoLinesWithAction: {
    key: 'twoLinesWithAction',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      actions: <Button variant="text">Action</Button>,
    },
    animation: 'entering',
  },
  twoLinesWithLongerAction: {
    key: 'twoLinesWithLongerAction',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      actions: <Button variant="text">Action</Button>,
      longerActions: true,
    },
    animation: 'entering',
  },
  oneLineClose: {
    key: 'oneLineClose',
    content: {
      title: 'Hello, world!',
      closeButton: true,
    },
    animation: 'entering',
  },
  oneLineWithActionClose: {
    key: 'oneLineWithActionClose',
    content: {
      title: 'Hello, world!',
      actions: <Button variant="text">Action</Button>,
      closeButton: true,
    },
    animation: 'entering',
  },
  twoLinesClose: {
    key: 'twoLinesClose',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      closeButton: true,
    },
    animation: 'entering',
  },
  twoLinesWithActionClose: {
    key: 'twoLinesWithActionClose',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      actions: <Button variant="text">Action</Button>,
      closeButton: true,
    },
    animation: 'entering',
  },
  twoLinesWithLongerActionClose: {
    key: 'twoLinesWithLongerActionClose',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      actions: <Button variant="text">Action</Button>,
      longerActions: true,
      closeButton: true,
    },
    animation: 'entering',
  },
} satisfies Record<string, QueuedToast<SnackbarContent>>;

type ButtonsProps = {
  show?: (keyof typeof toasts)[];
  priority?: number;
  timeout?: number;
  toastList?: SnackbarProps['toast'][];
};

const Buttons: React.FC<ButtonsProps> = ({
  show = [],
  toastList = [],
  ...toastOptions
}) => {
  const state = useSnackbar();

  return (
    <div className="gap-xs flex flex-col">
      {show.includes('oneLine') && (
        <Button onPress={() => state.add(toasts.oneLine.content, toastOptions)}>
          One line
        </Button>
      )}
      {show.includes('oneLineWithAction') && (
        <Button
          onPress={() =>
            state.add(toasts.oneLineWithAction.content, toastOptions)
          }
        >
          One line w/ action
        </Button>
      )}
      {show.includes('twoLines') && (
        <Button
          onPress={() => state.add(toasts.twoLines.content, toastOptions)}
        >
          Two lines
        </Button>
      )}
      {show.includes('twoLinesWithAction') && (
        <Button
          onPress={() =>
            state.add(toasts.twoLinesWithAction.content, toastOptions)
          }
        >
          Two lines w/ action
        </Button>
      )}
      {show.includes('twoLinesWithLongerAction') && (
        <Button
          onPress={() =>
            state.add(toasts.twoLinesWithLongerAction.content, {
              timeout: 3000,
            })
          }
        >
          Two lines w/ longer action
        </Button>
      )}
      {show.includes('oneLineClose') && (
        <Button
          onPress={() => state.add(toasts.oneLineClose.content, toastOptions)}
        >
          One line w/ close
        </Button>
      )}
      {show.includes('oneLineWithActionClose') && (
        <Button
          onPress={() =>
            state.add(toasts.oneLineWithActionClose.content, toastOptions)
          }
        >
          One line w/ action & close
        </Button>
      )}
      {show.includes('twoLinesClose') && (
        <Button
          onPress={() => state.add(toasts.twoLinesClose.content, toastOptions)}
        >
          Two lines w/ close
        </Button>
      )}
      {show.includes('twoLinesWithActionClose') && (
        <Button
          onPress={() =>
            state.add(toasts.twoLinesWithActionClose.content, toastOptions)
          }
        >
          Two lines w/ action & close
        </Button>
      )}
      {show.includes('twoLinesWithLongerActionClose') && (
        <Button
          onPress={() =>
            state.add(toasts.twoLinesWithLongerActionClose.content, {
              timeout: 3000,
            })
          }
        >
          Two lines w/ longer action & close
        </Button>
      )}
      {toastList.map((toast) => (
        <Snackbar
          key={toast.key}
          className="w-72"
          state={{
            add(_content, _options) {
              return '';
            },
            close(_key) {},
            remove(_key) {},
            pauseAll() {},
            resumeAll() {},
            visibleToasts: Object.values(toasts),
          }}
          toast={toast}
        />
      ))}
    </div>
  );
};

const meta = {
  title: 'Components/Communication/Snackbar',
  component: SnackbarProvider,
  argTypes: {
    maxVisibleToasts: {
      description: "Maximum visibles Snackbar's",
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '3',
        },
      },
      type: 'number',
      control: 'number',
    },
    position: {
      description: "SnackbarRegion's position",
      table: {
        type: {
          summary:
            'topLeft | top | topRight | right | bottomRight |  bottom | bottomLeft | left',
        },
        defaultValue: {
          summary: 'bottomRight',
        },
      },
      type: 'string',
      control: 'select',
      options: [
        'topLeft',
        'top',
        'topRight',
        'right',
        'bottomRight',
        'bottom',
        'bottomLeft',
        'left',
      ] satisfies SnackbarRegionProps['position'][],
    },
    timeout: {
      description: 'Timeout in milliseconds to auto-dissmis Snackbar',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
      type: 'number',
      control: 'number',
    },
    priority: {
      description: 'Priority of Snackbar',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
      type: 'number',
      control: 'number',
    },
  },
  render: (args) => {
    return (
      <SnackbarProvider maxVisibleToasts={args.maxVisibleToasts}>
        <SnackbarRegion position={args.position} />
        <Buttons
          show={args.show}
          priority={args.priority}
          timeout={args.timeout}
          toastList={args.toastList}
        />
      </SnackbarProvider>
    );
  },
  args: {
    maxVisibleToasts: 3,
    position: 'bottomRight',
    timeout: 3000,
    show: [
      'oneLine',
      'oneLineWithAction',
      'twoLines',
      'twoLinesWithAction',
      'twoLinesWithLongerAction',
      'oneLineClose',
      'oneLineWithActionClose',
      'twoLinesClose',
      'twoLinesWithActionClose',
      'twoLinesWithLongerActionClose',
    ],
  },
  parameters: {
    controls: {
      exclude: /show|toastList/g,
    },
  },
} satisfies Meta<
  React.FC<SnackbarProviderProps & SnackbarRegionProps & ButtonsProps>
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithoutClose: Story = {
  args: {
    show: [
      'oneLine',
      'oneLineWithAction',
      'twoLines',
      'twoLinesWithAction',
      'twoLinesWithLongerAction',
    ],
  },
};

export const WithClose: Story = {
  args: {
    show: [
      'oneLineClose',
      'oneLineWithActionClose',
      'twoLinesClose',
      'twoLinesWithActionClose',
      'twoLinesWithLongerActionClose',
    ],
  },
};

export const OneLine: Story = {
  args: {
    show: ['oneLine', 'oneLineClose'],
    toastList: [toasts.oneLine, toasts.oneLineClose],
  },
};

export const OneLineWithAction: Story = {
  args: {
    show: ['oneLineWithAction', 'oneLineWithActionClose'],
    toastList: [toasts.oneLineWithAction, toasts.oneLineWithActionClose],
  },
};

export const TwoLines: Story = {
  args: {
    show: ['twoLines', 'twoLinesClose'],
    toastList: [toasts.twoLines, toasts.twoLinesClose],
  },
};

export const TwoLinesWithAction: Story = {
  args: {
    show: ['twoLinesWithAction', 'twoLinesWithActionClose'],
    toastList: [toasts.twoLinesWithAction, toasts.twoLinesWithActionClose],
  },
};

export const twoLinesWithLongerAction: Story = {
  args: {
    show: ['twoLinesWithLongerAction', 'twoLinesWithLongerActionClose'],
    toastList: [
      toasts.twoLinesWithLongerAction,
      toasts.twoLinesWithLongerActionClose,
    ],
  },
};
