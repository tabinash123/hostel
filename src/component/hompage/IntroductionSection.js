import React from 'react';
import styled from 'styled-components';

// Assuming the image is imported correctly
// import hostelImage from '/api/placeholder/500/300';
import hostelImage from '../../assets/hostel/hostel2.jpg'


const IntroductionSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 10%;
  background-color: #f9f9f9;

  @media (max-width: 1024px) {
    padding: 60px 5%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 5%;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 50%;
  margin-right: 40px;

  @media (max-width: 1024px) {
    max-width: 55%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Underline = styled.div`
  width: 100px;
  height: 4px;
  background-color: #ff6b6b;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HighlightText = styled.span`
  color: #ff6b6b;
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  height: 500px;

  @media (max-width: 1024px) {
    max-width: 40%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const IntroductionComponent = () => {
  return (
    <IntroductionSection>
      <ContentWrapper>
        <Title>Best Girls Hostel in Kathmandu</Title>
        <Subtitle>A Home Away From Home that Makes A Difference</Subtitle>
        <Underline />
        <Description>
          Creative Genius Girls Hostel is the premier accommodation for female students in Kathmandu. Our residents have confidence in us because we provide a safe, comfortable, and nurturing environment along with transparency. Our hostel management strategy is unique and student-oriented.
        </Description>
        <Description>
          We offer a range of amenities, including <HighlightText>comfortable rooms</HighlightText>, <HighlightText>nutritious meals</HighlightText>, <HighlightText>study areas</HighlightText>, and <HighlightText>recreational facilities</HighlightText>. Our expert staff helps students thrive academically and personally.
        </Description>
        <Description>
          As a leading girls' hostel in Kathmandu, our mission is to empower young women in their educational journey, fostering an environment where they can grow, learn, and achieve their goals.
        </Description>
      </ContentWrapper>
      <ImageWrapper>
        <Image src={hostelImage} alt="Creative Genius Girls Hostel Common Area" />
      </ImageWrapper>
    </IntroductionSection>
  );
};

export default IntroductionComponent;