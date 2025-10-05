// button.stories.ts

import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'UI/Button',
  component: Button,
  decorators: [
    moduleMetadata({
      imports: [Button],
    }),
  ],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    clicked: {
      action: 'clicked',
    },
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button
        [type]="type"
        [size]="size"
        [disabled]="disabled"
        (clicked)="clicked($event)"
      >
        زر أساسي
      </lib-button>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button
        [type]="type"
        [size]="size"
        (clicked)="clicked($event)"
      >
        زر ثانوي
      </lib-button>
    `,
  }),
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button
        [type]="type"
        [size]="size"
        (clicked)="clicked($event)"
      >
        زر تحذير
      </lib-button>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button
        [type]="type"
        [disabled]="disabled"
      >
        زر معطل
      </lib-button>
    `,
  }),
};
