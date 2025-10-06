
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Header } from './header';
import { Theme } from '../theme';
import { ThemeToggle } from '../theme-toggle';


const meta: Meta<Header> = {
  title: 'Layout/Header',
  component: Header,
  decorators: [
    moduleMetadata({
      imports: [Header, ThemeToggle],
      providers: [Theme],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<Header>;

export const Default: Story = {
  render: () => ({
    template: `
      <lib-header></lib-header>
      <div style="padding: 40px; text-align: center;">
        <p>محتوى الصفحة هنا...</p>
      </div>
    `,
  }),
};
