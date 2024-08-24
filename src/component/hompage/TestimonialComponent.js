import React, { useState } from 'react';
import styled from 'styled-components';
import { Minus, Plus } from 'lucide-react';
import img1 from '../../assets/resort/hotel2.jpg'

const FAQSection = styled.section`
  padding: 50px 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    margin: 40px auto;
    flex-direction: row;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    margin: 50px auto;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 0.9rem;
  color: #ff4500;
  margin-bottom: 10px;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  color: #0c2e1c;
  margin-bottom: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Question = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #0c2e1c;
  font-weight: bold;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 15px 0;
    font-size: 1rem;
  }
`;

const Answer = styled.div`
  padding: 0 0 12px 0;
  color: #666;
  line-height: 1.6;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 0 0 15px 0;
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${props => props.isOpen ? '#ff4500' : '#f0f0f0'};
  border-radius: 4px;
  color: ${props => props.isOpen ? 'white' : '#0c2e1c'};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
    max-height: 500px;
  }

  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`;

const FAQList = [
  {
    question: "Does Rise Institute For Medical Education provide online resources for MBBS and MD entrance exam preparation?",
    answer: "Yes, we offer a comprehensive digital learning platform that includes video lectures, practice tests, and interactive study materials for MBBS and MD entrance exams. Our online resources are regularly updated to align with the latest exam patterns and syllabus changes by the Nepal Medical Council."
  },
  {
    question: "How does the hostel support students in accessing telemedicine and virtual clinical rotations?",
    answer: "We have high-speed fiber-optic internet throughout the hostel, including dedicated spaces for telemedicine sessions. We also provide access to virtual reality (VR) setups for simulated clinical experiences, helping students participate in virtual rotations with partner hospitals across Nepal and internationally."
  },
  {
    question: "What measures does the hostel take to ensure a healthy living environment, especially considering recent global health concerns?",
    answer: "We maintain strict hygiene protocols, including regular sanitization of common areas, HEPA air purifiers in study rooms and lounges, and contactless sanitizer dispensers throughout the facility. We also have a tie-up with a nearby health clinic for quick medical assistance and offer mental health support services."
  },
  {
    question: "Are there opportunities for research collaboration or internships with local medical institutions?",
    answer: "Absolutely! We have partnerships with several leading hospitals and research institutions in Kathmandu. Our career development office helps students find and apply for research assistant positions, internships, and volunteer opportunities. We also organize regular workshops on research methodologies and scientific paper writing."
  },
  {
    question: "How does the hostel accommodate the diverse dietary needs of international students?",
    answer: "Our cafeteria offers a variety of meal options, including vegetarian, vegan, halal, and gluten-free choices. We have a rotating menu that features both Nepali and international cuisines. Students can also access shared kitchen facilities to prepare their own meals if they prefer. We regularly collect feedback to ensure our menu meets the diverse needs of our student community."
  }
];


const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <LeftColumn>
        <Title>Have Any Questions?</Title>
        <Subtitle>Frequently Asked Questions</Subtitle>
        {FAQList.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleQuestion(index)}>
              {faq.question}
              <IconWrapper isOpen={openIndex === index}>
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </IconWrapper>
            </Question>
            {openIndex === index && (
              <Answer>{faq.answer}</Answer>
            )}
          </FAQItem>
        ))}
      </LeftColumn>
      <RightColumn>
        <Image src={img1} alt="Rise Institute Study Room" />
      </RightColumn>
    </FAQSection>
  );
};

export default FAQComponent;