import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'Components/@shared/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'terms',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};
