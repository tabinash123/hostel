import React from 'react';
import styled from 'styled-components';
import { Target, Eye, BookOpen, Users } from 'lucide-react';

const Section = styled.section`
  // background-color: #fff5f5;
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  color: #333;
  margin-bottom: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff6b6b;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ValueItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #666;
`;

const MissionVisionComponent = () => {
  return (
    <Section>
      <Container>
        <Title>Our Mission & Vision</Title>
        <ContentWrapper>
          <Card>
            <CardTitle>
              <Target size={24} />
              Our Mission
            </CardTitle>
            <CardContent>
              To provide a safe, nurturing, and empowering environment for young women pursuing higher education in Nepal. We strive to foster academic excellence, personal growth, and leadership skills that will enable our residents to become confident and successful individuals in their chosen fields.
            </CardContent>
          </Card>
          <Card>
            <CardTitle>
              <Eye size={24} />
              Our Vision
            </CardTitle>
            <CardContent>
              To be the leading girls' hostel in Nepal, recognized for our commitment to holistic development, academic support, and creating a community of empowered young women who will contribute positively to society.
            </CardContent>
            <ValuesList>
              <ValueItem>
                <BookOpen size={20} />
                Promoting academic excellence and lifelong learning
              </ValueItem>
              <ValueItem>
                <Users size={20} />
                Fostering a supportive and inclusive community
              </ValueItem>
              <ValueItem>
                <Target size={20} />
                Empowering women to become leaders in their fields
              </ValueItem>
            </ValuesList>
          </Card>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default MissionVisionComponent;