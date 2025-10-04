import type { Meta, StoryObj } from '@storybook/angular';
import { ProductCard } from './product-card';
import { expect } from 'storybook/test';

const meta: Meta<ProductCard> = {
  component: ProductCard,
  title: 'ProductCard',
};
export default meta;

type Story = StoryObj<ProductCard>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/product-card/gi)).toBeTruthy();
  },
};
