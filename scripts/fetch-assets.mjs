// Downloads Radiant's own images from the live WordPress site into public/img/.
// One-time asset pull. Skips files that already exist. Run: node scripts/fetch-assets.mjs
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const BASE = 'https://radiantcontrolsystems.com/wp-content/uploads';
const OUT = resolve(process.cwd(), 'public/img');

// [remote path under uploads, local path under public/img]
const ASSETS = [
  // Brand
  ['2025/03/logo.png', 'brand/logo.png'],
  // Certifications
  ['2025/02/NMSDC-2024-badge.png', 'certs/nmsdc.png'],
  ['2025/04/MBE.png', 'certs/mbe.png'],
  ['2025/04/DBE-logo_blue.jpg', 'certs/dbe.jpg'],
  // Products
  ['2024/06/control-panel.jpg', 'products/control-panel.jpg'],
  ['2024/06/control-panel-2.png', 'products/control-panel-2.png'],
  ['2024/06/control-panels-banner.jpg', 'products/control-panels-banner.jpg'],
  ['2024/06/plc-1.png', 'products/plc-1.png'],
  ['2024/06/plc-3.png', 'products/plc-3.png'],
  ['2024/06/hmi.png', 'products/hmi.png'],
  // Client logos
  ['2024/06/logo1.jpg', 'clients/logo1.jpg'],
  ['2024/06/logo2.jpg', 'clients/logo2.jpg'],
  ['2024/06/logo3.jpg', 'clients/logo3.jpg'],
  ['2024/06/logo4.jpg', 'clients/logo4.jpg'],
  ['2024/06/logo5.jpg', 'clients/logo5.jpg'],
  // Industry banners (full-size originals)
  ['2024/05/Aggregate-Production.jpg', 'industries/aggregate.jpg'],
  ['2024/05/Automobiles-banner.jpg', 'industries/automobiles.jpg'],
  ['2024/05/Food-beverage-banner.jpg', 'industries/food-beverage.jpg'],
  ['2024/05/Logistics-banner.jpg', 'industries/logistics.jpg'],
  ['2024/05/Manufacturing-banner.jpg', 'industries/manufacturing.jpg'],
  ['2024/05/Oil-Gas-banner.jpg', 'industries/oil-gas.jpg'],
  ['2024/05/Power-Plant-banner.jpg', 'industries/power-plant.jpg'],
];

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function get(remote, local) {
  const dest = resolve(OUT, local);
  if (await exists(dest)) { console.log('skip  ', local); return; }
  const url = `${BASE}/${remote}`;
  const res = await fetch(url);
  if (!res.ok) { console.warn('FAIL  ', local, res.status, url); return; }
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  console.log('saved ', local, `(${(buf.length / 1024).toFixed(0)}kb)`);
}

console.log('Fetching Radiant assets ->', OUT);
for (const [remote, local] of ASSETS) {
  try { await get(remote, local); } catch (e) { console.warn('ERROR ', local, e.message); }
}
console.log('Done.');
