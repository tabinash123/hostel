import React from 'react';
import styled from 'styled-components';

// Import images (adjust paths as needed)

import library from '../../assets/hostel/library.PNG';
import canteen from '../../assets/hostel/canteen.PNG';
import garden from '../../assets/hostel/garden.PNG';
import room from '../../assets/hostel/room.PNG';
import recreational from '../../assets/hostel/recreational.PNG';

const SectionContainer = styled.section`
  padding: 40px 20px;
  // background-color: #f5f5f5;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardContainer = styled.div`
  display: grid;
    grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;

`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 1.2rem;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const services = [
  {
    title: "Affordable Rooms",
    description: "Our library provides a quiet environment for focused study. With a wide range of medical textbooks, journals, and digital resources, you'll have everything you need for your medical preparation. The library is open 24/7, ensuring you can study whenever you need to.",
    image: room
  },
  {
    title: "Library",
    description: "Our library provides a quiet environment for focused study. With a wide range of medical textbooks, journals, and digital resources, you'll have everything you need for your medical preparation. The library is open 24/7, ensuring you can study whenever you need to.",
    image: library
  },
  {
    title: "Hygenic Canteen",
    description: "Our canteen offers a diverse menu of healthy, balanced meals prepared fresh daily. We cater to various dietary requirements, ensuring that you stay energized throughout your rigorous study schedule. It's also a great place to socialize and take study breaks.",
    image: canteen
  },
  {
    title: "Peaceful Garden",
    description: "Our well-equipped gym helps you maintain a healthy work-life balance. Regular exercise is crucial for managing stress and improving cognitive function. We feature modern cardio and strength training equipment, suitable for all fitness levels.",
    image: garden
  },
  {
    title: "Fun Activities",
    description: "Stay connected with our high-speed Wi-Fi available throughout the hostel. Whether you're researching for your studies, attending online lectures, or staying in touch with family and friends, our reliable internet connection has got you covered in all areas of the hostel.",
    image: recreational
  }
];

const HostelServices = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>Our Facilities</Title>
        <Subtitle>Designed to support your medical preparation journey</Subtitle>
      </TitleContainer>
      <CardContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <CardImage src={service.image} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </SectionContainer>
  );
};

export default HostelServices;