import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  background: linear-gradient(135deg, #00ff88 0%, #ffffff 50%, #00ff88 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 900;
  letter-spacing: -0.03em;
`;

export const Subtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  text-align: center;
  color: #e0e0e0;
  margin-bottom: 4rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  font-weight: 400;
  letter-spacing: 0.01em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: #00ff88;
    border-radius: 1px;
  }
`;
