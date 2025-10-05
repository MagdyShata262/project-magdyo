// card.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Card } from './card';
import { userEvent, within } from 'storybook/internal/test';

const meta: Meta<Card> = {
  component: Card,
  title: 'UI/Card',
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<Card>;

export const WithContent: Story = {
  render: () => ({
    template: `
      <lib-card>
        <h2>بطاقة منتج</h2>
        <p>هذه بطاقة تحتوي على محتوى متعدد</p>
        <lib-button type="primary">إضافة إلى السلة</lib-button>
      </lib-card>
    `,
  }),
};

export const ClickableCard: Story = {
  render: () => ({
    template: `
      <lib-card class="clickable">
        <h3>بطاقة قابلة للنقر</h3>
        <p>انقر على هذه البطاقة</p>
      </lib-card>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('article');

    await userEvent.click(card);
    // يمكنك إضافة assertions هنا
  },
};
