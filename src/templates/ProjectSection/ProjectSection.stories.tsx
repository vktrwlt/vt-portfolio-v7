import { Story, Meta } from '@storybook/react';
import { ProjectSection } from './ProjectSection';

export default {
  title: 'ProjectSection',
  component: ProjectSection,
} as Meta;

const Template: Story = (args) => <ProjectSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
