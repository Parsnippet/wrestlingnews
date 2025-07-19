import React from "react";
import { Nav, NavLink } from "../styles/NavStyles";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const LogoText = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 800;
  color: #00ff88;
  padding: 0.5rem 0;
  
  &:hover {
    transform: none;
    background: none;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <LogoText to="/">
          @MegWrestling
        </LogoText>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}
