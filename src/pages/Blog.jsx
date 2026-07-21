import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { SectionHeading } from '../components/Blocks';
import { breadcrumbLd } from '../data/jsonld';
import { SERVICES } from '../data/site';

// No posts exist yet — this is a placeholder index that stays useful by
// pointing to the capability pages, and is ready to list real posts later.
export default function Blog() {
  return (
    <>
      <Seo
        title="Blog & Insights"
        description="Insights on industrial automation, PLC and SCADA integration, and control panel best practices from the Radiant Control Systems team."
        path="/blog"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog', last: true },
        ])}
      />

      <PageHero
        title="Insights"
        subtitle="Notes on automation, controls, and reliability — coming soon."
        image="/img/industries/logistics.jpg"
        crumbs={[{ name: 'Blog', path: '/blog', last: true }]}
      />

      <section className="section container">
        <SectionHeading center eyebrow="Blog" title="Articles are on the way">
          We're preparing practical write-ups on control panel design, PLC platform selection, and
          SCADA best practices. In the meantime, explore what we do:
        </SectionHeading>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 760, marginInline: 'auto' }}>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="scard"
              style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span>
                <strong style={{ display: 'block', color: 'var(--navy-800)' }}>{s.title}</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--muted-fg)' }}>{s.tagline}</span>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
