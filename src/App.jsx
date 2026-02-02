import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Format from './components/Format';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          // Optional: Stop observing once animated
          // observer.unobserve(entry.target); 
          // Original script didn't unobserve, so we keep it running or not?
          // Original script didn't unobserve.
        }
      });
    }, observerOptions);

    // Observe elements for fade-in animation
    const animateElements = document.querySelectorAll('.format-card, .benefit-item, .region-item, .event-logo');
    
    animateElements.forEach((el, index) => {
      // Set initial state
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      // Calculate delay based on index relative to its group would be better, but mimicking original script which used global index
      // However, the original script ran once on load. In React, this runs on mount.
      // A small improvement: reset delay for each section? 
      // No, let's strictly follow the original script logic: index * 0.1s.
      // But wait, if the user scrolls fast, it looks cool.
      // The original script used `index` from the `forEach` of ALL elements.
      // We will do the same.
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Contact />
      <Gallery />
      <Format />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
