import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY, SERVICES, INDUSTRIES, CERTS } from '../data/site';
import './Footer.css';

const c = COMPANY.certs;

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="container ftr__top">
        <div className="ftr__brand">
          <img src="/img/brand/logo.png" alt={COMPANY.name} width="200" height="54" />
          <p className="ftr__tagline">{COMPANY.tagline}.</p>
          <div className="ftr__social" aria-label="Social media">
            <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href={COMPANY.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <nav className="ftr__col" aria-label="Services">
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`}>{s.nav}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="ftr__col" aria-label="Industries">
          <h4>Industries</h4>
          <ul>
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link to={`/${i.slug}`}>{i.nav}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="ftr__col" aria-label="Company">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/ceo-desk">CEO Desk</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/capability-statement">Capability Statement</Link></li>
            <li><Link to="/new-data">New Data Features</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>

        <div className="ftr__col ftr__contact">
          <h4>{COMPANY.legalName}</h4>
          <ul>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <a href={COMPANY.mapUrl} target="_blank" rel="noreferrer">
                {COMPANY.address.street}, {COMPANY.address.city}, {COMPANY.address.state}{' '}
                {COMPANY.address.zip}
              </a>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
          </ul>
          <div className="ftr__certs">
            {CERTS.map((cert) => (
              <img key={cert.src} src={cert.src} alt={cert.alt} width="60" height="60" loading="lazy" />
            ))}
          </div>
        </div>
      </div>

      <div className="container ftr__creds">
        <span><strong>DBE &amp; MBE Certified</strong></span>
        <span>GDOT Vendor ID: {c.gdotVendorId}</span>
        <span>NAICS: {c.naics.join(', ')}</span>
        <span>GMDC: {c.gmdc}</span>
        <span>NIGP: {c.nigp.join(', ')}</span>
        <span>CAGE: {c.cage}</span>
        <span>UEI: {c.uei}</span>
        <span>E-Verify: {c.eVerify}</span>
      </div>

      <div className="ftr__bottom">
        <div className="container">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
