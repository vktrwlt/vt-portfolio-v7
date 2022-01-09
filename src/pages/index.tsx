import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Hero } from '@/templates/Hero';
import { Layout } from '@/templates/Layout';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Hero>
          <Heading size='2xl'>
            <span tw='text-brand-blue'>Hello!</span> My name is Victor - a
            Front-End Developer passionate about User Experience and creating
            functional and performant websites.
          </Heading>
        </Hero>
      </Container>
    </Layout>
  );
};

export default Index;
