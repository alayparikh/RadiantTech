import React from 'react';

function Hero({ title, image }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
    </div>
  );
}

export default Hero;