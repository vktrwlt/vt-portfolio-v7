import React, { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { Nav } from '@/templates/Layout/Header/Nav';
import tw, { styled, css, theme } from 'twin.macro';

type StyledHeaderProps = {
  scrollActive: boolean;
};

const StyledHeader = styled.header<StyledHeaderProps>`
  ${tw`fixed top-0 left-0 z-50 w-full bg-white`}
  ${({ scrollActive }) => scrollActive && tw`shadow-md`}
`;

export const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <StyledHeader scrollActive={scrollActive}>
      <Container>
        <Nav />
      </Container>
    </StyledHeader>
  );
};
