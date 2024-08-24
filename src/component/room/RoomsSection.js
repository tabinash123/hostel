import React from 'react';
import styled from 'styled-components';
// Import images (adjust paths as needed)

import library from '../../assets/hostel/library.PNG';
import canteen from '../../assets/hostel/canteen.PNG';
import garden from '../../assets/hostel/garden.PNG';
import room from '../../assets/hostel/room.PNG';
import recreational from '../../assets/hostel/recreational.PNG';

const SectionContainer = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 25px;
  }
`;

const SectionSubtitle = styled.p`
  color: #34495e;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const Introduction = styled.div`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.65;
    margin-bottom: 35px;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 40px;
  }
`;

const ServiceItem = styled.article`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 60px;
  }
`;

const ServiceTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const ServiceImageContainer = styled.div`
  max-width: 500px;
  height: 200px;
  margin-bottom: 15px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 225px;
    margin-bottom: 18px;
  }

  @media (min-width: 1024px) {
    height: 250px;
    margin-bottom: 20px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ServiceDescription = styled.p`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.55;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
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
      <SectionTitle>Our Facilities</SectionTitle>
      <SectionSubtitle>Designed to support your medical preparation journey</SectionSubtitle>
      <Introduction>
        Welcome to our state-of-the-art hostel, specifically designed to cater to the needs of medical students. We understand the rigorous demands of medical education, and our facilities are tailored to provide you with the perfect environment for both study and relaxation. From our well-stocked library to our modern gym, every aspect of our hostel is crafted to enhance your learning experience and ensure your comfort during your stay with us.
      </Introduction>
      {services.map((service, index) => (
        <ServiceItem key={index}>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceImageContainer>
            <ServiceImage src={service.image} alt={service.title} />
          </ServiceImageContainer>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceItem>
      ))}
    </SectionContainer>
  );
};

export default HostelServices;