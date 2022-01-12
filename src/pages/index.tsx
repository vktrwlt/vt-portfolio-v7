import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Hero } from '@/templates/Hero';
import { Layout } from '@/templates/Layout';
import { ProjectSection } from '@/templates/ProjectSection';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Hero>
          <Heading as='h1' size='2xl'>
            <span tw='text-brand-blue'>Hello!</span> My name is Victor - a
            Front-End Developer passionate about User Experience and creating
            functional and performant websites.
          </Heading>
        </Hero>
        <ProjectSection />
      </Container>
    </Layout>
  );
};

export default Index;
