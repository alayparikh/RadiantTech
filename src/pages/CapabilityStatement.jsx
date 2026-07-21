import { Printer } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { SectionHeading } from '../components/Blocks';
import ContactSection from '../components/ContactSection';
import { organizationLd, breadcrumbLd } from '../data/jsonld';
import { CAPABILITY, COMPANY } from '../data/site';
import './CapabilityStatement.css';

const c = COMPANY.certs;

export default function CapabilityStatement() {
  return (
    <>
      <Seo
        title="Capability Statement — Control Systems Integrator"
        description="Radiant Control Systems capability statement: control systems design, electrical engineering, PLC & SCADA, MCC design. DBE/MBE certified. NAICS 541511/541512/541330, CAGE 10NB0, UEI S5L4B99AGYX3."
        path="/capability-statement"
        jsonLd={[
          organizationLd,
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Capability Statement', path: '/capability-statement', last: true },
          ]),
        ]}
      />

      <PageHero
        title="Capability Statement"
        subtitle="More than 100 years of combined control-engineering experience in system integration, PLC, HMI, and SCADA."
        image="/img/industries/oil-gas.jpg"
        crumbs={[{ name: 'Capability Statement', path: '/capability-statement', last: true }]}
      />

      <section className="section container cap">
        <div className="cap__actions no-print">
          <button className="btn btn--outline" onClick={() => window.print()}>
            <Printer size={18} aria-hidden="true" /> Print / Save as PDF
          </button>
        </div>

        <div className="cap__grid">
          <div className="cap__card">
            <h2 className="cap__h">Core Competencies</h2>
            <ul className="cap__list cap__list--accent">
              {CAPABILITY.coreCompetencies.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="cap__card">
            <h2 className="cap__h">Industries We Serve</h2>
            <ul className="cap__list cap__list--accent">
              {CAPABILITY.industriesServed.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cap__card cap__wide">
          <h2 className="cap__h">Automation &amp; Control Engineering</h2>
          <dl className="cap__spec">
            <div>
              <dt>HMI / SCADA Configuration</dt>
              <dd>{CAPABILITY.hmiScada}</dd>
            </div>
            <div>
              <dt>PLC &amp; HMI Programming Platforms</dt>
              <dd>
                <ul className="cap__inline">
                  {CAPABILITY.plcPlatforms.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Industrial Networks &amp; Communications</dt>
              <dd>{CAPABILITY.networks}</dd>
            </div>
            <div>
              <dt>Motion Control Technology</dt>
              <dd>{CAPABILITY.motionControl}</dd>
            </div>
            <div>
              <dt>Engineering Services</dt>
              <dd>
                <ul className="cap__inline">
                  {CAPABILITY.extras.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <div className="cap__card cap__wide cap__creds-card">
          <h2 className="cap__h">Company Credentials</h2>
          <div className="cap__creds">
            <Cred label="Certifications" value="DBE & MBE Certified" />
            <Cred label="GDOT Vendor ID" value={c.gdotVendorId} />
            <Cred label="NAICS" value={c.naics.join(', ')} />
            <Cred label="GMDC" value={c.gmdc} />
            <Cred label="NIGP" value={c.nigp.join(', ')} />
            <Cred label="CAGE Code" value={c.cage} />
            <Cred label="UEI" value={c.uei} />
            <Cred label="E-Verify" value={c.eVerify} />
          </div>
          <p className="cap__note">
            Radiant Control Systems has more than 100 years of combined control-engineering
            experience in system integration, PLC, HMI, and SCADA.
          </p>
        </div>
      </section>

      <div className="no-print">
        <ContactSection />
      </div>
    </>
  );
}

function Cred({ label, value }) {
  return (
    <div className="cap__cred">
      <span className="cap__cred-label">{label}</span>
      <span className="cap__cred-value tabular">{value}</span>
    </div>
  );
}
