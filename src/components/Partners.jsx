import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const PartnerLogo = ({ src }) => (
    <div className="partner-logo">
      <div className="logo-placeholder">
        {src && <img src={src} alt="" />}
      </div>
    </div>
  );

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <h2 className="section-title">Organisations We've Partnered With</h2>
        <div className="marquee_component">
          {/* New: three marquee rows using Framer Motion */}
          <div className="marquee_rows">
            {/* Row 1: Right-to-Left */}
            <div className="marquee_row">
              <motion.div
                className="marquee_track"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
              >
                <div className="marquee_loop">
                <PartnerLogo src="assets/partner1.png" />
                  <PartnerLogo src="assets/partner2.png" />
                  <PartnerLogo src="assets/partner3.png" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.png" />
                  <PartnerLogo src="assets/partner6.png" />
                  <PartnerLogo src="assets/partner7.png" />
                  <PartnerLogo src="assets/partner8.png" />
                  <PartnerLogo src="assets/partner9.png" />
                  <PartnerLogo src="assets/partner10.png" />
                  <PartnerLogo src="assets/partner11.png" />
                  <PartnerLogo src="assets/partner12.png" />
                  <PartnerLogo src="assets/partner13.png" />
                  <PartnerLogo src="assets/partner14.png" />
                  <PartnerLogo src="assets/partner15.png" />
                <PartnerLogo src="assets/partner1.png" />
                  <PartnerLogo src="assets/partner2.png" />
                  <PartnerLogo src="assets/partner3.png" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.png" />
                  <PartnerLogo src="assets/partner6.png" />
                  <PartnerLogo src="assets/partner7.png" />
                  <PartnerLogo src="assets/partner8.png" />
                  <PartnerLogo src="assets/partner9.png" />
                  <PartnerLogo src="assets/partner10.png" />
                  <PartnerLogo src="assets/partner11.png" />
                  <PartnerLogo src="assets/partner12.png" />
                  <PartnerLogo src="assets/partner13.png" />
                  <PartnerLogo src="assets/partner14.png" />
                  <PartnerLogo src="assets/partner15.png" />
                <PartnerLogo src="assets/partner1.png" />
                  <PartnerLogo src="assets/partner2.png" />
                  <PartnerLogo src="assets/partner3.png" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.png" />
                  <PartnerLogo src="assets/partner6.png" />
                  <PartnerLogo src="assets/partner7.png" />
                  <PartnerLogo src="assets/partner8.png" />
                  <PartnerLogo src="assets/partner9.png" />
                  <PartnerLogo src="assets/partner10.png" />
                  <PartnerLogo src="assets/partner11.png" />
                  <PartnerLogo src="assets/partner12.png" />
                  <PartnerLogo src="assets/partner13.png" />
                  <PartnerLogo src="assets/partner14.png" />
                  <PartnerLogo src="assets/partner15.png" />
                </div>
               
              </motion.div>
            </div>

            {/* Row 2: Left-to-Right */}
            <div className="marquee_row">
              <motion.div
                className="marquee_track"
                animate={{ x: ['-50%', '0%'] }}
                transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
              >
                <div className="marquee_loop">
                <PartnerLogo src="assets/partner16.png" />
                  <PartnerLogo src="assets/partner17.png" />
                  <PartnerLogo src="assets/partner18.png" />
                  <PartnerLogo src="assets/partner19.png" />
                  <PartnerLogo src="assets/partner20.png" />
                  <PartnerLogo src="assets/partner21.png" />
                  <PartnerLogo src="assets/partner22.png" />
                  <PartnerLogo src="assets/partner23.png" />
                  <PartnerLogo src="assets/partner24.png" />
                  <PartnerLogo src="assets/partner25.png" />
                  <PartnerLogo src="assets/partner26.png" />
                  <PartnerLogo src="assets/partner27.png" />
                  <PartnerLogo src="assets/partner28.png" />
                  <PartnerLogo src="assets/partner29.png" />
                  <PartnerLogo src="assets/partner30.png" />
                <PartnerLogo src="assets/partner16.png" />
                  <PartnerLogo src="assets/partner17.png" />
                  <PartnerLogo src="assets/partner18.png" />
                  <PartnerLogo src="assets/partner19.png" />
                  <PartnerLogo src="assets/partner20.png" />
                  <PartnerLogo src="assets/partner21.png" />
                  <PartnerLogo src="assets/partner22.png" />
                  <PartnerLogo src="assets/partner23.png" />
                  <PartnerLogo src="assets/partner24.png" />
                  <PartnerLogo src="assets/partner25.png" />
                  <PartnerLogo src="assets/partner26.png" />
                  <PartnerLogo src="assets/partner27.png" />
                  <PartnerLogo src="assets/partner28.png" />
                  <PartnerLogo src="assets/partner29.png" />
                  <PartnerLogo src="assets/partner30.png" />
                <PartnerLogo src="assets/partner16.png" />
                  <PartnerLogo src="assets/partner17.png" />
                  <PartnerLogo src="assets/partner18.png" />
                  <PartnerLogo src="assets/partner19.png" />
                  <PartnerLogo src="assets/partner20.png" />
                  <PartnerLogo src="assets/partner21.png" />
                  <PartnerLogo src="assets/partner22.png" />
                  <PartnerLogo src="assets/partner23.png" />
                  <PartnerLogo src="assets/partner24.png" />
                  <PartnerLogo src="assets/partner25.png" />
                  <PartnerLogo src="assets/partner26.png" />
                  <PartnerLogo src="assets/partner27.png" />
                  <PartnerLogo src="assets/partner28.png" />
                  <PartnerLogo src="assets/partner29.png" />
                  <PartnerLogo src="assets/partner30.png" />
                 
                </div>
               
              </motion.div>
            </div>

            {/* Row 3: Right-to-Left */}
            <div className="marquee_row">
              <motion.div
                className="marquee_track"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
              >
                <div className="marquee_loop">
                  <PartnerLogo src="assets/partner31.png" />
                  <PartnerLogo src="assets/partner32.png" />
                  <PartnerLogo src="assets/partner33.png" />
                  <PartnerLogo src="assets/partner34.png" />
                  <PartnerLogo src="assets/partner35.png" />
                  <PartnerLogo src="assets/partner36.png" />
                  <PartnerLogo src="assets/partner37.png" />
                  <PartnerLogo src="assets/partner38.png" />
                  <PartnerLogo src="assets/partner39.png" />
                  <PartnerLogo src="assets/partner40.png" />
                  <PartnerLogo src="assets/partner41.png" />
                  <PartnerLogo src="assets/partner42.png" />
                  <PartnerLogo src="assets/partner43.png" />
                  <PartnerLogo src="assets/partner44.png" />
                  <PartnerLogo src="assets/partner45.png" />
                  <PartnerLogo src="assets/partner46.png" />
                  <PartnerLogo src="assets/partner31.png" />
                  <PartnerLogo src="assets/partner32.png" />
                  <PartnerLogo src="assets/partner33.png" />
                  <PartnerLogo src="assets/partner34.png" />
                  <PartnerLogo src="assets/partner35.png" />
                  <PartnerLogo src="assets/partner36.png" />
                  <PartnerLogo src="assets/partner37.png" />
                  <PartnerLogo src="assets/partner38.png" />
                  <PartnerLogo src="assets/partner39.png" />
                  <PartnerLogo src="assets/partner40.png" />
                  <PartnerLogo src="assets/partner41.png" />
                  <PartnerLogo src="assets/partner42.png" />
                  <PartnerLogo src="assets/partner43.png" />
                  <PartnerLogo src="assets/partner44.png" />
                  <PartnerLogo src="assets/partner45.png" />
                  <PartnerLogo src="assets/partner46.png" />
                  <PartnerLogo src="assets/partner31.png" />
                  <PartnerLogo src="assets/partner32.png" />
                  <PartnerLogo src="assets/partner33.png" />
                  <PartnerLogo src="assets/partner34.png" />
                  <PartnerLogo src="assets/partner35.png" />
                  <PartnerLogo src="assets/partner36.png" />
                  <PartnerLogo src="assets/partner37.png" />
                  <PartnerLogo src="assets/partner38.png" />
                  <PartnerLogo src="assets/partner39.png" />
                  <PartnerLogo src="assets/partner40.png" />
                  <PartnerLogo src="assets/partner41.png" />
                  <PartnerLogo src="assets/partner42.png" />
                  <PartnerLogo src="assets/partner43.png" />
                  <PartnerLogo src="assets/partner44.png" />
                  <PartnerLogo src="assets/partner45.png" />
                  <PartnerLogo src="assets/partner46.png" />
                </div>
                
              </motion.div>
            </div>
          </div>

          {/* Fade overlay remains */}
          <div className="marquee_fade"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
