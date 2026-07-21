// Structured-data builders. Rich schema is the strongest GEO lever — it lets
// answer engines (ChatGPT, Claude, Perplexity, Google AI) resolve the entity
// and its capabilities with confidence.
import { COMPANY, KNOWS_ABOUT } from './site';

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: COMPANY.address.street,
  addressLocality: COMPANY.address.city,
  addressRegion: COMPANY.address.state,
  postalCode: COMPANY.address.zip,
  addressCountry: COMPANY.address.country,
};

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${COMPANY.siteUrl}/#organization`,
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: COMPANY.siteUrl,
  logo: `${COMPANY.siteUrl}/img/brand/logo.png`,
  description:
    'Industrial automation and controls: UL-508A control panels, PLC and HMI/SCADA integration, and field service.',
  slogan: COMPANY.tagline,
  foundingDate: COMPANY.founded,
  founder: { '@type': 'Person', name: COMPANY.founder },
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: postalAddress,
  sameAs: [COMPANY.social.linkedin],
  knowsAbout: KNOWS_ABOUT,
};

export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${COMPANY.siteUrl}/#localbusiness`,
  name: COMPANY.legalName,
  image: `${COMPANY.siteUrl}/img/products/control-panels-banner.jpg`,
  url: COMPANY.siteUrl,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  priceRange: '$$',
  address: postalAddress,
  areaServed: COMPANY.areaServed,
  knowsAbout: KNOWS_ABOUT,
};

export function serviceLd(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.definition,
    provider: { '@id': `${COMPANY.siteUrl}/#organization` },
    areaServed: COMPANY.areaServed,
    url: `${COMPANY.siteUrl}/${service.slug}`,
  };
}

export function faqLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${COMPANY.siteUrl}${t.path}`,
    })),
  };
}

export function jobPostingLd(job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: `${job.title} position at ${COMPANY.legalName}, a control systems integrator in Duluth, GA.`,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: COMPANY.legalName,
      sameAs: COMPANY.siteUrl,
    },
    jobLocation: {
      '@type': 'Place',
      address: postalAddress,
    },
    datePosted: '2025-01-01',
  };
}
