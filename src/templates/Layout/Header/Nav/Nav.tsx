import { FC } from 'react';
import tw, { styled, css, theme } from 'twin.macro';

const StyledNav = styled.div`
  ${tw`flex items-center justify-between py-sm`}
`;

export const Nav: FC = () => {
  return (
    <StyledNav>
      <div>Vktr</div>
      <div tw='hidden lg:flex items-center'>
        <div tw='mr-lg font-bold mb-1'>
          <a>Work</a>
        </div>
        <div tw=' font-bold mb-1'>
          <a>About</a>
        </div>
      </div>
    </StyledNav>
  );
};
