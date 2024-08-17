import React from 'react';
import styled from 'styled-components';
import { Wifi, BookOpen, Coffee, Shield, Utensils, Sunset, Wind, Users } from 'lucide-react';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  text-align: center;
  color: #ff6b6b;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const AmenityCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 15px;
  color: #ff6b6b;
`;

const AmenityTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;

const AmenityDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const AmenitiesSection = () => {
  const amenities = [
    { icon: <Wifi size={32} />, title: "High-Speed Wi-Fi", description: "Fast internet for online classes and research." },
    { icon: <BookOpen size={32} />, title: "Study Areas", description: "Quiet spaces for focused learning and group studies." },
    { icon: <Coffee size={32} />, title: "Common Room", description: "Comfortable space to relax and socialize with peers." },
    { icon: <Shield size={32} />, title: "24/7 Security", description: "Round-the-clock security with CCTV surveillance." },
    { icon: <Utensils size={32} />, title: "Dining Hall", description: "Hygienic meals with vegetarian options available." },
    { icon: <Sunset size={32} />, title: "Outdoor Space", description: "Safe courtyard for outdoor activities and fresh air." },
    { icon: <Wind size={32} />, title: "Laundry Facilities", description: "On-site laundry machines for convenience." },
    { icon: <Users size={32} />, title: "Counseling Services", description: "Professional support for academic and personal growth." }
  ];

  return (
    <Section>
      <Title>Hostel Amenities</Title>
      <Subtitle>Experience a safe and supportive living environment designed specifically for female students.</Subtitle>
      <AmenitiesGrid>
        {amenities.map((amenity, index) => (
          <AmenityCard key={index}>
            <IconWrapper>{amenity.icon}</IconWrapper>
            <AmenityTitle>{amenity.title}</AmenityTitle>
            <AmenityDescription>{amenity.description}</AmenityDescription>
          </AmenityCard>
        ))}
      </AmenitiesGrid>
    </Section>
  );
};

export default AmenitiesSection;