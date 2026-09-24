import type { MediaRow } from "@/components/Media";
import { row, shot } from "@/content/case-studies/helpers";

// Source: Figma "Playground" (24:183619), "Playground · Tablet 768" (24:184552), "Playground · Mobile 390" (24:184850).
// All copy for /playground lives here. Every image is a "shot / …" frame; exports land at /public/shots/<id>.png
// and replace the placeholders automatically. `bare` = no browser chrome/border — the image is the whole surface.

export type PlaygroundGroup = {
  /** Small uppercase caption above the group, e.g. "LITBOX". */
  caption?: string;
  /** Vertical space between rows (px, desktop). Defaults to 32. */
  gap?: 16 | 32;
  rows: MediaRow[];
};

export type PlaygroundSection = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  groups: PlaygroundGroup[];
};

const b = { bare: true } as const;

export const playground = {
  meta: {
    title: "Playground",
    description:
      "Smaller work by Smruti Ranjan Nayak that didn't need a case study — app redesigns, freelance websites and OmnisAI landing pages.",
  },
  hero: {
    kicker: "PLAYGROUND",
    // Two lines from tablet up, as designed; flows naturally on mobile.
    title: ["Redesigns, landing pages", "and web work."],
    lede: "Smaller pieces that didn't need a case study — shown as they are.",
  },
  // Order and numbering exactly as designed in Figma (01, 03, 02 top to bottom).
  sections: [
    {
      id: "app-redesigns",
      kicker: "01 · APP REDESIGNS",
      title: "Existing products, rethought",
      description: "Self-initiated redesigns of apps I use — navigation, hierarchy and visual language.",
      groups: [
        {
          rows: [
            row([shot("24:183634", "App redesign — overview", 1200, 550, b)]),
            // Each pair was exported from Figma as one row image (the frame holding both screens).
            row([shot("24:183636", "App redesign — screens 1 and 2", 1200, 277, { bare: true, radius: 0 })]),
            row([shot("24:183641", "App redesign — screens 3 and 4", 1200, 277, { bare: true, radius: 0 })]),
          ],
        },
      ],
    },
    {
      id: "web-design",
      kicker: "03 · WEB DESIGN · FREELANCE",
      title: "Sites for service businesses & concepts",
      description: "Lead-generation websites and concept pages from the freelance years.",
      groups: [
        {
          rows: [
            row([shot("24:183654", "Service business website — home page", 1200, 769, b)]),
            row([
              shot("24:183656", "Website concept — desktop page", 588, 400, b),
              shot("24:183657", "Website concept — device mockup", 588, 392, b),
            ]),
            row([shot("24:183660", "Online site — home page", 1200, 866, b)]),
            row([
              shot("24:183662", "Website concept — desktop page", 650, 400, b),
              shot("24:183663", "Website concept — desktop page", 526, 400, b),
            ]),
            row([shot("24:183664", "NeuroForge website concept", 1200, 760, b)]),
            row([
              shot("24:183666", "Website concept — landing page", 588, 400, b),
              shot("24:183802", "Sports gear recommendation site — “Find the Perfect Gear with Expert Help”", 588, 400, b),
            ]),
            row([shot("24:183845", "Website concept — full page", 1200, 700, b)]),
          ],
        },
      ],
    },
    {
      id: "landing-pages",
      kicker: "02 · LANDING PAGES · OMNISAI",
      title: "Positioning three products in the suite",
      description: "Defined positioning, page architecture and design for LitBox, MedChron and AutoDoc.",
      groups: [
        {
          caption: "LITBOX",
          gap: 16,
          rows: [
            row([shot("24:183856", "LitBox landing page — hero", 1200, 700, b)]),
            row([
              shot("24:183858", "LitBox landing page — section", 588, 381, b),
              shot("24:183859", "LitBox landing page — section", 588, 380, b),
            ]),
          ],
        },
        {
          caption: "MEDCHRON",
          gap: 16,
          rows: [
            row([shot("24:183862", "MedChron landing page — hero", 1200, 700, b)]),
            row([
              shot("24:183864", "MedChron landing page — section", 384, 334, b),
              shot("24:183865", "MedChron landing page — section", 384, 333, b),
              shot("24:183866", "MedChron landing page — section", 384, 333, b),
            ]),
          ],
        },
        {
          caption: "AUTODOC",
          gap: 16,
          rows: [
            row([shot("24:183869", "AutoDoc landing page — hero", 1200, 700, b)]),
            row([
              shot("24:183871", "AutoDoc landing page — section", 384, 360, b),
              shot("24:183872", "AutoDoc landing page — section", 384, 360, b),
              shot("24:183873", "AutoDoc landing page — section", 384, 360, b),
            ]),
          ],
        },
      ],
    },
  ] satisfies PlaygroundSection[],
};
