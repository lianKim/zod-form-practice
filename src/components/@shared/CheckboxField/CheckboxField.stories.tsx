import type { Meta, StoryObj } from '@storybook/react';
import CheckboxField from './CheckboxField';

const meta = {
  title: 'Components/@shared/CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'terms',
    text: '약관 동의',
  },
} satisfies Meta<typeof CheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllCheck: Story = {
  args: {
    text: '전체 동의',
    allCheck: true,
  },
};
