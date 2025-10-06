import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Footer } from './footer';
import { Theme } from '../theme';
import { ThemeToggle } from '../theme-toggle';


const meta: Meta<Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [
    moduleMetadata({
      imports: [Footer, ThemeToggle],
      providers: [Theme],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<Footer>;

export const Default: Story = {
  render: () => ({
    template: `
      <div style="min-height: 60vh; display: flex; flex-direction: column; justify-content: space-between;">
        <main style="padding: 40px; text-align: center;">
          <p>محتوى الصفحة هنا...</p>
        </main>
        <lib-footer></lib-footer>
      </div>
    `,
  }),
};
