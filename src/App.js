import React, { useState } from 'react';
import './App.css';

import Hero from './components/Hero';
import CakeSection from './components/CakeSection';
import LoveCardSection from './components/LoveCardSection';
import MemoryLane from './components/MemoryLane';
import Footer from './components/Footer';

function App() {
  const [showCake, setShowCake] = useState(false);
  const [cakeBuildId, setCakeBuildId] = useState(0);

  const handleBlowCandles = () => {
    setShowCake(true);
    setCakeBuildId((id) => id + 1);

    const cakeSection = document.getElementById('cake');
    if (cakeSection && cakeSection.scrollIntoView) {
      cakeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="App">
      <div className="app-gradient" />
      <main className="page">
        <Hero onBlowCandles={handleBlowCandles} />
        <CakeSection showCake={showCake} buildId={cakeBuildId} />
        <LoveCardSection />
        <MemoryLane />
        <Footer />
      </main>
    </div>
  );
}
export default App;
