import React from 'react';
import styled from 'styled-components';
import { Wifi, BookOpen, Coffee, Shield, Utensils, Sunset, Wind, Users } from 'lucide-react';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;

  @media (min-width: 768px) {
    padding: 50px 30px;
  }

  @media (min-width: 1024px) {
    padding: 60px 40px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  text-align: center;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.25rem);
  text-align: center;
  color: #ff6b6b;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;

const AmenityCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  color: #ff6b6b;

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }
`;

const AmenityTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const AmenityDescription = styled.p`
  font-size: 0.8rem;
  color: #666;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AmenitiesSection = () => {
  const amenities = [
    { icon: <Wifi size={24} />, title: "High-Speed Wi-Fi", description: "Fast internet for online classes and research." },
    { icon: <BookOpen size={24} />, title: "Study Areas", description: "Quiet spaces for focused learning and group studies." },
    { icon: <Coffee size={24} />, title: "Common Room", description: "Comfortable space to relax and socialize with peers." },
    { icon: <Shield size={24} />, title: "24/7 Security", description: "Round-the-clock security with CCTV surveillance." },
    { icon: <Utensils size={24} />, title: "Dining Hall", description: "Hygienic meals with vegetarian options available." },
    { icon: <Sunset size={24} />, title: "Outdoor Space", description: "Safe courtyard for outdoor activities and fresh air." },
    { icon: <Wind size={24} />, title: "Laundry Facilities", description: "On-site laundry machines for convenience." },
    { icon: <Users size={24} />, title: "Counseling Services", description: "Professional support for academic and personal growth." }
  ];

  return (
    <Section>
      <Title>Hostel Amenities</Title>
      <Subtitle>Experience a safe and supportive living environment designed specifically for female students.</Subtitle>
      <AmenitiesGrid>
        {amenities.map((amenity, index) => (
          <AmenityCard key={index}>
            <IconWrapper aria-hidden="true">{amenity.icon}</IconWrapper>
            <AmenityTitle>{amenity.title}</AmenityTitle>
            <AmenityDescription>{amenity.description}</AmenityDescription>
          </AmenityCard>
        ))}
      </AmenitiesGrid>
    </Section>
  );
};

export default AmenitiesSection;