import type { Meta, StoryObj } from '@storybook/react';

import TrafficPage from './Traffic_Page';

const meta = {
  component: TrafficPage,
} satisfies Meta<typeof TrafficPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};