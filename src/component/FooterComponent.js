import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ChevronUp, Send } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FooterSection = styled.footer`
  background-image: url('https://kcsrestaurantandhome.com/wp-content/uploads/2023/10/kc-property-11-1-1024x683.webp');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 50px 20px 30px;
  font-family: 'Arial', sans-serif;
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

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-width: 100%;
    margin-bottom: 30px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  color: #ff6b6b;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 14px;

  &:hover {
    color: #d4af37;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;

  svg {
    margin-right: 10px;
    color: #ff6b6b;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 15px;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
  flex-grow: 1;
  font-size: 14px;
`;

const NewsletterButton = styled.button`
  padding: 10px 15px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b8860b;
  }
`;

const Copyright = styled.p`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: #b8860b;
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterSection>
      <Content>
        <Column>
          <Title>Quick Links</Title>
          <LinkList>
            <LinkItem><Link href="#">Home</Link></LinkItem>
            <LinkItem><Link href="#">About Us</Link></LinkItem>
            <LinkItem><Link href="#">Our Rooms</Link></LinkItem>
            <LinkItem><Link href="#">Facilities</Link></LinkItem>
            <LinkItem><Link href="#">Apply Now</Link></LinkItem>
            <LinkItem><Link href="#">Contact</Link></LinkItem>
          </LinkList>
        </Column>
        <Column>
          <Title>Contact Us</Title>
          <ContactInfo>
            <ContactItem>
              <MapPin size={16} />
              123 Hostel Street, Kathmandu, Nepal
            </ContactItem>
            <ContactItem>
              <Phone size={16} />
              +977 1234567890
            </ContactItem>
            <ContactItem>
              <Mail size={16} />
              info@sarbodagirlshostel.com
            </ContactItem>
          </ContactInfo>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook"><Facebook size={20} /></SocialLink>
            <SocialLink href="#" aria-label="Instagram"><Instagram size={20} /></SocialLink>
            <SocialLink href="#" aria-label="LinkedIn"><Linkedin size={20} /></SocialLink>
          </SocialLinks>
        </Column>
        <Column>
          <Title>Newsletter</Title>
          <p>Stay updated with our latest news and offers.</p>
          <NewsletterForm onSubmit={handleSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton type="submit">
              <Send size={16} />
            </NewsletterButton>
          </NewsletterForm>
        </Column>
      </Content>
      <Copyright>
        Copyright © {new Date().getFullYear()} Sarboda Girls Hostel. All rights reserved.
      </Copyright>
      <ScrollToTop onClick={scrollToTop}>
        <ChevronUp size={20} />
      </ScrollToTop>
    </FooterSection>
  );
};

export default Footer;