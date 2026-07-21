import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <span className="logo-r">R</span>
        <span className="logo-text">RADIANT<br /><span className="logo-sub">CONTROL SYSTEMS</span></span>
      </div>

      <div className="social-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/radiant-control-systems-llc" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/sitemap">Sitemap</Link>
      </nav>

      <div className="footer-columns">
        <div className="footer-col">
          <h4>DBE & MBE Certified</h4>
          <p><strong>GDOT Vendor ID Code:</strong> 19325</p>
          <p><strong>NAICS:</strong> 541511, 541512</p>
          <p><strong>GMDC:</strong> AT249607</p>
          <p><strong>NAICS:</strong> 541330</p>
          <p><strong>NIGP:</strong> 69031, 69032, 03125, 92040</p>
          <p><strong>CAGE:</strong> 10NB0</p>
          <p><strong>UEI #</strong> S5L4B99AGYX3</p>
          <p><strong>E Verify #</strong> 2293567</p>
        </div>

        <div className="footer-col">
          <h4>Radiant Control Systems LLC</h4>
          <p>
            <a href="https://maps.app.goo.gl/5pU7gQYLf63gKn94A" target="_blank" rel="noreferrer">
              6340 Sugarloaf Parkway, Suite # 200, Duluth, GA 30097
            </a>
          </p>
          <h4>Contact Number</h4>
          <p><a href="tel:+14709150965">(470) 915-0965</a></p>
          <h4>Email ID</h4>
          <p><a href="mailto:info@radiantcontrolsystems.com">info@radiantcontrolsystems.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Radiant Control Systems. All rights reserved</p>
        <p>Design & Developed by Webital Technologies & Signages</p>
      </div>
    </footer>
  );
}

export default Footer;