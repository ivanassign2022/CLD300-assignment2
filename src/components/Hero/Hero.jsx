import './Hero.css';
import * as React from 'react';

export default function Hero({img, title}) {
  return (
    <div className="hero-wrapper">
          <img
          src={img}
          alt={title}          
        />
    </div>
  );
}

