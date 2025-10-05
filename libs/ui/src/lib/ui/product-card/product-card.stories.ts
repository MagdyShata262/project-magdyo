// product-card.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { ProductCard } from './product-card';

const meta: Meta<ProductCard> = {
  component: ProductCard,
  title: 'UI/ProductCard',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    price: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<ProductCard>;

export const Default: Story = {
  args: {
    title: 'ساعة ذكية',
    description: 'ساعة ذكية بتقنيات متطورة تتبع الصحة واللياقة',
    price: '899 ر.س',
  },
};

export const WithDiscount: Story = {
  args: {
    title: 'هاتف محمول',
    description: 'أحدث الهواتف الذكية بشاشة 6.7 بوصة',
    price: '2,499 ر.س',
  },
};

export const LongText: Story = {
  args: {
    title: 'هذا عنوان طويل جداً للمنتج قد يمتد لأكثر من سطر',
    description:
      'هذا وصف طويل جداً للمنتج يشرح جميع المميزات والتفاصيل التقنية التي قد يحتاجها المستخدم لاتخاذ قرار الشراء.',
    price: '1,299 ر.س',
  },
};
