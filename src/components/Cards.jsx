import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Image from './Image';
import Reveal from './Reveal';
import './Cards.css';

// Service card — index + icon + title, spec-sheet framing.
export function ServiceCard({ service, index = 0 }) {
  const Icon = Icons[service.icon] || Icons.Cog;
  return (
    <Reveal delay={index * 70}>
      <Link to={`/${service.slug}`} className="scard">
        <div className="scard__top">
          <span className="scard__idx mono">{String(index + 1).padStart(2, '0')}</span>
          <span className="scard__icon">
            <Icon size={22} aria-hidden="true" />
          </span>
        </div>
        <h3>{service.title}</h3>
        <p>{service.tagline}</p>
        <span className="scard__more">
          Learn more <ArrowRight size={15} aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  );
}

// Industry card — photo + icon + title + description + arrow.
export function IndustryCard({ industry, index = 0 }) {
  const Icon = Icons[industry.icon] || Icons.Factory;
  return (
    <Reveal delay={index * 55}>
      <Link to={`/${industry.slug}`} className="icard">
        <div className="icard__media">
          <Image
            src={industry.image}
            alt={`${industry.title} automation`}
            width={600}
            height={400}
          />
          <span className="icard__idx mono">{String(index + 1).padStart(2, '0')}</span>
          <span className="icard__badge">
            <Icon size={18} aria-hidden="true" strokeWidth={2} />
          </span>
        </div>
        <div className="icard__body">
          <h3>{industry.title}</h3>
          <p>{industry.desc}</p>
          <span className="icard__more">
            Explore <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

// Feature card — icon + text, no link.
export function FeatureCard({ icon, title, children, index = 0 }) {
  const Icon = Icons[icon] || Icons.CheckCircle2;
  return (
    <Reveal delay={index * 55} className="fcard">
      <span className="fcard__icon">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </Reveal>
  );
}
