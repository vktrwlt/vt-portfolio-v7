import { FC } from 'react';
import tw, { styled, css, theme } from 'twin.macro';

export interface SectionProps {
  children: React.ReactNode;
}

const StyledSection = styled.section`
  ${tw`my-lg`}
`;

export const Section: FC<SectionProps> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};
