# Future Tasks — Radiant Control Systems

Deferred work, in priority order. Nothing here blocks the demo/deploy.

## 1. Real project proof (highest ROI)
The Projects page ([/projects](../src/pages/Projects.jsx)) currently shows 6 **placeholder** cards with `[REPLACE]` labels. Supply, per project, in [src/data/site.js](../src/data/site.js) `PROJECTS`:
- Project name, customer/municipality (only if permitted), city
- Scope, software, equipment
- A real job-site photo → `public/img/projects/<id>.jpg`, then set `photo` + remove `placeholder: true`
Owner to provide project details + photos.

## 2. Real project photos site-wide
Replace remaining stock/AI imagery with Radiant's own job photos where possible: control panels, MCC rooms, installs, engineers on-site. Own photos out-convert any stock.

## 3. Regenerate low-res / uncertain-provenance images (needs Gemini API credits)
API key is set but the project's **prepaid credits are depleted** (429). Add credits at
https://ai.studio/projects → Billing, then run:
```
python3 scripts/gen_images.py control-panel \
  wastewater power-plant oil-gas aggregate automobiles logistics food-beverage manufacturing --flash
```
- `control-panel.jpg` (PLC page) is low-res — regenerate.
- The 8 industry photos are currently scraped from the old site (unknown license). Regenerating as AI makes them claim-proof and overwrites the same filenames (cards + heroes + sections all upgrade at once).

## 4. Contact form key
Form is wired to **Web3Forms** but needs an access key to actually email.
- Get a free key at https://web3forms.com (enter `info@radiantcontrolsystems.com`).
- Set `VITE_WEB3FORMS_ACCESS_KEY` in the host env (Vercel/IONOS) — see [.env.example](../.env.example) and DEPLOY.md.
- Until set, the form runs in **demo mode** (validates + shows success, sends nothing).

## 5. Client logos (permission required)
The old "Trusted by" logo strip (Tesla, Fulton County, etc.) was **removed** — showing third-party
logos as clients without written permission is a trademark/endorsement risk. It was replaced with the
real certification badges. To re-add client logos: obtain official logo files **and** written permission,
then restore the `LogoCloud` component in [Home.jsx](../src/pages/Home.jsx).

## 6. Testimonials
Add 2–3 real customer quotes (name + title + company if permitted). A testimonials section can slot
between the CTA and FAQ on the home page.

## 7. Content / SEO growth
- Google Business Profile for Duluth, GA (drives local + map traffic).
- Real blog posts (PLC/SCADA how-tos) for long-tail search.
- Downloadable capability-statement PDF for procurement officers.
