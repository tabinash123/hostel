import React, { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import imag from '../../assets/gallary/11.jpg';

const PageWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 0;
  font-family: 'Poppins', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
`;


const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  gap: 40px;

  @media (max-width: 1024px) {
    padding: 40px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const FormTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 10px;
  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  color: #333;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-height: 150px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-start;

  &:hover {
    background-color: #ff5252;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
    align-self: stretch;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const InfoTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 25px;
  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const InfoIcon = styled.div`
  margin-right: 15px;
  color: #ff6b6b;
`;

const InfoText = styled.div`
  font-size: 1rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #ff6b6b;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const SocialIcon = styled.a`
  color: #ff6b6b;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5252;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageWrapper>
      <ContentWrapper>
     
        <Content>
         
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoItem>
              <InfoIcon><MapPin size={24} /></InfoIcon>
              <InfoText>Kamalpokhari, Kathmandu, Nepal</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><Phone size={24} /></InfoIcon>
              <InfoText>+977 01-4541165</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><Mail size={24} /></InfoIcon>
              <InfoText>risedoctors@gmail.com</InfoText>
            </InfoItem>
            <InfoItem>
            
            </InfoItem>
            <SocialLinks>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </SocialIcon>
         
            </SocialLinks>
        
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Get in Touch</FormTitle>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <SubmitButton type="submit">
              <Send size={18} />
              Send Message
            </SubmitButton>
          </ContactForm>
        </Content>
        <Map>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9962669620993!2d85.32496431503138!3d27.711248920998237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzQwLjUiTiA4NcKwMTknMzcuOCJF!5e0!3m2!1sen!2sus!4v1660434910562!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Map>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ContactPage;