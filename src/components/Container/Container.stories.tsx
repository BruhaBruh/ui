import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container } from './Container';
import { ContainerProps } from './Container.types';

// @ts-ignore
const _: React.ReactNode = null;

const colors = [
  'primary',
  'secondary',
  'brand',
  'brandSubdued',
  'info',
  'infoSubdued',
  'success',
  'successSubdued',
  'caution',
  'cautionSubdued',
  'critical',
  'criticalSubdued',
] satisfies ContainerProps['color'][];

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Container',
  component: Container,
  argTypes: {
    color: {
      table: {
        type: { summary: 'ContainerProps[color]' },
        defaultValue: {
          summary: 'primary',
        },
      },
      type: 'string',
      control: 'select',
      options: colors,
    },
  },
  args: {
    children: (
      <>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          1
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          2
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          3
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          4
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          5
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          6
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          7
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          8
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          9
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          10
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          11
        </div>
        <div className="h-48 bg-critical-subdued text-xl font-semibold flex items-center justify-center">
          12
        </div>
      </>
    ),
    color: 'primary',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Playground: Story = {};
