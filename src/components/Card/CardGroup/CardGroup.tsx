import { FC } from 'react';
import tw, { styled, css, theme } from 'twin.macro';

export interface CardGroupProps {
  children: React.ReactNode;
}

const StyledCardGroup = styled.div`
  ${tw` md:flex md:flex-wrap md:-mx-4 lg:-mx-6`}
`;

export const CardGroup: FC<CardGroupProps> = ({ children }) => {
  return <StyledCardGroup>{children}</StyledCardGroup>;
};
