import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Components/@shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: '이름을 입력해주세요',
  },
};

export const WithError: Story = {
  args: {
    isError: true,
  },
};
