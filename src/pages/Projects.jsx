import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { SectionHeading, CTABanner } from '../components/Blocks';
import ContactSection from '../components/ContactSection';
import ProjectCard from '../components/ProjectCard';
import { breadcrumbLd } from '../data/jsonld';
import { PROJECTS, COMPANY } from '../data/site';

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects — Control System Integration in Georgia"
        description={`Selected industrial automation, PLC, SCADA, and control panel projects by Radiant Control Systems across ${COMPANY.areaServed}.`}
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

      <section className="section container">
        <SectionHeading
          eyebrow="Selected work"
          index="01"
          title="Real systems, engineered to last"
        >
          A sample of PLC, SCADA, HMI, and control-panel projects. Each entry lists the
          scope, platforms, and equipment involved.
        </SectionHeading>

        {/* NOTE: entries below are placeholders — replace with real projects. */}
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <CTABanner
        title="Have a project in mind?"
        text="Tell us about your facility, timeline, and platform — we'll scope it with you."
      />
      <ContactSection />
    </>
  );
}
