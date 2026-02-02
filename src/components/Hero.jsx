import React from 'react';
import TypewriterSubtitle from './animations/TypewriterSubtitle'; // NEW: import animation component

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-video">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="assets/bgvideo.webm" />
        </video>
      </div>
      <div className="hero-content">
        <div className="sliding-text-container">
          <h1 className="hero-title sliding-text">CXO Boardroom Series</h1>
          {/* NEW: Replace static subtitle with typewriter animation */}
          <TypewriterSubtitle
            className="hero-subtitle sliding-text"
            words={[
              { text: 'Executive' },
              { text: 'Conversations' },
              { text: 'with' },
              { text: 'Data' },
              { text: '&' },
              { text: 'AI' },
              { text: 'Leadership' },
            ]}
            speed={70}    // typing speed in ms per character
            pause={400}   // pause in ms between words
            loop={false}  // change to true if you want it to repeat
          />
        </div>
        <p className="hero-description">
          An invite-only, in-person boardroom experience bringing together the region's most
          senior data, AI, and technology leaders.
        </p>
      </div>
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
