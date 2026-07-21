import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-r">R</span>
          <span className="logo-text">
            RADIANT<br /><span className="logo-sub">CONTROL SYSTEMS</span>
          </span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <div className="dropdown">
            <Link to="/about-us">About Us ▾</Link>
            <div className="dropdown-menu">
              <Link to="/ceo-desk">CEO Desk</Link>
            </div>
          </div>
          <div className="dropdown">
            <span>Services ▾</span>
            <div className="dropdown-menu">
              <Link to="/control-panels">Control Panels</Link>
              <Link to="/plc-system-integration">PLC System Integration</Link>
              <Link to="/hmi-scada-integration">HMI/Scada Integration</Link>
              <Link to="/field-service">Field Service</Link>
            </div>
          </div>
          <div className="dropdown">
            <span>Industries We Serve ▾</span>
            <div className="dropdown-menu">
              <Link to="/wastewater-treatment">Wastewater</Link>
              <Link to="/aggregate">Aggregate</Link>
              <Link to="/automobiles">Automobiles</Link>
              <Link to="/logistics">Logistics</Link>
              <Link to="/food-beverage">Food & Beverage</Link>
              <Link to="/power-plant">Power Plant</Link>
              <Link to="/oil-gas">Oil & Gas</Link>
              <Link to="/manufacturing">Manufacturing</Link>
            </div>
          </div>
          <Link to="/new-data">New Data Features</Link>
          <Link to="/capability-statement">Capability Statement</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact-us" className="nav-cta">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;