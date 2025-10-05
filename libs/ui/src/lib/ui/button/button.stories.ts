// button.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  component: Button,
  title: 'UI/Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button [type]="type" [disabled]="disabled">
        زر أساسي
      </lib-button>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button [type]="type">
        زر ثانوي
      </lib-button>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button [disabled]="disabled">
        زر معطل
      </lib-button>
    `,
  }),
};
