import type { Meta, StoryObj } from '@storybook/react';

import UserDetailsPage from './UserDetails_Page';

const meta = {
  component: UserDetailsPage,
} satisfies Meta<typeof UserDetailsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};