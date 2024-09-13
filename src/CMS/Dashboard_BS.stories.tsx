import type { Meta, StoryObj } from '@storybook/react';

import DashboardBs from './Dashboard_BS';

const meta = {
  component: DashboardBs,
} satisfies Meta<typeof DashboardBs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};