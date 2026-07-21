import { CheckCircle2 } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import TwoCol from '../components/TwoCol';
import { SectionHeading, CTABanner } from '../components/Blocks';
import FaqAccordion from '../components/FaqAccordion';
import ContactSection from '../components/ContactSection';
import { serviceLd, faqLd, breadcrumbLd } from '../data/jsonld';

export default function ServicePage({ service }) {
  const path = `/${service.slug}`;
  return (
    <>
      <Seo
        title={`${service.title} | ${service.tagline}`}
        description={service.definition}
        path={path}
        image={service.image}
        jsonLd={[
          serviceLd(service),
          faqLd(service.faqs),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/#services' },
            { name: service.title, path, last: true },
          ]),
        ]}
      />

      <PageHero
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
        imagePlaceholder={service.imagePlaceholder}
        crumbs={[{ name: service.title, path, last: true }]}
      />

      {/* Definition / intro — answer-shaped opening for SEO + GEO */}
      <section className="section container">
        <div className="measure" style={{ marginInline: 'auto', textAlign: 'center' }}>
          <SectionHeading center eyebrow="Overview" title={service.highlightTitle}>
            {service.intro}
          </SectionHeading>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section--muted">
        <div className="section container">
          <TwoCol
            image={service.image}
            imageAlt={`${service.title} at Radiant Control Systems`}
            imagePlaceholder={service.imagePlaceholder}
            reverse
            eyebrow="Capabilities"
            title={service.highlightTitle}
          >
            <p>{service.definition}</p>
            <ul>
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </TwoCol>
        </div>
      </section>

      <CTABanner
        title={`Need ${service.title.toLowerCase()} for your facility?`}
        text="Talk to a controls engineer about your process, timeline, and platform."
      />

      <section className="section--grid">
        <div className="section container">
          <FaqAccordion faqs={service.faqs} title={`${service.title} — FAQ`} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
