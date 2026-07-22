import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV, COMPANY } from '../data/site';
import './Header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown label
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Click-outside closes desktop dropdowns
  useEffect(() => {
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);

  const isDesktop = () =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 1080px)').matches;

  // Esc closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="container hdr__inner">
        <Link to="/" className="hdr__logo" aria-label={`${COMPANY.name} home`}>
          <img
            src="/img/brand/logo.png"
            alt={COMPANY.name}
            width="180"
            height="48"
            fetchpriority="high"
          />
        </Link>

        <a href={COMPANY.phoneHref} className="hdr__phone">
          <Phone size={16} aria-hidden="true" />
          <span>{COMPANY.phone}</span>
        </a>

        <button
          className="hdr__toggle"
          aria-expanded={mobileOpen}
          aria-controls="primary-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav
          id="primary-nav"
          className={`hdr__nav ${mobileOpen ? 'is-open' : ''}`}
          ref={navRef}
          aria-label="Primary"
        >
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className={`hdr__item hdr__item--has-menu ${
                  openMenu === item.label ? 'is-open' : ''
                }`}
                onMouseEnter={() => isDesktop() && setOpenMenu(item.label)}
                onMouseLeave={() => isDesktop() && setOpenMenu(null)}
                onBlur={(e) => {
                  if (isDesktop() && !e.currentTarget.contains(e.relatedTarget)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <button
                  className="hdr__link hdr__link--btn"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu((cur) => (cur === item.label ? null : item.label))
                  }
                  onFocus={() => isDesktop() && setOpenMenu(item.label)}
                >
                  {item.label}
                  <ChevronDown size={15} aria-hidden="true" className="hdr__chev" />
                </button>
                <ul className="hdr__menu">
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}
                        className="hdr__menu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `hdr__link ${isActive ? 'is-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
          <Link to="/contact-us" className="btn btn--gold hdr__cta">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
