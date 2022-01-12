import { FC } from 'react';
import { Heading } from '@/components/Heading';
import Link from 'next/link';
import tw, { styled, css, theme } from 'twin.macro';

interface CardBgProp {
  bgColor: 'bg-red-200' | 'bg-blue-200';
}
export interface CardProps extends CardBgProp {
  title: string;
  body: string;
  url: string;
}

const bgColorVariants = {
  'bg-red-200': tw`bg-red-200`,
};

const StyledCard = styled.article`
  ${tw`w-full mb-8 md:mb-0 md:w-1/2 md:p-4 lg:p-6 md:flex`}
`;

const StyledCardInner = styled.a(({ bgColor }: CardBgProp) => [
  // Base Styles
  tw`flex flex-col justify-between shadow cursor[pointer]`,
  bgColorVariants[bgColor],
]);

const StyledCardBody = styled.div`
  ${tw`p-8 lg:p-10 md:flex md:flex-col md:flex-1`}
`;
const StyledCardAction = styled.div`
  ${tw`mt-auto`}
`;

export const Card: FC<CardProps> = ({ title, body, bgColor, url }) => {
  return (
    <StyledCard>
      <Link href={url} passHref>
        <StyledCardInner bgColor={bgColor}>
          <StyledCardBody>
            <Heading as='h2' size='lg' tw='mb-sm'>
              {title}
            </Heading>
            <p>{body}</p>
            <StyledCardAction>
              <div tw='mt-lg flex'>View Project</div>
            </StyledCardAction>
          </StyledCardBody>
        </StyledCardInner>
      </Link>
    </StyledCard>
  );
};
