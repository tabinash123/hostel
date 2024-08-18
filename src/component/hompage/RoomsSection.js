import React, { useState } from 'react';
import styled from 'styled-components';
import { Wifi, Book, Maximize, Users, Mountain, Fan, Tv, Lock } from 'lucide-react';

import img1 from "../../assets/rooms/1.jpg";
import img2 from "../../assets/rooms/2.jpg";
import img3 from "../../assets/rooms/3.jpg";
import img4 from "../../assets/rooms/1.jpg";
import img5 from "../../assets/rooms/5.jpg";
import img6 from "../../assets/rooms/2.jpg";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    padding: 75px 20px;
  }

  @media (min-width: 1024px) {
    padding: 100px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #ff6b6b;
  text-align: center;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 50px;
  }
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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

const RoomCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomInfo = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const RoomName = styled.h3`
  font-size: 1.3rem;
  color: #34495e;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const RoomDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.6;
  flex-grow: 1;
`;

const RoomFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #34495e;
  background-color: #f0f3f5;
  padding: 5px 10px;
  border-radius: 20px;

  svg {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const RoomPrice = styled.div`
  font-size: 1.1rem;
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  background-color: ${props => props.primary ? '#ff6b6b' : 'transparent'};
  color: ${props => props.primary ? '#ffffff' : '#000000'};
  border: ${props => props.primary ? 'none' : '2px solid #ff6b6b'};
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 12px;
    font-size: 1rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
   @media (max-width: 728px) {
    max-width: 350px;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  // @media (min-width: 576px) {
    max-width: 400px;
  }

  @media (min-width: 992px) {
    max-width: 800px;
    flex-direction: row;
    max-height: 80vh;
  }
`;

const ModalImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    width: 50%;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;

  @media (min-width: 576px) {
    height: 250px;
  }

  @media (min-width: 992px) {
    height: 100%;
  }
`;

const ModalInfo = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
    overflow-y: auto;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (min-width: 576px) {
    font-size: 1.8rem;
  }
`;

const ModalDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.4;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;


const ModalFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const ModalFeature = styled(Feature)`
  font-size: 0.8rem;
  padding: 3px 8px;
`;

const ModalAmenities = styled.p`
  font-size: 0.9rem;
  color: #34495e;
  margin-bottom: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2c3e50;
`;

const RoomsSection = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      name: "Standard Twin Share",
      image: img1,
      description: "Comfortable room with two single beds, perfect for sharing with a roommate.",
      features: { wifi: true, capacity: 2,  fan: true, tv: false, safe: true },
      price: "NPR 8,000 per month",
      amenities: "Two single beds, Study desks, Wardrobes, Shared bathroom"
    },
    {
      name: "Deluxe Single",
      image: img2,
      description: "Spacious single room for students who prefer privacy and extra space.",
      features: { wifi: true,  capacity: 1, fan: true, tv: false, safe: true },
      price: "NPR 12,000 per month",
      amenities: "Single bed, Large study desk, Wardrobe, En-suite bathroom"
    },
    {
      name: "Triple Share Economy",
      image: img3,
      description: "Budget-friendly option with three beds, ideal for students looking to save on accommodation.",
      features: { wifi: true,  capacity: 3, fan: true, tv: false, safe: true },
      price: "NPR 6,000 per month",
      amenities: "Three single beds, Study corners, Shared storage, Shared bathroom"
    },
    {
      name: "Quad Share Suite",
      image: img4,
      description: "Large room for four, promoting a communal living experience with shared facilities.",
      features: { wifi: true, capacity: 4,  fan: true, tv: true, safe: true },
      price: "NPR 7,000 per month",
      amenities: "Four single beds, Study area, Lounge space, Shared bathroom"
    },
    {
      name: "Premium Single",
      image: img5,
      description: "Our most luxurious single room option with premium amenities and mountain views.",
      features: { wifi: true, capacity: 1,  fan: true, tv: true, safe: true },
      price: "NPR 15,000 per month",
      amenities: "Double bed, Large study desk, Wardrobe, En-suite bathroom, Mini-fridge"
    },
    {
      name: "Double Study Suite",
      image: img6,
      description: "Designed for serious students, this room features extra study space and a quiet environment.",
      features: { wifi: true,  capacity: 2,  fan: true, tv: false, safe: true },
      price: "NPR 10,000 per month",
      amenities: "Two single beds, Large study desks, Bookshelves, Shared bathroom, Reading lamps"
    }
  ];

  return (
    <Section>
      <Title>Our Accommodation Options</Title>
      <Subtitle>Discover comfortable and secure living spaces designed for the modern Nepali student.</Subtitle>
      <RoomsGrid>
        {rooms.map((room, index) => (
          <RoomCard key={index}>
            <RoomImage src={room.image} alt={room.name} />
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <RoomDescription>{room.description}</RoomDescription>
              <RoomFeatures>
                <Feature><Wifi size={16} /> Wi-Fi</Feature>
                <Feature><Users size={16} /> {room.features.capacity} {room.features.capacity > 1 ? 'Students' : 'Student'}</Feature>
              </RoomFeatures>
              <RoomPrice>{room.price}</RoomPrice>
              <ButtonGroup>
                <Button onClick={() => setSelectedRoom(room)}>Quick View</Button>
              </ButtonGroup>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomsGrid>
      {selectedRoom && (
        <Modal onClick={() => setSelectedRoom(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedRoom(null)}>&times;</CloseButton>
            <ModalImageContainer>
              <ModalImage src={selectedRoom.image} alt={selectedRoom.name} />
            </ModalImageContainer>
            <ModalInfo>
              <ModalTitle>{selectedRoom.name}</ModalTitle>
              <ModalDescription>{selectedRoom.description}</ModalDescription>
              <ModalFeatures>
                <ModalFeature><Wifi size={14} /> Wi-Fi</ModalFeature>
                <ModalFeature><Users size={14} /> {selectedRoom.features.capacity} {selectedRoom.features.capacity > 1 ? 'Students' : 'Student'}</ModalFeature>
                <ModalFeature><Fan size={14} /> Fan</ModalFeature>
                {selectedRoom.features.tv && <ModalFeature><Tv size={14} /> TV</ModalFeature>}
                <ModalFeature><Lock size={14} /> Safe</ModalFeature>
                <ModalFeature><Book size={14} /> Study Area</ModalFeature>
              </ModalFeatures>
              <ModalAmenities><strong>Amenities:</strong> {selectedRoom.amenities}</ModalAmenities>
              <RoomPrice>{selectedRoom.price}</RoomPrice>
            </ModalInfo>
          </ModalContent>
        </Modal>
      )}
    </Section>
  );
};

export default RoomsSection;