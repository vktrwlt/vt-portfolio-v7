import { FC } from 'react';
import { Card, CardGroup } from '@/components/Card';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import tw, { styled, css, theme } from 'twin.macro';

const StyledProjectSection = styled.section`
  ${tw``}
`;

export const ProjectSection: FC = ({ children }) => {
  return (
    <Section>
      <Heading as='h2' size='sm' tw='uppercase mb-md md:mb-0'>
        Featured Projects
      </Heading>
      <CardGroup>
        <Card
          title='NetBase On-Tour'
          body='Migrated event microsite from WordPress to JAMstack and improved page load speeds by 43%'
          bgColor='bg-red-200'
          url='/project/netbase-on-tour'
        />
        <Card
          title='NetBase On-Tour'
          body='Migrated event microsite from WordPress to JAMstack and improved page load speeds by 43% '
          bgColor='bg-red-200'
          url='/project/netbase-on-tour'
        />
        <Card
          title='NetBase On-Tour'
          body='Migrated event microsite from WordPress to JAMstack and improved page load speeds by 43%'
          bgColor='bg-red-200'
          url='/project/netbase-on-tour'
        />
        <Card
          title='NetBase On-Tour'
          body='Migrated event microsite from WordPress to JAMstack and improved page load speeds by 43%'
          bgColor='bg-red-200'
          url='/project/netbase-on-tour'
        />
      </CardGroup>
    </Section>
  );
};
