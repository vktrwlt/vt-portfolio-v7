import { Story, Meta } from '@storybook/react';
import { CardGroup, CardGroupProps } from './CardGroup';

export default {
  title: 'CardGroup',
  component: CardGroup,
} as Meta;

const Template: Story<CardGroupProps> = (args) => <CardGroup {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'CardGroup' };
