import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 50px 20px;
  font-family: 'Poppins', Arial, sans-serif;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin-bottom: 30px;
  min-width: 200px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  color: #ff6b6b;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ContactIcon = styled.span`
  margin-right: 10px;
  color: #ff6b6b;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const SocialIcon = styled.a`
  color: #e0e0e0;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

const Copyright = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Rise Institute</FooterTitle>
          <p>Empowering future medical professionals with quality education and comprehensive training.</p>
          <SocialIcons>
            <SocialIcon href="https://facebook.com/rise.edu.np" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink to="/">Home</FooterLink></FooterListItem>
            <FooterListItem><FooterLink to="/room">Services</FooterLink></FooterListItem>
            <FooterListItem><FooterLink to="/about">About Us</FooterLink></FooterListItem>
            <FooterListItem><FooterLink to="/contact">Contact</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactItem>
            <ContactIcon><MapPin size={16} /></ContactIcon>
            Kamalpokhari, Kathmandu, Nepal
          </ContactItem>
          <ContactItem>
            <ContactIcon><Phone size={16} /></ContactIcon>
            +977 01-4541165
          </ContactItem>
          <ContactItem>
            <ContactIcon><Mail size={16} /></ContactIcon>
            risedoctors@gmail.com
          </ContactItem>
          <ContactItem>
            <ContactIcon><Clock size={16} /></ContactIcon>
            Mon - Fri: 9:00 AM - 5:00 PM
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Rise Institute For Medical Education. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;