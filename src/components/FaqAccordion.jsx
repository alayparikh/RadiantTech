import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FaqAccordion.css';

// Accessible FAQ accordion. The Q&A text is always in the DOM (crawlable for
// SEO/GEO); the accordion only toggles visibility via aria-hidden + max-height.
export default function FaqAccordion({ faqs = [], title = 'Frequently asked questions' }) {
  const [open, setOpen] = useState(0);
  if (!faqs.length) return null;
  return (
    <div className="faq">
      {title ? <h2 className="faq__title">{title}</h2> : null}
      <div className="faq__list">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
              <h3 className="faq__q">
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                </button>
              </h3>
              <div className="faq__a" role="region">
                <p>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
