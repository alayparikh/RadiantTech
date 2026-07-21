import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ContactSection from '../components/ContactSection';
import { localBusinessLd, breadcrumbLd } from '../data/jsonld';
import { COMPANY } from '../data/site';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us — Duluth, GA"
        description={`Contact Radiant Control Systems in Duluth, GA. Call ${COMPANY.phone} or email ${COMPANY.email} to discuss control panels, PLC, and SCADA projects.`}
        path="/contact-us"
        jsonLd={[
          localBusinessLd,
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Contact Us', path: '/contact-us', last: true },
          ]),
        ]}
      />

      <PageHero
        title="Contact Us"
        subtitle="Let's talk about your process, your platform, and your timeline."
        image="/img/products/control-panels-banner.jpg"
        crumbs={[{ name: 'Contact Us', path: '/contact-us', last: true }]}
      />

      <ContactSection heading="Send us a message" />

      <section className="section--tight container" style={{ paddingBottom: 'var(--space-8)' }}>
        <iframe
          title={`${COMPANY.name} location map`}
          src="https://www.google.com/maps?q=6340+Sugarloaf+Parkway,+Suite+200,+Duluth,+GA+30097&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
