# Image Prompts — Radiant Control Systems

Paste-ready prompts for generating site imagery offline (Gemini "Nano Banana" /
"Nano Banana Pro", or any image model). Generate → save to the exact path in the
table → the site picks it up automatically on next build. No code changes needed
unless noted.

Most of the site already uses **real photos scraped from radiantcontrolsystems.com**.
This file covers (1) the one true placeholder still in the code, and (2) optional
**quality upgrades** for scraped photos that are low-resolution.

---

## How to use

1. Generate the image at the **exact aspect ratio** in the table (crop to it if the
   model outputs square).
2. Export as the **filename shown** (keep the extension — `.jpg` or `.png`).
3. Drop it into the matching `public/img/...` folder, replacing the existing file.
4. For the **home hero only**, also do the one-line swap noted in its row.
5. Rebuild (`npm run build`) — that's it.

### Global rules for every prompt (append to any prompt if the model drifts)

> Photorealistic, professionally lit industrial photography, sharp focus, realistic
> materials and wiring. **No text, no logos, no brand names, no readable labels** on
> any equipment. No warped cables, no impossible geometry, no extra fingers. Neutral
> corporate color grade with cool blue-grey tones. 4K, high detail.

**Do NOT AI-generate:** the Radiant logo, the CEO portrait, certification badges
(MBE/DBE/NMSDC/SBSD), or the client logos (Amtech, Tesla, Fulton County) — those must
stay real. Replace client logos only with the companies' official logo files.

---

## 1. Placeholder still in code

| Slot | File | Ratio / size | Status |
|------|------|--------------|--------|
| `home-hero` | `public/img/hero/home-hero.jpg` | 16:9 · 2400×1350 | **Placeholder** (site currently falls back to a stock power-plant photo) |

**Prompt:**
> Wide cinematic photograph of a modern industrial control room and electrical control
> panels in a clean water-treatment / power facility. Rows of grey UL-listed control
> cabinets with closed doors, a technician in a hi-vis vest and hard hat viewing an
> HMI touchscreen from behind, soft blue equipment glow, shallow depth of field, dark
> moody atmosphere with teal-blue rim lighting and deep navy shadows so white headline
> text is readable over the left third. Negative space on the left. Shot on a 35mm lens.
> [+ global rules]

**Swap-in (only for this one):** in [Home.jsx](../src/pages/Home.jsx), change the hero
background from `/img/industries/power-plant.jpg` to `/img/hero/home-hero.jpg`:
```jsx
<section className="hero bp" style={{ backgroundImage: 'url(/img/hero/home-hero.jpg)' }}>
```
(Currently the hero uses an inline background — this is a one-line edit.)

---

## 2. Optional quality upgrades (scraped photos are low-res)

These already display real photos, but the sources are small (20–90 KB). Regenerate
for a crisper look. Same filename = automatic swap, no code change.

### Control panel — hero/banner
- **File:** `public/img/products/control-panels-banner.jpg` · **16:9 · 2000×1125**
> Photorealistic wide shot of a large UL-508A industrial control panel enclosure, doors
> open, showing neatly organized DIN-rail components, circuit breakers, terminal blocks,
> color-coded wiring in tidy looms, a PLC and power supply. Clean fabrication-shop
> background, bright even lighting. [+ global rules]

### Control panel — detail (PLC integration page)
- **File:** `public/img/products/control-panel.jpg` · **4:3 · 1600×1200**
> Close-up photograph of an open industrial control cabinet interior: a Programmable
> Logic Controller, I/O modules, variable frequency drive, motor starters, and neatly
> bundled wiring on DIN rail. Crisp macro detail, cool lighting. [+ global rules]

### HMI / SCADA screen (HMI page)
- **File:** `public/img/products/control-panel-2.png` · **4:3 · 1600×1200**
> Photograph of an industrial HMI touchscreen panel mounted on a stainless control
> cabinet, displaying a generic process-visualization dashboard with tanks, pumps, and
> trend lines rendered as abstract non-text graphics. Operator's hand near the screen,
> blue-lit control room. **No readable words or numbers on the screen.** [+ global rules]

### Field service (Field Service page)
- **File:** `public/img/products/field-service.png` · **4:3 · 1600×1200**
> Photograph of a controls technician in hard hat and hi-vis vest commissioning
> equipment on-site, holding a laptop connected to a control panel by an ethernet
> cable, industrial plant background, natural daylight. [+ global rules]

### Instrumentation (optional, not currently placed)
- **File:** `public/img/products/instrumentation.png` · **4:3 · 1600×1200**
> Photograph of industrial field instrumentation: pressure transmitters, flow meters,
> and level sensors mounted on stainless piping in a process plant, cool tones,
> sharp focus. [+ global rules]

---

## 3. Industry photos (already real & acceptable — regenerate only if desired)

All eight use distinct real photos. Regenerate a set for a consistent look; each is
**3:2 · 1500×1000**, saved to `public/img/industries/<name>.jpg`.

| File | Prompt seed (append global rules) |
|------|-----------------------------------|
| `wastewater.jpg` | Aerial photo of a modern wastewater treatment plant, circular clarifier tanks, walkways, blue water, sunny day |
| `power-plant.jpg` | Power plant with cooling towers emitting steam, turbine hall exterior, dramatic sky |
| `oil-gas.jpg` | Oil & gas facility at golden hour, pump jacks silhouetted against orange sky |
| `aggregate.jpg` | Aggregate quarry with conveyor systems and gravel stockpiles, machinery |
| `automobiles.jpg` | Automotive assembly line, robotic arms and car bodies, factory interior |
| `logistics.jpg` | Logistics warehouse / port with containers, forklifts, and trucks, blue tone |
| `food-beverage.jpg` | Food & beverage bottling line, stainless conveyors with bottles, hygienic plant |
| `manufacturing.jpg` | Modern manufacturing floor with machinery and piping, clean industrial interior |

---

## Model notes

- **Nano Banana Pro** (`gemini-3-pro-image-preview`) gives the best photorealism and
  prompt adherence for equipment; **Nano Banana** (`gemini-2.5-flash-image`) is faster.
- The bundled generator lives at `~/.claude/skills/design/scripts/` and needs
  `GEMINI_API_KEY` set. Any image tool works — the prompts above are model-agnostic.
- If a model insists on adding fake text/logos to panels, add: *"blank unlabeled
  equipment, no signage, no writing anywhere in frame."*
