import type { Meta, StoryObj } from '@storybook/react';

import DemographicsPage from './Demographics_Page';

const meta = {
  component: DemographicsPage,
} satisfies Meta<typeof DemographicsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};