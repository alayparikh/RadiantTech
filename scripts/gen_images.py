#!/usr/bin/env python3
"""Generate site imagery with Gemini "Nano Banana" from the prompts in
docs/IMAGE-PROMPTS.md. Reads GEMINI_API_KEY from env or ~/.claude/skills/*/.env.

Usage:
  python scripts/gen_images.py            # generate all pending targets
  python scripts/gen_images.py home-hero  # only named target(s)
  python scripts/gen_images.py --flash    # use faster Flash model
"""
import os
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
PUBLIC = REPO / "public"

GLOBAL = (
    " Photorealistic, professionally lit industrial photography, sharp focus, "
    "realistic materials and wiring. No text, no logos, no brand names, no readable "
    "labels on any equipment. No warped cables, no impossible geometry. Neutral "
    "corporate color grade with cool blue-grey tones. High detail, 4K."
)

# id -> (relative output path, aspect ratio, prompt)
TARGETS = {
    "home-hero": (
        "img/hero/home-hero.jpg", "16:9",
        "Wide cinematic photograph of a modern industrial control room and grey UL-listed "
        "electrical control panels in a clean water-treatment / power facility. A technician "
        "in a hi-vis vest and hard hat views an HMI touchscreen from behind, soft blue "
        "equipment glow, shallow depth of field, dark moody atmosphere with teal-blue rim "
        "lighting and deep navy shadows, generous negative space on the left third. 35mm lens.",
    ),
    "control-panels-banner": (
        "img/products/control-panels-banner.jpg", "16:9",
        "Wide shot of a large UL-508A industrial control panel enclosure, doors open, showing "
        "neatly organized DIN-rail components, circuit breakers, terminal blocks, color-coded "
        "wiring in tidy looms, a PLC and power supply. Clean fabrication-shop background, "
        "bright even lighting.",
    ),
    "control-panel": (
        "img/products/control-panel.jpg", "4:3",
        "Close-up photograph of an open industrial control cabinet interior: a Programmable "
        "Logic Controller, I/O modules, a variable frequency drive, motor starters, and neatly "
        "bundled wiring on DIN rail. Crisp macro detail, cool lighting.",
    ),
    "hmi-screen": (
        "img/products/control-panel-2.png", "4:3",
        "Photograph of an industrial HMI touchscreen mounted on a stainless control cabinet, "
        "displaying an abstract process-visualization dashboard with tanks, pumps and trend "
        "lines as non-text graphics. Operator's hand near the screen, blue-lit control room. "
        "No readable words or numbers on the screen.",
    ),
    "field-service": (
        "img/products/field-service.png", "4:3",
        "Photograph of a controls technician in hard hat and hi-vis vest commissioning "
        "equipment on-site, holding a laptop connected to a control panel by an ethernet "
        "cable, industrial plant background, natural daylight.",
    ),
    # ---- Industry cards (3:2) ----
    "wastewater": (
        "img/industries/wastewater.jpg", "3:2",
        "Aerial photograph of a modern municipal wastewater treatment plant, circular "
        "clarifier tanks with rotating bridges, walkways and blue water, sunny day.",
    ),
    "power-plant": (
        "img/industries/power-plant.jpg", "3:2",
        "Photograph of a power plant with cooling towers emitting white steam and a turbine "
        "hall, dramatic sky, industrial energy facility.",
    ),
    "oil-gas": (
        "img/industries/oil-gas.jpg", "3:2",
        "Photograph of an oil and gas facility at golden hour, pump jacks silhouetted against "
        "an orange sky, refinery piping in the background.",
    ),
    "aggregate": (
        "img/industries/aggregate.jpg", "3:2",
        "Photograph of an aggregate quarry with conveyor systems and large gravel stockpiles, "
        "heavy processing machinery, daytime.",
    ),
    "automobiles": (
        "img/industries/automobiles.jpg", "3:2",
        "Photograph of an automotive assembly line interior with robotic welding arms and car "
        "bodies moving along the line, clean modern factory.",
    ),
    "logistics": (
        "img/industries/logistics.jpg", "3:2",
        "Photograph of a logistics distribution warehouse with a conveyor sortation system, "
        "stacked containers and a forklift, cool blue industrial tones.",
    ),
    "food-beverage": (
        "img/industries/food-beverage.jpg", "3:2",
        "Photograph of a food and beverage bottling line, stainless-steel conveyors carrying "
        "glass bottles, hygienic bright processing plant.",
    ),
    "manufacturing": (
        "img/industries/manufacturing.jpg", "3:2",
        "Photograph of a modern manufacturing floor with CNC machinery, overhead piping and "
        "conveyors, clean well-lit industrial interior.",
    ),
    # ---- Other old-site replacements ----
    "control-panel": (
        "img/products/control-panel.jpg", "4:3",
        "Close-up photograph of an open industrial control cabinet interior: a Programmable "
        "Logic Controller, I/O modules, a variable frequency drive, motor starters, and neatly "
        "bundled wiring on DIN rail. Crisp macro detail, cool lighting.",
    ),
    "wastewater-monitor": (
        "img/products/wastewater-monitor.jpg", "16:9",
        "Wide photograph of a water-treatment SCADA control room: an operator seated at a desk "
        "facing several large monitors displaying process-control dashboards with tanks, pumps "
        "and trend graphs rendered as abstract non-text graphics, blue ambient lighting, modern "
        "clean facility. No readable words or numbers on the screens.",
    ),
}

INDUSTRIES = [
    "wastewater", "power-plant", "oil-gas", "aggregate",
    "automobiles", "logistics", "food-beverage", "manufacturing",
]

# Default run set (skip the ones that already look fine unless asked).
DEFAULT = ["home-hero", "control-panels-banner", "control-panel", "hmi-screen", "field-service"]


def load_env():
    for p in [
        Path.home() / ".claude" / "skills" / "design" / ".env",
        Path.home() / ".claude" / "skills" / ".env",
        Path.home() / ".claude" / ".env",
    ]:
        if p.exists():
            for line in p.read_text().splitlines():
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    os.environ.setdefault(k, v.strip().strip("\"'"))


def main():
    load_env()
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        sys.exit("GEMINI_API_KEY not found (env or ~/.claude/skills/design/.env)")

    from google import genai
    from google.genai import types

    args = [a for a in sys.argv[1:] if not a.startswith("-")]
    use_flash = "--flash" in sys.argv
    model = "gemini-2.5-flash-image" if use_flash else "gemini-3-pro-image-preview"
    targets = args if args else DEFAULT

    client = genai.Client(api_key=key)
    print(f"Model: {model}")

    for tid in targets:
        if tid not in TARGETS:
            print(f"  skip unknown target: {tid}")
            continue
        rel, ratio, prompt = TARGETS[tid]
        out = PUBLIC / rel
        out.parent.mkdir(parents=True, exist_ok=True)
        print(f"\n[{tid}] {ratio} -> {rel}")
        try:
            resp = client.models.generate_content(
                model=model,
                contents=prompt + GLOBAL,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                    image_config=types.ImageConfig(aspect_ratio=ratio),
                ),
            )
            data = None
            for part in resp.candidates[0].content.parts:
                if getattr(part, "inline_data", None) and part.inline_data.mime_type.startswith("image/"):
                    data = part.inline_data.data
                    break
            if not data:
                print("  no image returned")
                continue
            out.write_bytes(data)
            print(f"  saved {len(data)//1024} KB")
        except Exception as e:  # noqa
            print(f"  ERROR: {e}")


if __name__ == "__main__":
    main()
