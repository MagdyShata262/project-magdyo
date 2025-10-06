import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ThemeToggle } from './theme-toggle';
import { Theme } from './theme';

const meta: Meta<ThemeToggle> = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    moduleMetadata({
      imports: [ThemeToggle],
      providers: [Theme],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<ThemeToggle>;

export const Default: Story = {
  render: () => ({
    template: `<lib-theme-toggle></lib-theme-toggle>`,
  }),
};
