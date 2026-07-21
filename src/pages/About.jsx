import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import TwoCol from '../components/TwoCol';
import { SectionHeading, StatRow, CTABanner } from '../components/Blocks';
import ContactSection from '../components/ContactSection';
import { organizationLd, breadcrumbLd } from '../data/jsonld';
import { COMPANY, KNOWS_ABOUT } from '../data/site';
import './About.css';

export default function About() {
  return (
    <>
      <Seo
        title="About Us — Industrial Controls Since 2018"
        description="Radiant Control Systems was founded in 2018 by Ami Patwa. Led by CEO TJ Patwa, we bring 100+ years of combined control-engineering experience to water, power, and manufacturing clients."
        path="/about-us"
        jsonLd={[
          organizationLd,
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us', last: true },
          ]),
        ]}
      />

      <PageHero
        title="About Radiant Control Systems"
        subtitle="Empowering industry with intelligent control since 2018."
        image="/img/industries/power-plant.jpg"
        crumbs={[{ name: 'About Us', path: '/about-us', last: true }]}
      />

      <section className="section--muted">
        <div className="section container">
          <TwoCol
            image="/img/products/control-panel.jpg"
            imageAlt="Radiant Control Systems engineered control panel"
            imagePlaceholder="plc-panel"
            eyebrow="Our story"
            title="The history of Radiant Control Systems"
          >
            <p>
              Radiant Control Systems was begun in 2018 by {COMPANY.founder}. {COMPANY.ceo} joined
              as CEO and added Controls Engineers and Sales team members in 2023, positioning the
              company for rapid, sustainable growth.
            </p>
            <p>
              Since then, Radiant has streamlined industrial manufacturing and infrastructure
              through advanced technologies — PLCs, SCADA, and custom control systems — delivering
              automation, systems integration, validation, and consulting to demanding sectors.
            </p>
            <p>
              Backed by a team of skilled and experienced professionals, we strive to exceed
              expectations at every stage. Experience the difference where innovation meets
              reliability.
            </p>
          </TwoCol>
        </div>
      </section>

      <section className="section container">
        <StatRow />
      </section>

      <section className="section--grid">
        <div className="section container">
          <SectionHeading center eyebrow="Expertise" title="What we know">
            Decades of combined experience across control platforms, networks, and industries.
          </SectionHeading>
          <ul className="about-know">
            {KNOWS_ABOUT.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
      <ContactSection />
    </>
  );
}
