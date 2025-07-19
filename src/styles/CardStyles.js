import styled from 'styled-components';

export const ArticleCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 255, 136, 0.15);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(0, 255, 136, 0.05), 
      transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(0, 255, 136, 0.15),
      0 0 0 1px rgba(0, 255, 136, 0.3);
    border-color: rgba(0, 255, 136, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

export const CardImage = styled.img`
  width: 280px;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  border: 2px solid rgba(0, 255, 136, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: scale(1.05);
    border-color: rgba(0, 255, 136, 0.5);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.6rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ff88;
  }
`;

export const CardMeta = styled.div`
  color: #00ff88;
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #00ff88, transparent);
    border-radius: 1px;
  }
`;

export const CardDesc = styled.p`
  color: #d0d0d0;
  line-height: 1.7;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  z-index: 2;
  letter-spacing: 0.01em;
`;

export const ArticleDetailImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: 500px;
  object-fit: cover;
  border-radius: 24px;
  margin: 3rem auto;
  display: block;
  border: 2px solid rgba(0, 255, 136, 0.3);
  box-shadow: 
    0 25px 50px rgba(0, 255, 136, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 
      0 30px 60px rgba(0, 255, 136, 0.2),
      0 0 0 1px rgba(0, 255, 136, 0.4);
  }
  
  @media (max-width: 768px) {
    height: 300px;
    margin: 2rem auto;
  }
`;
