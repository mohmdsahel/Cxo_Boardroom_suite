import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ADD: track small screens
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsSmallScreen(e.matches);
    setIsSmallScreen(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ADD: dropdown handlers
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="navbar" style={{
      background: scrolled ? 'rgba(11, 12, 20, 0.98)' : 'rgba(11, 12, 20, 0.95)',
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.5)' : '0 2px 10px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="container">
        <div className="nav-brand">
          <img src="assets/logomain.jpeg" alt="CXO Boardroom Series" className="nav-logo" />
        </div>

        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Replace inline styles with palette-aware classes */}
        <div
          className="nav-item-dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Hide the trigger button on small screens */}
          {!isSmallScreen && (
            <button
              className={`nav-button ${isDropdownOpen ? 'active' : ''}`}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen(prev => !prev)}
              onFocus={() => setIsDropdownOpen(true)}
            >
              Explore Opportunities
            </button>
          )}

          {(isDropdownOpen || isMenuOpen) && (
            <ul
              className="nav-dropdown-menu"
              role="menu"
              aria-label="Primary navigation"
            >
              <li><a className="nav-dropdown-link" href="#home" onClick={() => { closeMenu(); closeDropdown(); }}>Home</a></li>
              <li><a className="nav-dropdown-link" href="#about" onClick={() => { closeMenu(); closeDropdown(); }}>About</a></li>
              <li><a className="nav-dropdown-link" href="#partners" onClick={() => { closeMenu(); closeDropdown(); }}>Partners</a></li>
              <li><a className="nav-dropdown-link" href="#format" onClick={() => { closeMenu(); closeDropdown(); }}>Format</a></li>
              <li><a className="nav-dropdown-link" href="#contact" onClick={() => { closeMenu(); closeDropdown(); }}>Contact</a></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
