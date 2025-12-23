import React, { useEffect, useState } from 'react';

function Candle({ delay, isBlown }) {
  return (
    <div className="candle" style={{ animationDelay: `${delay}s` }}>
      <div className="candle-body" />
      <div className={`candle-flame ${isBlown ? 'candle-flame-out' : ''}`} />
    </div>
  );
}

export default function CakeSection({ showCake, buildId }) {
  const [buildStage, setBuildStage] = useState(0);
  const [hasBlown, setHasBlown] = useState(false);

  useEffect(() => {
    if (!showCake) {
      setBuildStage(0);
      setHasBlown(false);
      return;
    }

    setBuildStage(0);
    setHasBlown(false);
    const timers = [];

    timers.push(setTimeout(() => setBuildStage(1), 250)); // bottom layer
    timers.push(setTimeout(() => setBuildStage(2), 950)); // middle layer
    timers.push(setTimeout(() => setBuildStage(3), 1700)); // top + sprinkles
    timers.push(setTimeout(() => setBuildStage(4), 2400)); // candles drop
    timers.push(setTimeout(() => setBuildStage(5), 3000)); // final stable state

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [showCake, buildId]);

  const handleBlowClick = () => {
    if (!showCake || buildStage < 4) {
      return;
    }
    setHasBlown(true);
  };

  const confettiPieces = [
    { left: '8%', color: '#ff6fb5', delay: '0s', duration: '1.8s' },
    { left: '18%', color: '#ffe08a', delay: '0.1s', duration: '1.7s' },
    { left: '28%', color: '#8be9fd', delay: '0.15s', duration: '1.9s' },
    { left: '38%', color: '#c792ea', delay: '0.05s', duration: '1.6s' },
    { left: '48%', color: '#ffb86c', delay: '0.2s', duration: '1.8s' },
    { left: '58%', color: '#ff6fb5', delay: '0.12s', duration: '1.7s' },
    { left: '68%', color: '#ffe08a', delay: '0.18s', duration: '1.9s' },
    { left: '78%', color: '#8be9fd', delay: '0.25s', duration: '1.6s' },
    { left: '88%', color: '#c792ea', delay: '0.3s', duration: '1.85s' },
    { left: '96%', color: '#ffb86c', delay: '0.22s', duration: '1.75s' },
  ];

  return (
    <section className="section cake-section" id="cake">
      <h2 className="section-title">Make a wish, my love</h2>
      <p className="section-subtitle">
        Every candle on this cake is a wish from me to you – for laughter, success, peace, and
        endless love.
      </p>

      <div className="cake-wrapper">
        {showCake ? (
          <div className="cake">
            <div className="cake-plate" />
            {buildStage >= 1 && (
              <div className="cake-layer cake-layer-bottom cake-layer-visible" />
            )}
            {buildStage >= 2 && (
              <div className="cake-layer cake-layer-middle cake-layer-visible" />
            )}
            {buildStage >= 3 && (
              <>
                <div className="cake-layer cake-layer-top cake-layer-visible" />
                <div className="cake-sprinkles cake-sprinkles-visible" />
              </>
            )}
            {buildStage >= 4 && (
              <div
                className={`cake-candles ${
                  buildStage === 4 ? 'cake-candles-dropping' : ''
                }`}
              >
                <Candle delay={0} isBlown={hasBlown} />
                <Candle delay={0.2} isBlown={hasBlown} />
                <Candle delay={0.4} isBlown={hasBlown} />
              </div>
            )}
            {hasBlown && (
              <div className="confetti-layer">
                {confettiPieces.map((piece, index) => (
                  <span
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="confetti-piece"
                    style={{
                      left: piece.left,
                      backgroundColor: piece.color,
                      animationDelay: piece.delay,
                      animationDuration: piece.duration,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="cake-hint">
            Tap &quot;Blow the candles&quot; above and your special birthday cake will appear here.
          </p>
        )}
      </div>
      <p className="cake-message">
        Close your eyes, NAME_HERE, make a wish, and know that I&apos;ll always be standing right next
        to you – cheering for every dream.
      </p>
      <button
        type="button"
        className="cake-blow-button"
        onClick={handleBlowClick}
        disabled={!showCake || buildStage < 4 || hasBlown}
      >
        Blow 🎂
      </button>
      <p
        className="cake-happy-message"
        style={{
          opacity: hasBlown ? 1 : 0,
          transform: hasBlown ? 'translateY(0)' : 'translateY(8px)',
        }}
      >
        Happy Birthday NAME_HERE! May this year bring you more smiles, more love and more late-night
        laughs with us than ever before.
      </p>
    </section>
  );
}
