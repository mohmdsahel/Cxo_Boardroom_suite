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
                  <PartnerLogo src="assets/partner1.jpg" />
                  <PartnerLogo src="assets/partner9.jpg" />
                  <PartnerLogo src="assets/partenr8.jpg" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.jpg" />
                  <PartnerLogo src="assets/partner6.jpg" />
                  <PartnerLogo src="assets/partner1.jpg" />
                  <PartnerLogo src="assets/partner9.jpg" />
                  <PartnerLogo src="assets/partenr8.jpg" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.jpg" />
                  <PartnerLogo src="assets/partner6.jpg" />
                  <PartnerLogo src="assets/partner1.jpg" />
                  <PartnerLogo src="assets/partner9.jpg" />
                  <PartnerLogo src="assets/partenr8.jpg" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.jpg" />
                  <PartnerLogo src="assets/partner6.jpg" />
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
                  <PartnerLogo src="assets/partne10.jpg" />
                  <PartnerLogo src="assets/partner7.jpg" />
                  <PartnerLogo src="assets/partner11.jpg" />
                  <PartnerLogo src="assets/partner12.jpg" />
                  <PartnerLogo src="assets/partner13.jpg" />
                  <PartnerLogo src="assets/partne10.jpg" />
                  <PartnerLogo src="assets/partner7.jpg" />
                  <PartnerLogo src="assets/partner11.jpg" />
                  <PartnerLogo src="assets/partner12.jpg" />
                  <PartnerLogo src="assets/partner13.jpg" />
                  <PartnerLogo src="assets/partne10.jpg" />
                  <PartnerLogo src="assets/partner7.jpg" />
                  <PartnerLogo src="assets/partner11.jpg" />
                  <PartnerLogo src="assets/partner12.jpg" />
                  <PartnerLogo src="assets/partner13.jpg" />
                 
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
                  <PartnerLogo src="assets/partner1.jpg" />
                  <PartnerLogo src="assets/partner9.jpg" />
                  <PartnerLogo src="assets/partenr8.jpg" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.jpg" />
                  <PartnerLogo src="assets/partner6.jpg" />
                  <PartnerLogo src="assets/partner1.jpg" />
                  <PartnerLogo src="assets/partner9.jpg" />
                  <PartnerLogo src="assets/partenr8.jpg" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.jpg" />
                  <PartnerLogo src="assets/partner6.jpg" />
                  <PartnerLogo src="assets/partner1.jpg" />
                  <PartnerLogo src="assets/partner9.jpg" />
                  <PartnerLogo src="assets/partenr8.jpg" />
                  <PartnerLogo src="assets/partner4.png" />
                  <PartnerLogo src="assets/partner5.jpg" />
                  <PartnerLogo src="assets/partner6.jpg" />
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
