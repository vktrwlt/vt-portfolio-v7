import { Story, Meta } from '@storybook/react';
import { Section, SectionProps } from './Section';

export default {
  title: 'Section',
  component: Section,
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Section' };
