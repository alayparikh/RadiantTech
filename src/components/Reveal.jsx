import { useEffect, useRef, useState } from 'react';

// Progressive scroll-reveal. Content is visible by default (SSG/no-JS safe);
// when JS + IntersectionObserver run, it fades/rises in. Honors reduced-motion
// via the CSS in global.css.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (!('IntersectionObserver' in window)) {
      setSeen(true);
      return;
    }
    // Reveal immediately if already within (or near) the viewport on mount —
    // covers first paint, anchor jumps, and fast scrolls where the observer
    // might otherwise skip an element and leave it hidden.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 1.25) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    // Safety net: never let content stay hidden longer than 1.2s.
    const t = setTimeout(() => setSeen(true), 1200);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [seen]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
