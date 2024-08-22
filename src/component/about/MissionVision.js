import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 50px 30px;
  }

  @media (max-width: 1024px) {
    padding: 0px 40px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-weight: bold;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const ContentBox = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const SubTitle = styled.h3`
  font-size: clamp(1.3rem, 3vw, 2rem);
  color: #ff6b6b;
  margin-bottom: 15px;
  font-weight: bold;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Content = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: #555;
  line-height: 1.6;
`;

const MissionVisionSection = () => {
  return (
    <Section>
      <Title>Our Mission and Vision</Title>
      <ContentWrapper>
        <ContentBox>
          <SubTitle>Our Mission</SubTitle>
          <Content>
            Our mission is to provide a safe, supportive, and empowering living environment for Medical students in Nepal. We strive to foster academic excellence, personal growth, and cultural understanding, enabling our residents to thrive in their educational journey and become confident, well-rounded individuals.
          </Content>
        </ContentBox>
        <ContentBox>
          <SubTitle>Our Vision</SubTitle>
          <Content>
            We envision a future where every  student in Nepal has access to quality education and a nurturing living environment. Our hostel aims to be a beacon of excellence, setting the standard for student accommodation by blending modern amenities with a culture of respect, diversity, and continuous improvement.
          </Content>
        </ContentBox>
      </ContentWrapper>
    </Section>
  );
};

export default MissionVisionSection;