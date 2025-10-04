import type { Meta, StoryObj } from '@storybook/angular';
import { Header } from './header';
import { expect } from 'storybook/test';

const meta: Meta<Header> = {
  component: Header,
  title: 'Header',
};
export default meta;

type Story = StoryObj<Header>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/header/gi)).toBeTruthy();
  },
};
