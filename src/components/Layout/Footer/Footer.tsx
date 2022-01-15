import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import getConfig from 'next/config';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import tw, { styled, css, theme } from 'twin.macro';

const StyledFooter = styled.footer`
  ${tw`text-center text-white bg-gray-900 py-xs`}
`;

const StyledFooterSocialList = styled.ul`
  ${tw`mb-md`}
`;
const StyledFooterSocialItem = styled.li`
  ${tw`inline-block border border-white  mx-md hocus:(bg-brand-blue border-brand-blue)`}
  & a {
    ${tw`flex justify-center p-3`}
  }
`;

const { publicRuntimeConfig } = getConfig();

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Section>
          <StyledFooterSocialList>
            <StyledFooterSocialItem>
              <a
                href='https://www.linkedin.com/in/vktrwlt/'
                target='_blank'
                rel='noopener noreferrer'>
                <FaLinkedinIn size={28} />
              </a>
            </StyledFooterSocialItem>
            <StyledFooterSocialItem>
              <a
                href='https://github.com/vktrwlt'
                target='_blank'
                rel='noopener noreferrer'>
                <FaGithub size={28} />
              </a>
            </StyledFooterSocialItem>
            <StyledFooterSocialItem>
              <a
                href='mailto:victorwltsang@gmail.com'
                rel='noopener noreferrer'>
                <FaEnvelope size={28} />
              </a>
            </StyledFooterSocialItem>
          </StyledFooterSocialList>
          <p>&copy; {publicRuntimeConfig.year} Victor Tsang</p>
        </Section>
      </Container>
    </StyledFooter>
  );
};
