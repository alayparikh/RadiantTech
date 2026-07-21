import { Activity, Gauge, Timer, MonitorCog, Globe, Radio } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Image from '../components/Image';
import Reveal from '../components/Reveal';
import { FeatureCard } from '../components/Cards';
import { SectionHeading, CTABanner } from '../components/Blocks';
import ContactSection from '../components/ContactSection';
import { breadcrumbLd } from '../data/jsonld';
import './NewData.css';

const features = [
  { icon: 'Activity', title: 'Live PLC data', text: 'Pulled directly from Allen-Bradley ControlLogix or any other PLC for immediate insight.' },
  { icon: 'Gauge', title: 'Real-time tank level tracking', text: 'Accurate, continuous monitoring of tank levels to prevent overflows or shortages.' },
  { icon: 'Timer', title: 'Pump runtime status', text: 'Immediate visibility into pump operation status, ensuring optimal performance.' },
  { icon: 'MonitorCog', title: 'Seamless HMI integration', text: 'Flawless integration with FactoryTalk View HMI displays for unified control.' },
  { icon: 'Globe', title: 'Web-accessible interface', text: 'Flexible on-site or remote supervision through a user-friendly web interface.' },
  { icon: 'Radio', title: 'Fault & condition alarms', text: 'Local and remote alarms notify operators the moment a condition needs attention.' },
];

export default function NewData() {
  return (
    <>
      <Seo
        title="New Data Features — Real-Time Wastewater Monitoring"
        description="Radiant's real-time wastewater treatment monitoring: live PLC data, tank level tracking, pump runtime status, and web-accessible operator interfaces integrated with FactoryTalk View."
        path="/new-data"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'New Data Features', path: '/new-data', last: true },
        ])}
      />

      <PageHero
        title="New Data Features"
        subtitle="Real-time monitoring for critical infrastructure."
        image="/img/industries/power-plant.jpg"
        crumbs={[{ name: 'New Data Features', path: '/new-data', last: true }]}
      />

      <section className="section container">
        <SectionHeading center eyebrow="Discover what's new" title="Now live: real-time wastewater monitoring">
          We're proud to unveil our latest deployment — a fully operational wastewater treatment
          monitoring interface delivering live facility insights with precision and clarity, built
          for operators and facility managers who need reliable data in real environments.
        </SectionHeading>

        <div className="nd-grid">
          {features.map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} index={i}>
              {f.text}
            </FeatureCard>
          ))}
        </div>
      </section>

      <section className="section--muted">
        <div className="section container">
          <SectionHeading center eyebrow="Explore the interface" title="One picture of system performance">
            With synchronized HMI and web views, teams gain a complete picture of system
            performance — without compromise.
          </SectionHeading>
          <Reveal>
            <Image
              src="/img/products/new-data-hmi.png"
              alt="Radiant real-time wastewater treatment operator interface with live tank levels and pump status"
              width={1120}
              height={640}
              placeholder="new-data-hmi"
              className="nd-shot"
            />
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Want real-time visibility into your facility?"
        text="Ask us about adding live data and web dashboards to your control system."
      />
      <ContactSection />
    </>
  );
}
