import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import { SectionHeading } from './Blocks';
import { COMPANY } from '../data/site';
import './ContactSection.css';

export default function ContactSection({ heading = 'Contact Us', lead }) {
  return (
    <section className="csec section" id="contact">
      <div className="container csec__grid">
        <div className="csec__info">
          <SectionHeading eyebrow="Get in touch" title={heading}>
            {lead ||
              'Tell us about your process and we will help you specify the right control solution. Response within one business day.'}
          </SectionHeading>
          <ul className="csec__list">
            <li>
              <span className="csec__ic"><MapPin size={18} aria-hidden="true" /></span>
              <a href={COMPANY.mapUrl} target="_blank" rel="noreferrer">
                {COMPANY.address.street}<br />
                {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
              </a>
            </li>
            <li>
              <span className="csec__ic"><Phone size={18} aria-hidden="true" /></span>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </li>
            <li>
              <span className="csec__ic"><Mail size={18} aria-hidden="true" /></span>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li>
              <span className="csec__ic"><Clock size={18} aria-hidden="true" /></span>
              <span>Mon–Fri, 8:00 AM – 5:00 PM ET</span>
            </li>
          </ul>
        </div>
        <div className="csec__card">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
