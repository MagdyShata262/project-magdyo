import type { Meta, StoryObj } from '@storybook/angular';
import { ThemeToggle } from './theme-toggle';
import { userEvent, within } from 'storybook/internal/test';

const meta: Meta<ThemeToggle> = {
  component: ThemeToggle,
  title: 'UI/ThemeToggle',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<ThemeToggle>;

export const Default: Story = {
  args: {},
};

export const LightMode: Story = {
  args: {},
  parameters: {
    themes: {
      default: 'light',
    },
  },
};

export const DarkMode: Story = {
  args: {},
  parameters: {
    themes: {
      default: 'dark',
    },
  },
};

export const Interactive: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole('button');

    // التحقق من النص الافتراضي
    await expect(toggleButton.textContent).toMatch(
      /الوضع النهاري|الوضع الليلي/
    );

    // النقر على الزر
    await userEvent.click(toggleButton);

    // يمكنك إضافة المزيد من التفاعلات هنا
  },
};
