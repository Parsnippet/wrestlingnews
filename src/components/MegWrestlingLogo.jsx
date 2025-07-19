import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Inter', sans-serif;
`;

const LogoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #00ff88 0%, #00cc6a 50%, #ffffff 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.5rem;
  color: #000;
  position: relative;
  box-shadow: 
    0 8px 25px rgba(0, 255, 136, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: linear-gradient(135deg, #00ff88, #00cc6a);
    border-radius: 8px;
    z-index: -1;
  }
  
  &::after {
    content: 'M';
    position: relative;
    z-index: 1;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const BrandName = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
  
  .highlight {
    color: #00ff88;
  }
`;

const Tagline = styled.div`
  font-size: 0.7rem;
  color: #888;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 2px;
`;

const MegWrestlingLogo = ({ size = 'normal', showTagline = true }) => {
  const isLarge = size === 'large';
  
  return (
    <LogoContainer style={{ 
      gap: isLarge ? '1.5rem' : '1rem',
      transform: isLarge ? 'scale(1.5)' : 'scale(1)'
    }}>
      <LogoIcon style={{
        width: isLarge ? '64px' : '48px',
        height: isLarge ? '64px' : '48px',
        fontSize: isLarge ? '2rem' : '1.5rem'
      }} />
      <LogoText>
        <BrandName style={{ fontSize: isLarge ? '1.8rem' : '1.4rem' }}>
          <span className="highlight">Meg</span>Wrestling
        </BrandName>
        {showTagline && (
          <Tagline style={{ fontSize: isLarge ? '0.8rem' : '0.7rem' }}>
            Science • Psychology • Entertainment
          </Tagline>
        )}
      </LogoText>
    </LogoContainer>
  );
};

export default MegWrestlingLogo;
