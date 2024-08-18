import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Phone, User, Menu, X, Home, BedDouble, Mail, Info, Calendar } from 'lucide-react';

const HeaderWrapper = styled.header`
  font-family: Arial, sans-serif;
`;

const TopBar = styled.div`
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  font-size: 14px;

  @media (max-width: 768px) {
  display: none;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TopBarRight = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  color: #ffffff;
  font-size: 18px;
`;

const SubHeader = styled.div`
  background-color: #f0ece3;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @media (max-width: 768px) {
  display: none;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CalculateButton = styled(Link)`
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: #000000;
  padding: 5px 0;
  text-decoration: none;
`;

const FindAdvisor = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: #000000;
  padding: 5px 0;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    // flex-wrap: wrap;
  padding: 10px 10px;
  }
`;

const MainLogo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  text-decoration: none;

  @media (max-width: 1024px) {
    flex-basis: 100%;
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-basis: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-weight: normal;
  
  &:hover, &.active {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const BookVisitButton = styled(Link)`
  background-color: #ffa500;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  @media (max-width: 1024px) {
    flex-basis: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 280px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const DrawerHeader = styled.div`
  padding: 20px;
  background-color: #f0ece3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DrawerLogo = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const DrawerNavItem = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-weight: normal;
  font-size: 16px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #f0f0f0;
  
  &:hover, &.active {
    background-color: #f9f9f9;
    font-weight: bold;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #000000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 999;
`;

const DrawerFooter = styled.div`
  padding: 20px;
  background-color: #f0ece3;
  margin-top: auto;
`;

const DrawerContact = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  return (
    <HeaderWrapper>
      <TopBar>
        <PhoneNumber>
          <Phone size={14} />
          <span>+977 01-4541165</span>
        </PhoneNumber>
        <TopBarRight>
          <Logo>Rise Institute For Medical Education</Logo>
          
        </TopBarRight>
      </TopBar>

      <MainHeader>
        <MainLogo to="/">Rise Institute For Medical Education</MainLogo>
        <MenuButton onClick={toggleDrawer}>
          <Menu size={24} />
        </MenuButton>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/room">Rooms & Facilities</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/about">About-Us</NavItem>
        </Nav>
      </MainHeader>
      <Overlay isOpen={isDrawerOpen} onClick={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen}>
        <DrawerHeader>
          <DrawerLogo>Creative Genius Hostel</DrawerLogo>
          <CloseButton onClick={toggleDrawer}>
            <X size={24} />
          </CloseButton>
        </DrawerHeader>
        <DrawerNav>
          <DrawerNavItem to="/" onClick={toggleDrawer}>
            <Home size={18} /> Home
          </DrawerNavItem>
          <DrawerNavItem to="/room" onClick={toggleDrawer}>
            <BedDouble size={18} /> Rooms & Facilities
          </DrawerNavItem>
          <DrawerNavItem to="/contact" onClick={toggleDrawer}>
            <Mail size={18} /> Contact
          </DrawerNavItem>
          <DrawerNavItem to="/about" onClick={toggleDrawer}>
            <Info size={18} /> About-Us
          </DrawerNavItem>
         
        </DrawerNav>
        <DrawerFooter>
          <DrawerContact>
            <Phone size={14} />
            <span>+977 1234567890</span>
          </DrawerContact>
          <CalculateButton to="/calculate-fees" onClick={toggleDrawer}>Calculate Hostel Fees</CalculateButton>
        </DrawerFooter>
      </Drawer>
    </HeaderWrapper>
  );
};

export default Header;