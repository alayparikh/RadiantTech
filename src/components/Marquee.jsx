import { Cpu } from 'lucide-react';
import { PLATFORMS } from '../data/site';
import './Marquee.css';

// Kinetic platform strip. Duplicated track = seamless loop.
export default function Marquee({ items = PLATFORMS }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee pmarquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((p, i) => (
          <span key={i} className="pmarquee__item">
            <Cpu size={13} />
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
