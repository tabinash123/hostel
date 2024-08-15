import React from 'react';
import styled from 'styled-components';

import img1 from "../../assets/rooms/1.jpg";
import img2 from "../../assets/rooms/2.jpg";
import img3 from "../../assets/rooms/3.jpg";
import img4 from "../../assets/rooms/1.jpg";
import img5 from "../../assets/rooms/5.jpg";
import img6 from "../../assets/rooms/2.jpg";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const RoomCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PopularChoice = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff6b6b;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
`;

const RoomInfo = styled.div`
  padding: 20px;
`;

const RoomType = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;

const RoomDetails = styled.p`
  color: #666;
  margin-bottom: 15px;
  font-size: 0.9rem;
`;

const RoomPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 15px;
`;

const BookButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
  }
`;

const RoomsSection = () => {
  const rooms = [
  {
    type: "Twin Sharing Room",
    image: img1,
    guests: 2,
    amenities: "Study Table, Wi-Fi",
    price: "NPR 8,000/month",
    popularChoice: true
  },
  {
    type: "Triple Sharing Room",
    image: img2,
    guests: 3,
    amenities: "Study Table, Wi-Fi, Extra Storage",
    price: "NPR 7,000/month",
    popularChoice: false
  },
  {
    type: "Single Room",
    image: img3,
    guests: 1,
    amenities: "Private Study Area, Wi-Fi, En-suite Bathroom",
    price: "NPR 12,000/month",
    popularChoice: true
  },
  {
    type: "Deluxe Twin Room",
    image: img4,
    guests: 2,
    amenities: "Wi-Fi, AC, Private Balcony",
    price: "NPR 10,000/month",
    popularChoice: true
  },
  {
    type: "Executive Suite",
    image: img5,
    guests: 1,
    amenities: "Living Area, Wi-Fi, Private Balcony",
    price: "NPR 25,000/month",
    popularChoice: false
  },
  {
    type: "Premium Double Room",
    image: img6,
    guests: 2,
    amenities: "Two Study Desks, Wi-Fi, Shared Bathroom",
    price: "NPR 12,000/month per person",
    popularChoice: true
  }
];
  return (
    <Section>
      <Title>Our Rooms</Title>
      <Subtitle>Choose from our comfortable and secure living spaces for students</Subtitle>
      <RoomsGrid>
        {rooms.map((room, index) => (
          <RoomCard key={index}>
            <div style={{ position: 'relative' }}>
              <RoomImage src={room.image} alt={room.type} />
            </div>
            <RoomInfo>
              <RoomType>{room.type}</RoomType>
              <RoomDetails>{room.guests} {room.guests > 1 ? 'Students' : 'Student'} • {room.amenities}</RoomDetails>
              <RoomPrice>{room.price}</RoomPrice>
              <BookButton>BOOK NOW</BookButton>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomsGrid>
    </Section>
  );
};

export default RoomsSection;