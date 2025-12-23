import React, { useState } from 'react';

const memories = [
  {
    id: 1,
    src:'https://picsum.photos/900/900?random=1',
    alt: '',
    caption: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    src: 'https://picsum.photos/900/900?random=2',
    alt: '',
    caption: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    src:'https://picsum.photos/900/900?random=3',
    alt: '',
    caption: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    src:'https://picsum.photos/900/900?random=4',
    alt: '',
    caption: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 5,
    src: 'https://picsum.photos/900/900?random=5',
    alt: '',
    caption: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
 
];

export default function MemoryLane() {
  const [selectedMemory, setSelectedMemory] = useState(null);

  const openMemory = (memory) => {
    setSelectedMemory(memory);
  };

  const closeMemory = () => {
    setSelectedMemory(null);
  };

  return (
    <section className="section memories-section" id="memories">
      <h2 className="section-title">Memory lane with you 🌙</h2>
      <p className="section-subtitle">
        Some of the little moments that made me fall for you even more – from random snaps to
        dressed-up nights.
      </p>

      <div className="memories-grid">
        {memories.map((memory) => (
          <figure className="memory-card" key={memory.id}>
            <button
              type="button"
              className="memory-button"
              onClick={() => openMemory(memory)}
            >
              <div className="memory-image-wrapper">
                <img src={memory.src} alt={memory.alt} loading="lazy" />
                <div className="memory-overlay" />
              </div>
            </button>
            <figcaption className="memory-caption">{memory.caption}</figcaption>
          </figure>
        ))}
      </div>

      {selectedMemory && (
        <div className="memory-modal-backdrop" onClick={closeMemory}>
          <div
            className="memory-modal"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <button
              type="button"
              className="memory-modal-close"
              onClick={closeMemory}
              aria-label="Close large photo"
            >
              ×
            </button>
            <div className="memory-modal-image-wrapper">
              <img
                src={selectedMemory.src}
                alt={selectedMemory.alt}
                className="memory-modal-image"
              />
            </div>
            <p className="memory-modal-caption">{selectedMemory.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
