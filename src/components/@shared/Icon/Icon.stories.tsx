import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'Components/@shared/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CancelCircle: Story = {
  args: {
    name: 'CancelCircle',
    width: 40,
    height: 40,
  },
};

export const CheckCircle: Story = {
  args: {
    name: 'CheckCircle',
    fill: 'var(--color-positive)',
  },
};
