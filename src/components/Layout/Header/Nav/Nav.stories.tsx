import { Story, Meta } from '@storybook/react';
import { Nav } from './Nav';

export default {
  title: 'Nav',
  component: Nav,
} as Meta;

const Template: Story = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Nav' };
