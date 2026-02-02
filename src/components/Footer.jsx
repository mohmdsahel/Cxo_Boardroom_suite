import React from 'react';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
  };

  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Join our newsletter</h3>
            <form className="newsletter-form" id="newsletterForm" onSubmit={handleSubscribe}>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Your e-mail" required />
                <button type="submit" className="btn-subscribe">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="footer-right">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/letstalkb2b" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                <span>Let'sTalkB2B | Banking & Enterprise</span>
              </a>
            </div>
            <div className="contact-link">
              <a href="#contact" className="social-link">
                <i className="fas fa-envelope"></i>
                <span>Contact us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 CXO Boardroom Series. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
