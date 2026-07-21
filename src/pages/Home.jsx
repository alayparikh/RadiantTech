import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Gauge, Headset, Phone } from 'lucide-react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import CountUp from '../components/CountUp';
import { ServiceCard, IndustryCard } from '../components/Cards';
import { SectionHeading, StatRow, LogoCloud, CTABanner } from '../components/Blocks';
import FaqAccordion from '../components/FaqAccordion';
import ContactSection from '../components/ContactSection';
import { SERVICES, INDUSTRIES, COMPANY } from '../data/site';
import { organizationLd, localBusinessLd, faqLd } from '../data/jsonld';
import './Home.css';

const homeFaqs = [
  {
    q: 'What does Radiant Control Systems do?',
    a: 'Radiant Control Systems is an industrial automation and controls integrator in Duluth, GA. We design UL-508A control panels, integrate PLC and HMI/SCADA systems, and provide on-site field service for water, power, oil & gas, food & beverage, and manufacturing clients.',
  },
  {
    q: 'Where is Radiant Control Systems located?',
    a: `Radiant is based at ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.zip}, serving metro Atlanta and clients across the United States.`,
  },
  {
    q: 'Is Radiant Control Systems certified?',
    a: 'Yes. Radiant is DBE and MBE certified, with GDOT vendor registration, NAICS codes 541511/541512/541330, CAGE code 10NB0, and UEI S5L4B99AGYX3.',
  },
];

const heroStats = [
  { value: '100+', label: 'Years combined experience' },
  { value: '8', label: 'Industries served' },
  { value: '2018', label: 'Founded' },
  { value: 'UL-508A', label: 'Panel standard' },
];

const valueProps = [
  { icon: ShieldCheck, title: 'Built to code', text: 'Every panel engineered to UL-508A and NEC standards for safety and reliability.' },
  { icon: Gauge, title: 'Platform-agnostic', text: 'Allen-Bradley, Siemens, Modicon, Ignition, Wonderware — we work in your stack, not ours.' },
  { icon: Headset, title: 'On-site when it counts', text: 'Commissioning, troubleshooting, and operator training delivered at your facility.' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Industrial Automation & Control Systems"
        description="Radiant Control Systems designs UL-508A control panels, PLC & HMI/SCADA integration, and field service for water, power, oil & gas, and manufacturing. DBE/MBE certified, Duluth GA."
        path="/"
        jsonLd={[organizationLd, localBusinessLd, faqLd(homeFaqs)]}
      />

      {/* ---- Hero ---- */}
      <section className="hero bp">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__lead-col">
            <span className="tlabel hero__status">
              <span className="livedot" aria-hidden="true" />
              Industrial Automation · Since 2018
            </span>
            <h1 className="hero__title">
              Empowering Industry with{' '}
              <span className="grad-signal">Intelligent Control</span>
            </h1>
            <p className="hero__lead">
              Radiant Control Systems engineers control panels, PLC integration, and
              HMI/SCADA solutions that keep water, power, and production running —
              reliably, safely, and on spec.
            </p>
            <div className="hero__actions">
              <Link to="/capability-statement" className="btn btn--gold">
                View Capabilities <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href={COMPANY.phoneHref} className="btn btn--outline">
                <Phone size={17} aria-hidden="true" /> {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Floating spec card */}
          <Reveal className="hero__card-wrap" delay={120}>
            <div className="hero__card bracket">
              <div className="hero__card-head">
                <span className="mono">SYSTEM · CAPABILITY INDEX</span>
                <span className="livedot" aria-hidden="true" />
              </div>
              <div className="hero__stats">
                {heroStats.map((s) => (
                  <div key={s.label} className="hero__stat">
                    <span className="hero__stat-val grad-signal">
                      <CountUp value={s.value} />
                    </span>
                    <span className="hero__stat-label mono">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero__pills">
                {['PLC', 'SCADA', 'HMI', 'VFD', 'MCC'].map((p) => (
                  <span key={p} className="hero__pill mono">{p}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Platform marquee */}
        <div className="hero__marquee">
          <div className="container hero__marquee-inner">
            <span className="mono hero__marquee-label">Platforms&nbsp;/</span>
            <Marquee />
          </div>
        </div>
      </section>

      {/* ---- Intro + value props ---- */}
      <section className="section container">
        <div className="home-intro">
          <Reveal>
            <SectionHeading eyebrow="Who we are" index="01" title="Intelligent control systems for demanding industries">
              Radiant Control Systems streamlines industrial manufacturing and infrastructure
              through advanced technologies like PLCs and SCADA. From automation and systems
              integration to information services, validation, and consulting — we pair deep
              control-engineering experience with a commitment to reliability.
            </SectionHeading>
          </Reveal>
          <div className="home-vp">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="home-vp__item">
                <span className="home-vp__icon"><v.icon size={22} aria-hidden="true" /></span>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="section--muted bp-light">
        <div className="section container">
          <SectionHeading center eyebrow="What we do" index="02" title="Industrial automation & controls services">
            Comprehensive offerings designed to streamline and enhance industrial processes
            through advanced technology integration.
          </SectionHeading>
          <div className="home-services">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="section bp">
        <div className="container">
          <SectionHeading index="03" eyebrow="By the numbers" title="Experience that shows up on the plant floor" />
          <StatRow />
        </div>
      </section>

      {/* ---- Industries ---- */}
      <section className="section container">
        <SectionHeading center eyebrow="Industries we serve" index="04" title="Automation across eight sectors">
          From lift stations to power plants, we tailor control solutions to the realities of
          each industry.
        </SectionHeading>
        <div className="home-industries">
          {INDUSTRIES.map((ind, i) => (
            <IndustryCard key={ind.slug} industry={ind} index={i} />
          ))}
        </div>
      </section>

      {/* ---- Clients ---- */}
      <section className="section--muted">
        <div className="section--tight container">
          <LogoCloud title="Trusted by leading organizations" />
        </div>
      </section>

      <CTABanner />

      {/* ---- FAQ ---- */}
      <section className="section container">
        <SectionHeading center eyebrow="FAQ" index="05" title="Common questions" />
        <FaqAccordion faqs={homeFaqs} title="" />
      </section>

      <ContactSection />
    </>
  );
}
