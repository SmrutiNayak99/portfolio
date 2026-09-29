import type { ShotRef } from "@/components/Shot";

// Source: Figma "Home" (24:180259), "Home · Tablet 768" (24:183918), "Home · Mobile 390" (24:184098).
export const home = {
  hero: {
    kicker: "SMRUTI RANJAN NAYAK · PRODUCT DESIGNER, OMNISAI",
    title: "I design complex tools people can trust, and ship them in code",
    lede: "Product Designer across OmnisAI's 14-product legal-AI suite. One system for many kinds of users, AI output you can verify, and production code alongside engineers.",
    primaryCta: { label: "See the work ↓", href: "#work" },
    secondaryCta: { label: "About me", href: "/about" },
    portrait: { src: "/images/portrait.png", alt: "Portrait of Smruti Ranjan Nayak" },
    facts: [
      { label: "BASED IN", value: "Bhubaneswar, India" },
      { label: "CURRENTLY", value: "Product Designer at OmnisAI", note: "since Aug 2025" },
      { label: "BACKGROUND", value: "B.Tech CSE, 2026" },
      { label: "PATH", value: "Intern → Freelance → Product Designer", note: "in 2 years" },
    ],
  },
  strengths: {
    kicker: "WHAT I'M GOOD AT",
    tiles: [
      {
        title: "One system, many users",
        body: "Admin tooling for three roles with opposing incentives; an app for four. Shared objects, role-specific shells.",
        proof: [
          { label: "Referral Program", href: "/work/referral-program" },
          { label: "Goaler", href: "/work/goaler" },
        ],
      },
      {
        title: "AI output you can verify",
        body: "A source pill on every extracted fact. Version history on every AI change. Nothing the AI says goes unchecked.",
        proof: [
          { label: "MedChron", href: "/work/medchron" },
          { label: "CaseNotes", href: "/work/casenotes" },
        ],
      },
      {
        title: "Design that ships",
        body: "Top contributor to omnis-common, the design system every OmnisAI app is moving onto. ~300 commits across 9 production repos.",
        proof: [{ label: "See the code", href: "/work/casenotes#shipped-in-code" }],
      },
    ],
  },
  work: {
    kicker: "SELECTED WORK",
    title: ["Four products.", "One way of working."],
    aside: "Audit first, fix the system, ship it.",
    more: { label: "Landing pages and web work →", href: "/playground" },
    cards: [
      {
        slug: "medchron",
        eyebrow: "MEDCHRON · OMNISAI · 2026",
        number: "01",
        title: "From a box of medical records to a case you can argue",
        body: "Every AI-extracted fact links to its source page; treatment gaps and bills are computed, not counted by hand.",
        visual: { id: "24:180358", label: "MedChron patient details", w: 588, h: 360, bare: true, radius: 0 },
      },
      {
        slug: "casenotes",
        eyebrow: "CASENOTES · OMNISAI · 2026",
        number: "02",
        title: "Turning a meeting recorder into a case-ready record",
        body: "A shipped AI product attorneys didn't fully trust, fixed at the system level with every AI change visible and reversible.",
        visual: { id: "24:181537", label: "CaseNotes meeting summary", w: 588, h: 360, bare: true, radius: 0 },
      },
      {
        slug: "referral-program",
        eyebrow: "REFERRAL PLATFORM · 2023",
        number: "03",
        title: "One platform, three businesses, one design system",
        body: "Three roles with opposing incentives on one component set. Each sees the same money from its own side.",
        visual: { id: "24:181913", label: "Referral platform business profile", w: 588, h: 360, bare: true, radius: 0 },
      },
      {
        slug: "goaler",
        eyebrow: "GOALER · IOS · 2024",
        number: "04",
        title: "One football app for the four people who make a match happen",
        body: "Four roles on one object model, plus a dark, one-handed referee tool designed for the pitch.",
        visual: { id: "24:182818", label: "Goaler player home and referee game control", w: 588, h: 360, bare: true, radius: 0 },
      },
    ] satisfies { slug: string; eyebrow: string; number: string; title: string; body: string; visual: ShotRef }[],
  },
};
