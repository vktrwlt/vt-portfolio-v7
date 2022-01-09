import { FC } from 'react';
import { Footer } from '@/templates/Layout/Footer';
import { Header } from '@/templates/Layout/Header';
import tw, { styled, css, theme } from 'twin.macro';

export interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  ${tw`flex flex-col h-screen bg-white `}
`;
const ContentWrapper = styled.div`
  ${tw`flex-auto w-full mt-xl md:pt-sm`}
`;

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer />
    </StyledLayout>
  );
};
