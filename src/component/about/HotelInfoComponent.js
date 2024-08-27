import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  text-align: center;
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