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
      course: "Bachelor of Computer Science",
      content: "Living in this hostel has been a wonderful experience. The study environment is perfect, and I've made lifelong friends here.",
      rating: 5
    },
    {
      name: "Priya Thapa",
      image: "https://example.com/priya.jpg",
      course: "Bachelor of Business Administration",
      content: "The hostel staff is incredibly supportive, and the facilities are top-notch. It feels like a home away from home.",
      rating: 4
    },
    {
      name: "Sabina Gurung",
      image: "https://example.com/sabina.jpg",
      course: "Bachelor of Nursing",
      content: "I appreciate the security measures in place. As a student far from home, it gives me and my parents peace of mind.",
      rating: 5
    },
    {
      name: "Nisha Poudel",
      image: "https://example.com/nisha.jpg",
      course: "Bachelor of Arts",
      content: "The location is perfect - close to my college and local amenities. The rooms are always clean and well-maintained.",
      rating: 4
    },
    {
      name: "Anita Bhattarai",
      image: "https://example.com/anita.jpg",
      course: "Bachelor of Engineering",
      content: "I love the study rooms and the Wi-Fi connectivity. It's been crucial for my academic success.",
      rating: 5
    },
    {
      name: "Bipana Karki",
      image: "https://example.com/bipana.jpg",
      course: "Bachelor of Science",
      content: "The food in the hostel mess is delicious and reminds me of home. The staff is always open to our feedback.",
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
                <StudentCourse>{review.course}</StudentCourse>
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