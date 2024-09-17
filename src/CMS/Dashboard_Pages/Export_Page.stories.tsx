import type { Meta, StoryObj } from '@storybook/react';

import ExportPage from './Export_Page';

const meta = {
  component: ExportPage,
} satisfies Meta<typeof ExportPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};