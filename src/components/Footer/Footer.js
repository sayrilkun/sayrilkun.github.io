import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href="tel:+639276341931">+639276341931</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href="mailto:andreicyrilgimoros@gmail.com">andreicyrilgimoros@gmail.com</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>‘Men go to far greater heights to avoid what they fear than to obtain what they desire’</Slogan>
            </CompanyContainer>
            <SocialContainer>
                <SocialIcons href= "https://github.com/sayrilkun">
                    <AiFillGithub size= "3rem" />
                </SocialIcons>
                <SocialIcons href= "https://www.linkedin.com/in/andrei-cyril-gimoros-88399a1b3/">
                    <AiFillLinkedin size= "3rem" />
                </SocialIcons>
                <SocialIcons href= "https://instagram.com">
                    <AiFillInstagram size= "3rem" />
                </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

