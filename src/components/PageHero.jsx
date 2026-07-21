import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageHero.css';

// Inner-page hero: full-bleed photo + ink scrim + blueprint overlay + mono breadcrumb.
export default function PageHero({ title, subtitle, image, imagePlaceholder, crumbs = [], kicker }) {
  const isPlaceholder = Boolean(imagePlaceholder);
  return (
    <section
      className={`phero ${isPlaceholder ? 'phero--ph' : ''}`}
      style={!isPlaceholder ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="phero__scrim" />
      <div className="phero__bp" aria-hidden="true" />
      <div className="container phero__inner">
        <nav className="phero__crumbs mono" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((cr) => (
            <span key={cr.path}>
              <ChevronRight size={13} aria-hidden="true" />
              {cr.last ? (
                <span aria-current="page">{cr.name}</span>
              ) : (
                <Link to={cr.path}>{cr.name}</Link>
              )}
            </span>
          ))}
        </nav>
        {kicker && <span className="tlabel phero__kicker">{kicker}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="phero__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
