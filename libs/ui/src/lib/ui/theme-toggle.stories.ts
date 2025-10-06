import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ThemeToggle } from './theme-toggle';
import { Theme } from './theme';
import { Button } from './button/button';


const meta: Meta<ThemeToggle> = {
  title: 'UI/Theme Toggle',
  component: ThemeToggle,
  decorators: [
    moduleMetadata({
      imports: [ThemeToggle, Button],
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
    template: `
      <div dir="rtl" style="text-align: center;">
        <lib-theme-toggle></lib-theme-toggle>
      </div>
    `,
  }),
};
