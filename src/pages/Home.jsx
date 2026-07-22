import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, Clock, Droplets, Cpu } from 'lucide-react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import CountUp from '../components/CountUp';
import { ServiceCard, IndustryCard } from '../components/Cards';
import ProjectCard from '../components/ProjectCard';
import { SectionHeading, StatRow, TrustedBy, CertBar, CTABanner } from '../components/Blocks';
import FaqAccordion from '../components/FaqAccordion';
import ContactSection from '../components/ContactSection';
import { SERVICES, INDUSTRIES, PROJECTS, WHY_RADIANT, COMPANY } from '../data/site';
import { organizationLd, localBusinessLd, faqLd } from '../data/jsonld';
import './Home.css';

const WHY_ICONS = { ShieldCheck, Clock, Droplets, Cpu };

const homeFaqs = [
  {
    q: 'What does Radiant Control Systems do?',
    a: 'Radiant Control Systems is an industrial automation and controls integrator in Duluth, Georgia. We design UL-508A control panels, integrate PLC and HMI/SCADA systems, and provide on-site field service for municipal water, wastewater, power, oil & gas, and manufacturing clients across Georgia and the Southeast.',
  },
  {
    q: 'Where is Radiant Control Systems located?',
    a: `Radiant is based at ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.zip}, serving Georgia, the Southeast, and clients nationwide.`,
  },
  {
    q: 'Is Radiant Control Systems certified?',
    a: 'Yes. Radiant is Georgia DBE and MBE certified, with GDOT vendor registration, NAICS codes 541511/541512/541330, CAGE code 10NB0, and UEI S5L4B99AGYX3.',
  },
];

const heroStats = [
  { value: '100+', label: 'Years combined experience' },
  { value: '8', label: 'Industries served' },
  { value: '2018', label: 'Founded' },
  { value: 'UL-508A', label: 'Panel standard' },
];

const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

export default function Home() {
  return (
    <>
      <Seo
        title="Industrial Automation & Control Systems in Georgia"
        description="Radiant Control Systems is a Georgia control systems integrator: UL-508A panels, PLC programming, and HMI/SCADA integration for municipal water, wastewater, power, and manufacturing across the Southeast. DBE/MBE certified, Duluth GA."
        path="/"
        jsonLd={[organizationLd, localBusinessLd, faqLd(homeFaqs)]}
      />

      {/* ---- Hero ---- */}
      <section
        className="hero"
        style={{ backgroundImage: 'url(/img/hero/home-hero.jpg)' }}
      >
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container hero__inner">
          <span className="tlabel hero__status">
            <span className="livedot" aria-hidden="true" />
            PLC · SCADA · HMI · Control Panels
          </span>
          <h1 className="hero__title">
            Empowering Industry with{' '}
            <span className="grad-signal">Intelligent Control</span>
          </h1>
          <p className="hero__lead">
            Radiant Control Systems engineers control panels, PLC integration, and
            HMI/SCADA solutions for municipal water, wastewater, and industrial
            facilities across Georgia and the Southeast — reliable, safe, and on spec.
          </p>
          <div className="hero__actions">
            <Link to="/contact-us" className="btn btn--gold">
              Request a Quote <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href={COMPANY.phoneHref} className="btn btn--outline">
              <Phone size={17} aria-hidden="true" /> {COMPANY.phone}
            </a>
          </div>

          <div className="hero__statbar">
            {heroStats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-val grad-signal">
                  <CountUp value={s.value} />
                </span>
                <span className="hero__stat-label mono">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__marquee">
          <div className="container hero__marquee-inner">
            <span className="mono hero__marquee-label">Platforms&nbsp;/</span>
            <Marquee />
          </div>
        </div>
      </section>

      {/* ---- Why Radiant (dark credentials band) ---- */}
      <section className="section--tight container">
        <div className="whyband">
          {WHY_RADIANT.map((w, i) => {
            const Icon = WHY_ICONS[w.icon] || ShieldCheck;
            return (
              <Reveal key={w.title} delay={i * 70} className="whyband__item">
                <span className="whyband__icon"><Icon size={22} aria-hidden="true" /></span>
                <div className="whyband__txt">
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---- Intro ---- */}
      <section className="section--muted bp-light">
        <div className="section container">
          <SectionHeading
            center
            eyebrow="Who we are"
            index="01"
            title="Intelligent control systems for demanding industries"
          >
            Radiant Control Systems streamlines industrial manufacturing and infrastructure
            through advanced technologies like PLCs and SCADA. From automation and systems
            integration to validation and consulting, we pair deep control-engineering
            experience with a commitment to reliability.
          </SectionHeading>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="section container">
        <SectionHeading center eyebrow="What we do" index="02" title="Industrial automation & controls services">
          Comprehensive offerings designed to streamline and enhance industrial processes
          through advanced technology integration.
        </SectionHeading>
        <div className="home-services">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
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
      <section className="section--muted bp-light">
        <div className="section container">
          <SectionHeading center eyebrow="Industries we serve" index="04" title="Automation solutions for every industry">
            From lift stations to power plants, we tailor control solutions to the realities of
            each industry.
          </SectionHeading>
          <div className="home-industries">
            {INDUSTRIES.map((ind, i) => (
              <IndustryCard key={ind.slug} industry={ind} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Featured Projects ---- */}
      <section className="section container">
        <div className="home-proj-head">
          <SectionHeading eyebrow="Selected work" index="05" title="Featured projects" />
          <Link to="/projects" className="btn btn--outline home-proj-all">
            View all projects <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="home-projects">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ---- Trusted by + Certifications ---- */}
      <section className="section--muted">
        <div className="section--tight container home-trust">
          <TrustedBy />
          <CertBar />
        </div>
      </section>

      <CTABanner />

      {/* ---- FAQ ---- */}
      <section className="section container">
        <SectionHeading center eyebrow="FAQ" index="06" title="Common questions" />
        <FaqAccordion faqs={homeFaqs} title="" />
      </section>

      <ContactSection />
    </>
  );
}
