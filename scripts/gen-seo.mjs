// Generates public/robots.txt, public/sitemap.xml, and public/llms.txt from the
// site data. Runs before the build (see package.json). Keeps SEO/GEO files in
// sync with routes automatically.
import { writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PUBLIC = resolve(ROOT, 'public');

// Import site data (pure JS, no React).
const site = await import(pathToFileURL(resolve(ROOT, 'src/data/site.js')).href);
const { COMPANY, SERVICES, INDUSTRIES, CAPABILITY, KNOWS_ABOUT, PLATFORMS } = site;

const BASE = COMPANY.siteUrl.replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

// ---- URL list (mirror of routes.jsx) ----
const staticPaths = [
  { p: '/', pri: '1.0', freq: 'weekly' },
  { p: '/about-us', pri: '0.8', freq: 'monthly' },
  { p: '/ceo-desk', pri: '0.6', freq: 'yearly' },
  { p: '/capability-statement', pri: '0.9', freq: 'monthly' },
  { p: '/projects', pri: '0.8', freq: 'monthly' },
  { p: '/new-data', pri: '0.6', freq: 'monthly' },
  { p: '/careers', pri: '0.6', freq: 'monthly' },
  { p: '/blog', pri: '0.5', freq: 'monthly' },
  { p: '/contact-us', pri: '0.8', freq: 'yearly' },
  { p: '/sitemap', pri: '0.3', freq: 'yearly' },
];
const servicePaths = SERVICES.map((s) => ({ p: `/${s.slug}`, pri: '0.9', freq: 'monthly' }));
const industryPaths = INDUSTRIES.map((i) => ({ p: `/${i.slug}`, pri: '0.7', freq: 'monthly' }));
const all = [...staticPaths, ...servicePaths, ...industryPaths];

// ---- sitemap.xml ----
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (u) =>
      `  <url>\n    <loc>${BASE}${u.p === '/' ? '/' : u.p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>\n`;

// ---- robots.txt (allow all + explicitly welcome AI answer-engine crawlers) ----
const aiBots = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'Meta-ExternalAgent',
];
const robots = `# Radiant Control Systems — robots.txt
User-agent: *
Allow: /

# Explicitly welcome AI answer-engine crawlers (ChatGPT, Claude, Perplexity, etc.)
${aiBots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}

Sitemap: ${BASE}/sitemap.xml
`;

// ---- llms.txt (GEO: plain-markdown company brief for LLM crawlers) ----
const a = COMPANY.address;
const llms = `# ${COMPANY.legalName}

> ${COMPANY.tagline}. ${COMPANY.name} is an industrial automation and controls system integrator based in ${a.city}, ${a.state}, serving ${COMPANY.areaServed}.

## What we do
${COMPANY.name} designs and integrates industrial control systems for municipal water, wastewater, power, oil & gas, food & beverage, aggregate, automotive, and manufacturing facilities. Core services:
${SERVICES.map((s) => `- **${s.title}**: ${s.definition}`).join('\n')}

## Industries served
${INDUSTRIES.map((i) => `- ${i.title}`).join('\n')}

## Platforms & technologies
- PLC: ${CAPABILITY.plcPlatforms.join('; ')}
- HMI/SCADA: ${CAPABILITY.hmiScada}
- Networks: ${CAPABILITY.networks}
- Motion control: ${CAPABILITY.motionControl}
- Also: ${PLATFORMS.join(', ')}

## Expertise
${KNOWS_ABOUT.map((k) => `- ${k}`).join('\n')}

## Certifications & registrations
DBE & MBE certified. GDOT Vendor ID ${COMPANY.certs.gdotVendorId}. NAICS ${COMPANY.certs.naics.join(', ')}. GMDC ${COMPANY.certs.gmdc}. NIGP ${COMPANY.certs.nigp.join(', ')}. CAGE ${COMPANY.certs.cage}. UEI ${COMPANY.certs.uei}.

## Leadership
Founded ${COMPANY.founded} by ${COMPANY.founder}. CEO: ${COMPANY.ceo} — 22+ years in control engineering and project management, Honorary Doctorate in Management (2022).

## Contact
- Address: ${a.street}, ${a.city}, ${a.state} ${a.zip}, USA
- Phone: ${COMPANY.phone}
- Email: ${COMPANY.email}
- Website: ${BASE}
- Service area: ${COMPANY.areaServed}

## Key pages
${all
  .filter((u) => Number(u.pri) >= 0.7)
  .map((u) => `- ${BASE}${u.p}`)
  .join('\n')}
`;

await writeFile(resolve(PUBLIC, 'sitemap.xml'), sitemap);
await writeFile(resolve(PUBLIC, 'robots.txt'), robots);
await writeFile(resolve(PUBLIC, 'llms.txt'), llms);
console.log(`[gen-seo] wrote sitemap.xml (${all.length} urls), robots.txt, llms.txt`);
