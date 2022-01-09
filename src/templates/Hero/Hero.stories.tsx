import { Story, Meta } from '@storybook/react';
import { Hero, HeroProps } from './Hero';

export default {
  title: 'Hero',
  component: Hero,
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Hero' };
