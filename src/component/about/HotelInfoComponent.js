import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/resort/hotel6.jpg'
import img2 from '../../assets/resort/hotel3.jpg'

const IntroSection = styled.section`
  background-color: #faf7f2;
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const AccentImage = styled.img`
  position: absolute;
  width: 50%;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  bottom: -30px;
  right: -30px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #ff6b6b;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
`;

const HighlightText = styled.p`
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  font-style: italic;
`;

const AboutUsIntro = () => {
  return (
    <IntroSection>
      <Container>
        <ImageContainer>
          <MainImage src={img1} alt="Sarboda Girls Hostel Main Building" />
          <AccentImage src={img2} alt="Happy Students at Sarboda" />
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
          <HighlightBox>
            <HighlightText>
              "Empowering young women to achieve their full potential in a safe and 
              supportive environment."
            </HighlightText>
          </HighlightBox>
        </Content>
      </Container>
    </IntroSection>
  );
};

export default AboutUsIntro;