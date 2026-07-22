import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import CountUp from './CountUp';
import { STATS, CLIENT_LOGOS, CLIENTS, CERTS, COMPANY } from '../data/site';
import './Blocks.css';

export function SectionHeading({ eyebrow, index, title, children, center = false, as = 'h2', light = false }) {
  const Tag = as;
  return (
    <div className={`sh ${center ? 'sh--center' : ''}`}>
      {(eyebrow || index) && (
        <span className="tlabel">
          {index && <span className="sh__idx">{index}</span>}
          {eyebrow}
        </span>
      )}
      <Tag className="sh__title">{title}</Tag>
      {children && <p className="sh__lead lead">{children}</p>}
    </div>
  );
}

export function StatRow({ stats = STATS }) {
  return (
    <div className="statrow">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 90} className="statrow__item">
          <span className="statrow__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <span className="statrow__value">
            <CountUp value={s.value} />
          </span>
          <span className="statrow__label">{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}

export function LogoCloud({ title = 'Trusted by industry leaders' }) {
  return (
    <div className="logocloud">
      <p className="logocloud__title mono">{title}</p>
      <div className="logocloud__row">
        {CLIENT_LOGOS.map((l, i) => (
          <img key={i} src={l.src} alt={l.alt} loading="lazy" className="logocloud__logo" />
        ))}
      </div>
    </div>
  );
}

export function TrustedBy({ clients = CLIENTS }) {
  return (
    <div className="trustedby">
      <p className="trustedby__title mono">Trusted by leading organizations</p>
      <div className="trustedby__row">
        {clients.map((c) => (
          <span key={c} className="trustedby__name">{c}</span>
        ))}
      </div>
    </div>
  );
}

export function CertBar() {
  const c = COMPANY.certs;
  return (
    <div className="certbar">
      <div className="certbar__text">
        <span className="tlabel">Certified &amp; registered</span>
        <h3>Ready for public &amp; municipal procurement</h3>
        <p className="mono certbar__codes">
          DBE &amp; MBE · NAICS {c.naics[0]} · CAGE {c.cage} · UEI {c.uei}
        </p>
      </div>
      <div className="certbar__badges">
        {CERTS.map((cert) => (
          <img key={cert.src} src={cert.src} alt={cert.alt} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export function CTABanner({
  title = 'Get started on your automation journey',
  text = 'Whether you need a UL-508A panel, a PLC upgrade, or on-site commissioning — our engineers are ready to help.',
  primary = { to: '/contact-us', label: 'Contact Us' },
}) {
  return (
    <section className="cta bp">
      <div className="container cta__inner">
        <div className="cta__text">
          <span className="tlabel">Let's build</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta__actions">
          <Link to={primary.to} className="btn btn--gold">
            {primary.label}
          </Link>
          <a href={COMPANY.phoneHref} className="btn btn--outline">
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
