import { MapPin } from 'lucide-react';
import Reveal from './Reveal';
import './ProjectCard.css';

// Project card. When project.photo is null it renders a labeled placeholder so
// the layout is production-ready before real photos exist.
export default function ProjectCard({ project, index = 0 }) {
  const { title, customer, location, category, scope = [], software = [], equipment = [], photo, placeholder } = project;
  return (
    <Reveal delay={(index % 3) * 70} className="pcard">
      <div className="pcard__media">
        {photo ? (
          <img src={photo} alt={title} width={640} height={420} loading="lazy" />
        ) : (
          <div className="pcard__ph" aria-label={`${category} project photo — to be added`}>
            <span className="pcard__ph-grid" aria-hidden="true" />
            <span className="pcard__ph-txt">
              <span className="pcard__ph-tag">Photo</span>
              Add project photo
            </span>
          </div>
        )}
        <span className="pcard__cat mono">{category}</span>
        {placeholder && <span className="pcard__badge mono">Replace</span>}
      </div>

      <div className="pcard__body">
        <h3>{title}</h3>
        <p className="pcard__meta mono">
          <MapPin size={13} aria-hidden="true" /> {customer} · {location}
        </p>

        {scope.length > 0 && (
          <div className="pcard__row">
            <span className="pcard__key mono">Scope</span>
            <span className="pcard__chips">
              {scope.map((s) => (
                <span key={s} className="pcard__chip">{s}</span>
              ))}
            </span>
          </div>
        )}
        {(software.length > 0 || equipment.length > 0) && (
          <div className="pcard__row">
            <span className="pcard__key mono">Stack</span>
            <span className="pcard__chips">
              {[...software, ...equipment].map((s) => (
                <span key={s} className="pcard__chip pcard__chip--soft">{s}</span>
              ))}
            </span>
          </div>
        )}
      </div>
    </Reveal>
  );
}
