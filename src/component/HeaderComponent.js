import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Phone, User, Menu, X } from 'lucide-react';

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
  padding: 10px 20px;
  background-color: #ffffff;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
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
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
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

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <HeaderWrapper>
      <TopBar>
        <PhoneNumber>
          <Phone size={14} />
          <span>+977 1234567890</span>
        </PhoneNumber>
        <TopBarRight>
          <Logo>Creative</Logo>
          <Logo>GIRLS HOSTEL</Logo>
        </TopBarRight>
      </TopBar>
      <SubHeader>
        <CalculateButton to="/calculate-fees">Calculate Hostel Fees</CalculateButton>
        <FindAdvisor to="/find-advisor">
          <User size={14} />
          Find Admission Advisor
        </FindAdvisor>
      </SubHeader>
      <MainHeader>
        <MainLogo to="/">Creative Genius Hostel</MainLogo>
        <MenuButton onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>
        <Nav isOpen={isNavOpen}>
          <NavItem to="/room">Rooms & Facilities</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/about">About-Us</NavItem>
        </Nav>
        <BookVisitButton to="/book-tour">Book Hostel Tour</BookVisitButton>
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;