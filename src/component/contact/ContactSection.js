import React, { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import imag from '../../assets/resort/hotel4.jpg'
const PageWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  padding: 60px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 107, 107, 0.1);
  overflow: hidden;
`;

const Header = styled.header`
  height: 200px;
  position: relative;
`;

const HeaderContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  min-width: 300px;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

const FormTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ffd0d0;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ffd0d0;
  border-radius: 4px;
  min-height: 150px;
  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff5252;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

const InfoTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const InfoIcon = styled.div`
  margin-right: 15px;
  color: #ff6b6b;
`;

const InfoText = styled.div`
  font-size: 1rem;
  color: #333;
`;

const Map = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid #ffd0d0;
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
    // Here you would typically send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageWrapper>
      <ContentWrapper>
 
        <Content>
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Get in Touch</FormTitle>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoItem>
              <InfoIcon><MapPin size={24} /></InfoIcon>
              <InfoText>123 Hostel Street, Kathmandu, Nepal</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><Phone size={24} /></InfoIcon>
              <InfoText>+977 1234567890</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><Mail size={24} /></InfoIcon>
              <InfoText>info@sarbodagirlshostel.com</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><Clock size={24} /></InfoIcon>
              <InfoText>
                Office Hours: Monday - Friday<br />
                9:00 AM - 5:00 PM
              </InfoText>
            </InfoItem>
            <Map>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240112563968!2d85.31315011503999!3d27.70985798279028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908fa1777d5%3A0x9ae6e7d129d25502!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1660434910562!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Map>
          </ContactInfo>
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ContactPage;