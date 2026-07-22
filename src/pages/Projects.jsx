import { CheckCircle2, MapPin } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Image from '../components/Image';
import { SectionHeading, CTABanner } from '../components/Blocks';
import ContactSection from '../components/ContactSection';
import ProjectCard from '../components/ProjectCard';
import { breadcrumbLd } from '../data/jsonld';
import { PROJECTS, COMPANY } from '../data/site';
import './Projects.css';

export default function Projects() {
  // The detailed featured project (has a description) leads; the rest are cards.
  const lead = PROJECTS.find((p) => p.description);
  const rest = PROJECTS.filter((p) => p !== lead);

  return (
    <>
      <Seo
        title="Projects — Control System Integration in Georgia"
        description={`Selected industrial automation, PLC, SCADA, control panel, and electrical engineering projects by Radiant Control Systems across ${COMPANY.areaServed}.`}
        path="/projects"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects', last: true },
        ])}
      />

      <PageHero
        title="Featured Projects"
        subtitle="Control systems delivered for water, power, and industrial facilities across Georgia and the Southeast."
        image="/img/industries/wastewater.jpg"
        crumbs={[{ name: 'Projects', path: '/projects', last: true }]}
      />

      {/* ---- Lead / featured project (detailed) ---- */}
      {lead && (
        <section className="section container">
          <SectionHeading eyebrow="Selected work" index="01" title="Real systems, engineered to last">
            A sample of electrical engineering, PLC, SCADA, and control-panel projects. Each
            entry lists the scope, platforms, and equipment involved.
          </SectionHeading>

          <div className="proj-lead">
            <Reveal className="proj-lead__media">
              <Image src={lead.photo} alt={lead.title} width={720} height={520} />
              <span className="proj-lead__cat mono">{lead.category}</span>
            </Reveal>
            <Reveal className="proj-lead__body" delay={80}>
              <span className="tlabel">Featured project</span>
              <h3>{lead.title}</h3>
              <p className="proj-lead__meta mono">
                <MapPin size={14} aria-hidden="true" /> {lead.customer} · {lead.location}
              </p>
              <p>{lead.description}</p>
              {lead.scopeOfServices?.length > 0 && (
                <>
                  <h4 className="proj-lead__subhead">Scope of services (Phase 1)</h4>
                  <ul className="proj-lead__scope">
                    {lead.scopeOfServices.map((s) => (
                      <li key={s}>
                        <CheckCircle2 size={18} aria-hidden="true" /> {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* ---- Other projects ---- */}
      {rest.length > 0 && (
        <section className="section--muted bp-light">
          <div className="section container">
            <SectionHeading center eyebrow="More work" index="02" title="Additional projects">
              Selected confidential engagements across water, wastewater, and manufacturing.
            </SectionHeading>
            <div className="projects-grid">
              {rest.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Have a project in mind?"
        text="Tell us about your facility, timeline, and platform — we'll scope it with you."
      />
      <ContactSection />
    </>
  );
}
