import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/hostel/hostel2.jpg'

const IntroSection = styled.section`
  background-color: #faf7f2;
  padding: 30px 0;

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  @media (min-width: 1024px) {
    // padding: 70px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    gap: 50px;
  }
`;

const ImageContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    flex: 1;
    position: relative;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: #333;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: #ff6b6b;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const AboutUsIntro = () => {
  return (
    <IntroSection>
      <Container>
        <ImageContainer>
          <MainImage src={img1} alt="Sarboda Girls Hostel Main Building" />
        </ImageContainer>
        <Content>
          <Title>Welcome to Sarboda Girls Hostel</Title>
          <Subtitle>Your Home Away From Home in Kathmandu</Subtitle>
          <Description>
            At Sarboda Girls Hostel, we believe in providing more than just accommodation.
            We offer a nurturing environment where young women can thrive academically,
            personally, and socially. Our state-of-the-art facilities, coupled with a
            supportive community, create the perfect setting for students to pursue their
            dreams and build lifelong friendships.
          </Description>
          <Description>
            Founded in [Year], Sarboda has been a cornerstone of female education in
            Kathmandu, fostering an atmosphere of growth, independence, and mutual respect.
            Our dedicated staff and modern amenities ensure that every resident feels safe,
            comfortable, and inspired throughout their stay.
          </Description>
        </Content>
      </Container>
    </IntroSection>
  );
};

export default AboutUsIntro;