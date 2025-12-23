import React from 'react';

function Hero({ onBlowCandles }) {
  return (
    <section className="section hero" id="top">
      <p className="hero-date">DATE_HERE · Happy Birthday</p>
      <h1 className="hero-title">
        Happy Birthday,
        <span className="hero-name"> NAME_HERE 🎉</span>
      </h1>
      <p className="hero-subtitle">
        To the tall, beautiful girl with the cutest specs and the kindest heart – today is all
        about celebrating you.
      </p>

      <div className="hero-tags">
        <span>Fair &amp; fabulous</span>
        <span>My favourite smile</span>
        <span>Queen of my heart</span>
      </div>

      <div className="hero-actions">
        <button type="button" className="primary-button" onClick={onBlowCandles}>
          Blow the candles
        </button>
        <a href="#memories" className="secondary-button">
          Walk down memory lane
        </a>
      </div>
    </section>
  );
}

export default Hero;
