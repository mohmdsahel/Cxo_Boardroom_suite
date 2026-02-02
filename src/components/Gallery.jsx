import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "assets/4W3A1799.JPG",
    "assets/4W3A1808.JPG",
    "assets/K_AL9977.JPG",
    "assets/K_AL9972.JPG",
    "assets/imagenew5.png",
    "assets/imagenew6.png",
    "assets/imagenew7.png",
    "assets/imagenew8.png"
  ];
  const totalSlides = slides.length;
  const timeoutRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only navigate if carousel is in view or focused (simplified to document level for now as per original script behavior on hover, but React event listener is cleaner globally or on container focus)
      // Original script: if (document.querySelector('.image-carousel:hover'))
      // In React, checking hover state via JS is tricky without state. 
      // Let's just allow it globally or maybe wrap in a hover check ref?
      // For simplicity and better UX, let's allow it if the gallery is visible. 
      // But adhering to original: "if hover".
      const carousel = document.querySelector('.image-carousel');
      if (carousel && carousel.matches(':hover')) {
          if (e.key === 'ArrowLeft') {
            prevSlide();
          } else if (e.key === 'ArrowRight') {
            nextSlide();
          }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentSlide((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1)),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchEnd(null);
    setTouchStart(null);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Event Gallery</h2>
        <div 
          className="image-carousel"
          onMouseEnter={resetTimeout}
          onMouseLeave={() => {
             timeoutRef.current = setTimeout(
              () => setCurrentSlide((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1)),
              5000
            );
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-btn prev-btn" aria-label="Previous" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((src, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="image-placeholder">
                    <img src={src} alt={`Event image ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next-btn" aria-label="Next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
