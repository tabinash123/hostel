import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const CTASection = styled.section`
  position: relative;
  padding: 80px 20px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  overflow: hidden;
`;

const WaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: white;
  clip-path: polygon(100% 0, 0 0, 0 100%);
`;

const WaveBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background: white;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #555;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }

  &:hover::after {
    left: 100%;
    top: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #ff6b6b;
  color: white;
  border: none;

  &:hover {
    background-color: #ff5252;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: #ff6b6b;
  border: 2px solid #ff6b6b;

  &:hover {
    background-color: #fff0f0;
  }
`;

const Decoration = styled.div`
  position: absolute;
  background-color: #ff6b6b;
  opacity: 0.5;
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
`;

const CurvedLine = styled.div`
  position: absolute;
  border: 2px solid #ff6b6b;
  border-color: #ff6b6b transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
  opacity: 0.3;
`;

const CTAComponent = () => {
  return (
    <CTASection>
      <WaveTop />
      <Content>
        <Title>Start Your Journey With Us Today</Title>
        <Subtitle>
          Experience a supportive and empowering living environment designed for ambitious young women. 
          Take the first step towards your bright future by applying now or scheduling a visit to our hostel.
        </Subtitle>

      </Content>
      <WaveBottom />
      <Decoration style={{ top: '10%', left: '5%', width: '30px', height: '30px' }} />
      <Decoration style={{ top: '70%', right: '10%', width: '20px', height: '20px' }} />
      <Decoration style={{ top: '40%', left: '80%', width: '25px', height: '25px' }} />
      <CurvedLine style={{ top: '-150px', left: '-100px', width: '300px', height: '300px' }} />
      <CurvedLine style={{ bottom: '-150px', right: '-100px', width: '300px', height: '300px', transform: 'rotate(180deg)' }} />
      <CurvedLine style={{ top: '20%', left: '-50px', width: '150px', height: '150px' }} />
      <CurvedLine style={{ bottom: '20%', right: '-50px', width: '150px', height: '150px', transform: 'rotate(180deg)' }} />
    </CTASection>
  );
};

export default CTAComponent;