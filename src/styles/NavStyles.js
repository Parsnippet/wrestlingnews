import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  
  &:hover {
    color: #00ff88;
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
