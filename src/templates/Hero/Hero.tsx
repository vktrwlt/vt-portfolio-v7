import { FC } from 'react';
import tw, { styled, css, theme } from 'twin.macro';

export interface HeroProps {
  children: React.ReactNode;
}

const StyledHero = styled.div`
  ${tw`mb-lg lg:mb-xl`}
`;

export const Hero: FC<HeroProps> = ({ children }) => {
  return <StyledHero>{children}</StyledHero>;
};
