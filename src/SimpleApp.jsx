import React from 'react';

function SimpleApp() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#00ff88',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>
        MegWrestling
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', lineHeight: '1.6' }}>
        Where suplexes meet science and psychology. This is my personal space to explore 
        the art and strategy behind professional wrestling through the lens of evidence-based 
        science and human behavior.
      </p>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 style={{ color: '#fff' }}>Site is loading successfully!</h2>
        <p>React is working properly.</p>
      </div>
    </div>
  );
}

export default SimpleApp;
