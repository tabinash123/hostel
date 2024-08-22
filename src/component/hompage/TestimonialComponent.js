import React from 'react';
import styled from 'styled-components';
import { Star, Quote } from 'lucide-react';

const ReviewSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    padding: 50px 20px;
  }

  @media (min-width: 1024px) {
    padding: 75px 20px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #ff6b6b;
  text-align: center;
  margin-bottom: 20px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
    max-width: 600px;
  }
`;

const ReviewGrid = styled.div`
  display: grid;
    grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

const ReviewCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 20px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const StudentImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const StudentInfo = styled.div`
  flex-grow: 1;
`;

const StudentName = styled.h3`
  font-size: 1rem;
  color: #34495e;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StudentCourse = styled.p`
  font-size: 0.8rem;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ReviewContent = styled.div`
  position: relative;
  font-size: 0.9rem;
  color: #2c3e50;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
`;

const QuoteIcon = styled(Quote)`
  position: absolute;
  top: -10px;
  left: -10px;
  color: #ff6b6b;
  opacity: 0.2;
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled(Star)`
  color: #f1c40f;
  margin-right: 2px;
`;

const StudentReviewSection = () => {
const reviews = [
  {
    name: "Aarati Sharma",
    image: "https://example.com/aarati.jpg",
    content: "The hostel at Rise Institute is perfect for MBBS aspirants. The study environment is conducive to long hours of preparation, and the peer support is invaluable.",
    rating: 5
  },
  {
    name: "Priya Thapa",
    image: "https://example.com/priya.jpg",
    content: "I find the hostel's resources incredibly helpful for my medical entrance exam preparation. The staff understands the pressures we're under and provides great support.",
    rating: 4
  },
  {
    name: "Sabin Gurung",
    image: "https://example.com/sabina.jpg",
    content: "The hostel's proximity to Rise Institute saves a lot of commute time. The security measures give my parents peace of mind, allowing me to focus on my studies.",
    rating: 5
  },
  {
    name: "Nisha Poudel",
    image: "https://example.com/nisha.jpg",
    content: "The hostel organizes group study sessions which have been immensely helpful. The rooms are comfortable, allowing for much-needed rest between intense study periods.",
    rating: 4
  },
  {
    name: "Anita Bhattarai",
    image: "https://example.com/anita.jpg",
    content: "The hostel's 24/7 Wi-Fi and dedicated study areas make preparation much easier. The environment is perfect for focused, long-term study for medical exams.",
    rating: 5
  },
  {
    name: "Bipin Karki",
    image: "https://example.com/bipana.jpg",
    content: "The hostel's meal plan is well-suited for busy medical aspirants. The food is nutritious and varied, which helps maintain our health during the stressful preparation period.",
    rating: 4
  }
];
  return (
    <ReviewSection>
      <Title>What Our Students Say</Title>
      <Subtitle>Hear from our residents about their experiences living in our hostel</Subtitle>
      <ReviewGrid>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewHeader>
              <StudentImage src={review.image} alt={review.name} />
              <StudentInfo>
                <StudentName>{review.name}</StudentName>
              </StudentInfo>
            </ReviewHeader>
            <ReviewContent>
              <QuoteIcon size={24} />
              {review.content}
            </ReviewContent>
            <ReviewRating>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={16} fill={i < review.rating ? "#f1c40f" : "none"} />
              ))}
            </ReviewRating>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </ReviewSection>
  );
};

export default StudentReviewSection;