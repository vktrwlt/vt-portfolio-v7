import { Container } from '@/components/Container';
import tw, { styled, css, theme } from 'twin.macro';

const StyledFooter = styled.footer`
  ${tw``}
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>Footer</Container>
    </StyledFooter>
  );
};
