import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="section container text-center" style={{ minHeight: '52vh', display: 'grid', placeContent: 'center', gap: 'var(--space-3)' }}>
        <span className="eyebrow">Error 404</span>
        <h1>This page couldn't be found</h1>
        <p className="lead" style={{ marginInline: 'auto' }}>
          The page may have moved or no longer exists. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn--primary">Back to Home</Link>
          <Link to="/sitemap" className="btn btn--outline">View Sitemap</Link>
        </div>
      </section>
    </>
  );
}
