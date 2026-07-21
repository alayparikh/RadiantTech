import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Image from '../components/Image';
import Reveal from '../components/Reveal';
import { SectionHeading } from '../components/Blocks';
import ContactSection from '../components/ContactSection';
import { breadcrumbLd } from '../data/jsonld';
import { COMPANY } from '../data/site';
import './CeoDesk.css';

const skills = [
  'Leadership',
  'Team Management',
  'Control Systems Design',
  'Engineering',
  'Electrical Engineering',
  'Engineering Management',
  'Programmable Logic Controller (PLC)',
  'SCADA, HMI, Commissioning',
];

const boards = [
  'Foundation Board Member — Gwinnett County Public Library, Georgia',
  'President / Executive Board — Bharitya American Chamber of Commerce',
  'Executive Secretary — Gokuldham, Georgia',
  'Director — VIPO USA',
  'Founder — Nand Gam, Austin, TX',
];

export default function CeoDesk() {
  return (
    <>
      <Seo
        title="CEO Desk — Tejas “TJ” Patwa"
        description="Meet TJ Patwa, CEO of Radiant Control Systems: 22+ years in control engineering and project management, with an Honorary Doctorate in Management and project history at Tesla, Volkswagen, and Ford."
        path="/ceo-desk"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'CEO Desk', path: '/ceo-desk', last: true },
        ])}
      />

      <PageHero
        title="From the CEO's Desk"
        subtitle="Leadership rooted in engineering."
        image="/img/industries/manufacturing.jpg"
        crumbs={[{ name: 'CEO Desk', path: '/ceo-desk', last: true }]}
      />

      <section className="section container">
        <div className="ceo">
          <Reveal className="ceo__media">
            <Image
              src="/img/brand/ceo.jpg"
              alt="Tejas TJ Patwa, CEO of Radiant Control Systems"
              width={480}
              height={560}
              placeholder="ceo-portrait"
            />
          </Reveal>
          <Reveal className="ceo__body" delay={80}>
            <span className="eyebrow">Chief Executive Officer</span>
            <h2>{COMPANY.ceo}</h2>
            <p>
              An excellent academic career from his school days, TJ brings 22-plus years of
              control-engineering and project-management experience to Radiant Control Systems.
            </p>
            <h3 className="ceo__subhead">Professional skills</h3>
            <ul className="ceo__skills">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p>
              Throughout his career TJ has worked on a vast array of projects — US government
              projects, power plants, airport baggage handling, food-process conveyors, aggregate,
              and wastewater lift stations. He ran a control-engineering consulting company from
              2012 to 2013, working with automotive companies including Tesla, Volkswagen, and
              Ford, and developed a packing-process control system and a sand-drying control system.
            </p>
            <p className="ceo__honor">
              On November 23, 2022, he received an Honorary <strong>Doctorate Degree in Management</strong>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section--muted">
        <div className="section container">
          <SectionHeading eyebrow="Community" title="Currently serving on the following boards" />
          <ul className="ceo__boards">
            {boards.map((b) => (
              <Reveal as="li" key={b}>{b}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
