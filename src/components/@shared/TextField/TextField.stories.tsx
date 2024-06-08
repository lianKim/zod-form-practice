import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta = {
  title: 'Components/@shared/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    labelText: '이메일',
    inputName: 'email',
    placeholder: '이메일을 입력해주세요',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    isRequired: true,
  },
};

export const WithErrorMsg: Story = {
  args: {
    isRequired: false,
    errorMsg: '이메일 주소가 정확한지 확인해 주세요.',
  },
};
