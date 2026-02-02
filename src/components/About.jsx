import React from 'react';

const About = () => {
  return (
    <section id="about" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">This initiative sits within our Executive Events Portfolio</h2>
        <div className="event-logos">
          <div className="event-logo">
            <div className="logo-placeholder">
              <img src="assets/logoEnterprice.png" alt="Banking AI Summit" />
              <span>Banking AI Summit</span>
            </div>
          </div>
          <div className="event-logo">
            <div className="logo-placeholder">
              <img src="assets/MEBAI COLOR.png" alt="Enterprise AI Summit" />
              <span>Enterprise AI Summit</span>
            </div>
          </div>
        </div>
        <div className="video-section">
          <div className="video-background">
            <video autoPlay muted controls width="100%" style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}>
              <source src="assets/Social_breakout_Session_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="regions-section">
          <h3>Focused Regions</h3>
          <div className="regions-grid">
            {/* Replaced <img> flags with CSS background classes + text labels */}
            <div className="region-item flag-ae"><span>UAE</span></div>
            <div className="region-item flag-sa"><span>KSA</span></div>
            <div className="region-item flag-qa"><span>Qatar</span></div>
            <div className="region-item flag-kw"><span>Kuwait</span></div>
            <div className="region-item flag-om"><span>Oman</span></div>
            <div className="region-item flag-bh"><span>Bahrain</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
