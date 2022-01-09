import { Story, Meta } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = { size: 'xl', children: 'Heading' };
