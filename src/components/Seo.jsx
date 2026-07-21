import { Head } from 'vite-react-ssg';
import { COMPANY } from '../data/site';

// Per-page <head>: title, description, canonical, Open Graph, Twitter, JSON-LD.
export default function Seo({
  title,
  description,
  path = '/',
  image = '/img/products/control-panels-banner.jpg',
  jsonLd,
}) {
  const fullTitle =
    path === '/'
      ? `${COMPANY.name} | ${COMPANY.tagline}`
      : `${title} | ${COMPANY.name}`;
  const url = `${COMPANY.siteUrl}${path === '/' ? '' : path}`;
  const ogImage = `${COMPANY.siteUrl}${image}`;
  const blocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}
