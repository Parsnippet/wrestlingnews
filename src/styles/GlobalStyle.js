import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #000000 0%, #111111 100%);
    color: #ffffff;
    line-height: 1.7;
    min-height: 100vh;
    font-weight: 400;
    letter-spacing: -0.01em;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
    color: #ffffff;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 3px;
      background: #00ff88;
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: #e0e0e0;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.25rem;
    color: #00ff88;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1.5rem;
    color: #cccccc;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  a {
    color: #00ff88;
    text-decoration: none;
    transition: color 0.2s ease;
    font-weight: 500;
    
    &:hover {
      color: #00cc6a;
    }
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  li {
    margin-bottom: 0.75rem;
    color: #cccccc;
    font-size: 1.05rem;
    line-height: 1.7;
    
    &::marker {
      color: #00ff88;
    }
  }

  strong {
    color: #ffffff;
    font-weight: 600;
  }

  code {
    font-family: 'Courier New', monospace;
    background: rgba(0, 255, 136, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
    color: #00ff88;
  }

  /* Simplified scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #111;
  }

  ::-webkit-scrollbar-thumb {
    background: #00ff88;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #00cc6a;
  }

  /* Selection styling */
  ::selection {
    background: rgba(0, 255, 136, 0.3);
    color: #ffffff;
  }
`;
