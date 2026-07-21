import { useEffect, useRef, useState } from 'react';

// Counts up to a number when scrolled into view. Falls back to the final value
// with no JS / reduced motion. `value` like "100+", "2018", "8", "UL-508A".
export default function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  // Split into leading number + suffix (e.g. "100+" -> 100, "+")
  const match = /^(\d[\d,]*)(.*)$/.exec(value);

  useEffect(() => {
    if (!match) return; // non-numeric (e.g. "UL-508A") — show as-is
    const target = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2];
    setDisplay('0' + suffix);

    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setDisplay(value);
      return;
    }

    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      // Group with commas only for large counts, never for years (4-digit, no suffix).
      const isYear = suffix === '' && match[1].length === 4;
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const n = Math.round(target * eased);
        setDisplay((isYear ? String(n) : n.toLocaleString()) + suffix);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // If already in view on mount, run now.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    // Safety: never leave it stuck at 0 if the observer somehow never fires.
    const t = setTimeout(() => {
      if (!done.current) setDisplay(value);
    }, 2500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular">
      {match ? display : value}
    </span>
  );
}
