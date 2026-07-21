import { Link } from 'react-router-dom';
import { Briefcase, Clock, MapPin, GraduationCap } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { SectionHeading } from '../components/Blocks';
import ContactSection from '../components/ContactSection';
import { jobPostingLd, breadcrumbLd } from '../data/jsonld';
import { JOBS, COMPANY } from '../data/site';
import './Careers.css';

const benefits = ['401(k)', 'Dental insurance', 'Health insurance', 'Bonus opportunities'];
const details = [
  { icon: Briefcase, label: 'Job type', value: 'Full-time' },
  { icon: Clock, label: 'Schedule', value: '8-hour shift' },
  { icon: MapPin, label: 'Location', value: `${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.zip} · In person` },
  { icon: GraduationCap, label: 'Travel', value: 'Willingness to travel 50% (Preferred)' },
];

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers — Controls & Sales Engineering Roles"
        description="Join Radiant Control Systems in Duluth, GA. Openings for Sales Engineer, Personal Assistant, and Junior Controls Engineer. 401(k), health & dental, growth opportunities."
        path="/careers"
        jsonLd={[
          ...JOBS.map(jobPostingLd),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Careers', path: '/careers', last: true },
          ]),
        ]}
      />

      <PageHero
        title="Careers at Radiant"
        subtitle="Build the systems that keep industry running."
        image="/img/industries/manufacturing.jpg"
        crumbs={[{ name: 'Careers', path: '/careers', last: true }]}
      />

      <section className="section container">
        <SectionHeading center eyebrow="Open positions" title="We're hiring">
          Radiant Control Systems LLC is a small business in Duluth, GA — professional, fast-paced,
          and challenging, with an international workforce and real growth opportunities.
        </SectionHeading>

        <div className="careers-openings">
          {JOBS.map((j, i) => (
            <Reveal key={j.title} delay={i * 60} className="careers-role">
              <h3>{j.title}</h3>
              {j.experience && <span className="careers-role__exp">{j.experience} experience</span>}
              <Link to="/contact-us" className="btn btn--primary careers-role__apply">
                Apply now
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section--muted">
        <div className="section container careers-info">
          <div className="careers-panel">
            <h3>Details</h3>
            <ul className="careers-details">
              {details.map((d) => (
                <li key={d.label}>
                  <span className="careers-details__ic"><d.icon size={18} aria-hidden="true" /></span>
                  <div>
                    <span className="careers-details__label">{d.label}</span>
                    <span className="careers-details__value">{d.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="careers-panel">
            <h3>Benefits</h3>
            <ul className="careers-benefits">
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: 'var(--space-3)' }}>Skills &amp; qualifications</h3>
            <p>
              Technical knowledge of AC drives (VFDs), soft starters, motors, and industrial
              components; familiarity with control automation systems using PLC, HMI, and SCADA;
              strong communication and a proven, self-motivated, goal-oriented approach.
            </p>
          </div>
        </div>
      </section>

      <ContactSection heading="Apply or ask a question" lead="Send your résumé and a note about the role you're interested in. We'll be in touch." />
    </>
  );
}
