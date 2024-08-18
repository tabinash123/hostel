import React from 'react';
import styled, { keyframes } from 'styled-components';
import img1 from '../../assets/hostel/hostel2.jpg'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const IntroSection = styled.section`
  background-color: #faf7f2;
  padding: 40px 0;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: 768px) {
    padding: 60px 0;
  }

  @media (min-width: 1024px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }

  @media (min-width: 1024px) {
    gap: 60px;
  }
`;

const ImageContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    flex: 1;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: #ff6b6b;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

const Highlight = styled.span`
  color: #ff6b6b;
  font-weight: 600;
`;

const AboutUsIntro = () => {
  return (
    <IntroSection>
      <Container>
        <ImageContainer>
          <MainImage src={img1} alt="Rise Institute For Medical Education Main Building" />
        </ImageContainer>
        <Content>
          <Title>Welcome to Rise Institute For Medical Education</Title>
          <Subtitle>Your Home Away From Home in Kathmandu</Subtitle>
          <Description>
            At Rise Institute For Medical Education, we believe in providing <Highlight>more than just accommodation</Highlight>.
            We offer a nurturing environment where students can thrive academically,
            personally, and socially. Our state-of-the-art facilities, coupled with a
            supportive community, create the perfect setting for aspiring medical professionals to pursue their
            dreams and build lifelong connections.
          </Description>
          <Description>
            Founded with a vision to support medical education, Rise Institute has become a <Highlight>cornerstone of academic excellence</Highlight> in
            Kathmandu, fostering an atmosphere of growth, independence, and mutual respect.
            Our dedicated staff and modern amenities ensure that every resident feels safe,
            comfortable, and inspired throughout their educational journey.
          </Description>
        </Content>
      </Container>
    </IntroSection>
  );
};

export default AboutUsIntro;