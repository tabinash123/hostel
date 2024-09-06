import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Room from './pages/Room';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';

const FloatingButton = styled.a`
  position: fixed;
  width: 50px;  // Adjusted width for better responsiveness
  height: 50px; // Adjusted height
  bottom: 20px; // Adjusted for more visibility on smaller screens
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 25px;  // Slightly smaller for better scaling
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); // Softer, more modern shadow
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease-in-out; // Smooth animation on hover
  
  &:hover {
    background-color: #128C7E;
    transform: scale(1.1); // Slightly enlarges on hover
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 25px;
    right: 15px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    bottom: 10px;
    right: 10px;
  }
`;


const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 175">
  <defs>
    <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#20b038"/>
      <stop offset="100%" stop-color="#60d66a"/>
    </linearGradient>
  </defs>
  <path fill="url(#a)" d="M87.5 0C39.2 0 0 39.2 0 87.5c0 18.1 5.5 35 14.9 49l-9.8 35.2 36.1-9.5c13.4 8.5 29.3 13.4 46.3 13.4 48.3 0 87.5-39.2 87.5-87.5S135.8 0 87.5 0z"/>
  <path fill="#fff" d="M128.7 108.7c-1.9 5.4-9.5 9.9-15.5 11.2-4.1.9-9.5 1.6-27.6-5.9-23.2-9.7-38.1-33.5-39.3-35-1.2-1.6-9.5-12.6-9.5-24.1s5.9-17.1 8-19.5c1.7-2 3.7-2.5 5-2.5 1.2 0 2.5 0 3.6.1 1.2.1 2.7-.4 4.3 3.3 1.6 3.7 5.4 12.9 5.9 13.8.5.9.8 2 .2 3.2-.6 1.2-1.1 1.8-2 2.8-.9 1-1.9 2.3-2.7 3.1-.9.9-1.8 1.8-.8 3.5.9 1.7 4.2 7.3 9.1 11.8 6.2 5.7 11.5 7.5 13.1 8.3 1.6.8 2.5.7 3.5-.4 1-1.1 4.1-4.8 5.2-6.5 1.1-1.7 2.2-1.4 3.7-.8 1.5.6 9.5 4.5 11.1 5.3 1.6.8 2.7 1.2 3.1 1.9.4.5.4 3.3-1.5 8.7z"/>
</svg>
);

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <FloatingButton onClick={handleClick}>
      <WhatsAppIcon />
    </FloatingButton>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Room />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterComponent />
        <WhatsAppButton 
          phoneNumber="9823653374"  // Replace with your WhatsApp number
          message="Hello, I have a question!"  // Replace with your default message
        />
      </div>
    </Router>
  );
};

export default App;