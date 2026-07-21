import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { breadcrumbLd } from '../data/jsonld';
import { SERVICES, INDUSTRIES } from '../data/site';
import './Sitemap.css';

const groups = [
  {
    heading: 'Company',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about-us', label: 'About Us' },
      { to: '/ceo-desk', label: 'CEO Desk' },
      { to: '/capability-statement', label: 'Capability Statement' },
      { to: '/new-data', label: 'New Data Features' },
      { to: '/careers', label: 'Careers' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact-us', label: 'Contact Us' },
    ],
  },
  { heading: 'Services', links: SERVICES.map((s) => ({ to: `/${s.slug}`, label: s.title })) },
  { heading: 'Industries', links: INDUSTRIES.map((i) => ({ to: `/${i.slug}`, label: i.title })) },
];

export default function Sitemap() {
  return (
    <>
      <Seo
        title="Sitemap"
        description="Full page directory for Radiant Control Systems — services, industries, and company pages."
        path="/sitemap"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Sitemap', path: '/sitemap', last: true },
        ])}
      />

      <PageHero
        title="Sitemap"
        subtitle="Every page, in one place."
        image="/img/industries/aggregate.jpg"
        crumbs={[{ name: 'Sitemap', path: '/sitemap', last: true }]}
      />

      <section className="section container">
        <div className="sitemap">
          {groups.map((g) => (
            <nav key={g.heading} aria-label={g.heading}>
              <h2>{g.heading}</h2>
              <ul>
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>
    </>
  );
}
