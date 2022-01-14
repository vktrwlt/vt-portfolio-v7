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
const StyledCardCTA = styled.span`
  display: inline-block;
  position: relative;
  ${tw`text-black`}
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    ${tw`bg-black`}
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`;
const StyledCard = styled.article`
  ${tw`w-full mb-8 md:mb-0 md:w-1/2 md:p-4 lg:p-6 md:flex`}

  &:hover {
    ${StyledCardCTA} {
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
  &:focus {
    ${StyledCardCTA} {
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

const StyledCardInner = styled.a(({ bgColor }: CardBgProp) => [
  // Base Styles
  tw`flex flex-col justify-between shadow cursor[pointer]`,
  bgColorVariants[bgColor],
]);

const StyledCardBody = styled.div`
  ${tw`p-md lg:p-lg md:flex md:flex-col md:flex-1`}
`;

const StyledCardAction = styled.div`
  ${tw`flex text-lg font-bold mt-lg lg:mt-xl`}
`;

export const Card: FC<CardProps> = ({ title, body, bgColor, url }) => {
  return (
    <Link href={url} passHref>
      <StyledCard>
        <StyledCardInner bgColor={bgColor}>
          <StyledCardBody>
            <Heading as='h2' size='lg' tw='mb-sm'>
              {title}
            </Heading>
            <Heading as='h3' size='md' tw='font-normal'>
              {body}
            </Heading>
            <div tw='mt-auto'>
              <StyledCardAction>
                <StyledCardCTA>View Project</StyledCardCTA>
              </StyledCardAction>
            </div>
          </StyledCardBody>
        </StyledCardInner>
      </StyledCard>
    </Link>
  );
};
