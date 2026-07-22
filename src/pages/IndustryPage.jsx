import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import TwoCol from '../components/TwoCol';
import Reveal from '../components/Reveal';
import { SectionHeading, CTABanner } from '../components/Blocks';
import ContactSection from '../components/ContactSection';
import { breadcrumbLd, faqLd } from '../data/jsonld';
import { WASTEWATER_SECTIONS, COMPANY } from '../data/site';

export default function IndustryPage({ industry }) {
  const path = `/${industry.slug}`;
  const deep = industry.deep;

  const faqs = [
    {
      q: `Does Radiant Control Systems serve the ${industry.title.toLowerCase()} industry?`,
      a: `Yes. ${industry.blurb} Radiant provides control panels, PLC/SCADA integration, and field service tailored to ${industry.title.toLowerCase()} operations across metro Atlanta and the US.`,
    },
  ];

  return (
    <>
      <Seo
        title={`${industry.title} Automation & Control`}
        description={`${industry.blurb} Radiant Control Systems delivers control panels, PLC and SCADA integration for the ${industry.title.toLowerCase()} sector.`}
        path={path}
        image={industry.image}
        jsonLd={[
          faqLd(faqs),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/#industries' },
            { name: industry.title, path, last: true },
          ]),
        ]}
      />

      <PageHero
        title={deep ? 'Lift Station Controls' : industry.title}
        subtitle={industry.tagline}
        image={industry.image}
        imagePlaceholder={industry.imagePlaceholder}
        crumbs={[{ name: industry.title, path, last: true }]}
      />

      <section className="section container">
        <div className="measure" style={{ marginInline: 'auto', textAlign: 'center' }}>
          <SectionHeading center eyebrow={`Industries · ${industry.title}`} title={industry.tagline}>
            {industry.blurb}
          </SectionHeading>
        </div>
      </section>

      {deep ? (
        <DeepWastewater industry={industry} />
      ) : (
        <section className="section--muted">
          <div className="section container">
            <TwoCol
              image={industry.image}
              imageAlt={`${industry.title} automation`}
              imagePlaceholder={industry.imagePlaceholder}
              eyebrow="How we help"
              title={`Control solutions for ${industry.title.toLowerCase()}`}
            >
              <p>{industry.blurb}</p>
              <p>
                From panel design to PLC and SCADA integration, Radiant tailors each system to
                your process — improving uptime, safety, and visibility across the plant floor.
              </p>
            </TwoCol>
          </div>
        </section>
      )}

      <CTABanner
        title={`Automating a ${industry.title.toLowerCase()} operation?`}
        text="Let's talk about your process requirements and control strategy."
      />

      <ContactSection />
    </>
  );
}

function DeepWastewater() {
  return (
    <section className="section--muted">
      <div className="section container">
        <div className="grid" style={{ gap: 'var(--space-6)' }}>
          {WASTEWATER_SECTIONS.map((sec, i) => (
            <Reveal key={sec.title}>
              <TwoColLite section={sec} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TwoColLite({ section, reverse }) {
  return (
    <TwoCol
      image={section.image}
      imageAlt={section.imageAlt || 'Wastewater lift station control'}
      reverse={reverse}
      title={section.title}
    >
      {section.body && <p>{section.body}</p>}
      {section.list && (
        <ul>
          {section.list.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      )}
    </TwoCol>
  );
}
