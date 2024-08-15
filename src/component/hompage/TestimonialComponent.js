import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Section = styled.section`
  background-color: #f8f9fa;
  padding: 80px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  color: #333;
  margin-bottom: 50px;
  font-weight: bold;
`;

const ReviewCarousel = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 0;
`;

const ReviewSlide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Review = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  margin: 0 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 0 0 calc(100% - 30px);
  max-width: calc(100% - 30px);
  animation: ${fadeIn} 0.5s ease;

  @media (min-width: 768px) {
    flex: 0 0 calc(50% - 30px);
    max-width: calc(50% - 30px);
  }

  @media (min-width: 1024px) {
    flex: 0 0 calc(33.333% - 30px);
    max-width: calc(33.333% - 30px);
  }
`;

const StudentName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const StudentInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Stars = styled.div`
  color: #ffc107;
  display: flex;
  margin-bottom: 15px;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff5252;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;

const StudentReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Aarati Sharma",
      info: "2nd Year, Bachelor of Science",
      text: "Living at this hostel has been a wonderful experience. The supportive environment and excellent facilities have helped me focus on my studies while making lifelong friends.",
      rating: 5
    },
    {
      name: "Priya Thapa",
      info: "3rd Year, Bachelor of Business Administration",
      text: "I love the sense of community here. The staff is always helpful, and the mentorship program has been invaluable for my personal and academic growth.",
      rating: 5
    },
    {
      name: "Sunita Rai",
      info: "1st Year, Bachelor of Arts",
      text: "As a first-year student, I was nervous about living away from home. But the welcoming atmosphere and security measures have made me feel safe and comfortable.",
      rating: 4
    },
    {
      name: "Anjali Gurung",
      info: "4th Year, Bachelor of Engineering",
      text: "The study facilities are top-notch! I've significantly improved my grades thanks to the quiet study areas and the collaborative environment with other motivated students.",
      rating: 5
    },
    {
      name: "Binita Magar",
      info: "2nd Year, Bachelor of Commerce",
      text: "The hostel's location is perfect - close to my college and all necessary amenities. The balanced meals and yoga sessions have also helped me maintain a healthy lifestyle.",
      rating: 4
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section>
      <Container>
        <Title>What Our Students Say</Title>
        <ReviewCarousel>
          <ReviewSlide style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}>
            {reviews.map((review, index) => (
              <Review key={index}>
                <StudentName>{review.name}</StudentName>
                <StudentInfo>{review.info}</StudentInfo>
                <Stars>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </Stars>
                <ReviewText>"{review.text}"</ReviewText>
              </Review>
            ))}
          </ReviewSlide>
          <PrevButton onClick={prevSlide} disabled={currentIndex === 0}>
            <ChevronLeft size={24} />
          </PrevButton>
          <NextButton onClick={nextSlide} disabled={currentIndex === reviews.length - 3}>
            <ChevronRight size={24} />
          </NextButton>
        </ReviewCarousel>
      </Container>
    </Section>
  );
};

export default StudentReviews;