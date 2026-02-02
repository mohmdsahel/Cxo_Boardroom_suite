import React from 'react';

const Format = () => {
  return (
    <section id="format" className="format-section">
      <div className="container">
        <h2 className="section-title">Format at a Glance</h2>
        <div className="format-grid">
          <div className="format-card">
            <div className="format-icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h3>Invite-Only</h3>
            <p>Exclusive access for senior executives and decision-makers</p>
          </div>
          <div className="format-card">
            <div className="format-icon">
              <i className="fas fa-door-open"></i>
            </div>
            <h3>Closed-Door</h3>
            <p>Private boardroom setting for confidential discussions</p>
          </div>
          <div className="format-card">
            <div className="format-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Peer-Level Dialogue</h3>
            <p>Meaningful conversations among equals in a focused environment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Format;
