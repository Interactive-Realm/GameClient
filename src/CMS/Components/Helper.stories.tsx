import type { Meta, StoryObj } from '@storybook/react';

import Helper from './Helper';

const meta = {
  component: Helper,
} satisfies Meta<typeof Helper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};