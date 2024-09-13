import type { Meta, StoryObj } from '@storybook/react';

import NavBarBs from './NavBar_BS';

const meta = {
  component: NavBarBs,
} satisfies Meta<typeof NavBarBs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};