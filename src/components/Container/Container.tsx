import { FC } from 'react';
import tw, { styled, css, theme } from 'twin.macro';

export interface ContainerProps {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  ${tw`max-w-screen-lg mx-auto px-md lg:px-0 `}
`;

export const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
