import type { ShotRef } from "@/components/Shot";

// Source: Figma "Home" (24:180259), "Home · Tablet 768" (24:183918), "Home · Mobile 390" (24:184098).
export const home = {
  hero: {
    kicker: "SMRUTI RANJAN NAYAK · PRODUCT DESIGNER, OMNISAI",
    title: "Product designer who ships the code",
    lede: "Product design across OmnisAI's 14-product legal-AI suite, from the first flow to production code.",
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
        title: "AI built into how I work",
        body: "Five custom Claude Code skills I built run my UI audits and turn designs into production code, so my time goes into design decisions.",
        proof: [{ label: "How I work", href: "/about" }],
      },
      {
        title: "One system, many users",
        body: "Products where several roles share the same data, each with a home built for its job: a referral platform for three, a football app for four.",
        proof: [
          { label: "Referral Program", href: "/work/referral-program" },
          { label: "Goaler", href: "/work/goaler" },
        ],
      },
      {
        title: "Design that ships",
        body: "I build what I design. Top contributor to omnis-common, the design system behind every OmnisAI app, with about 390 commits across 13 repos.",
        proof: [{ label: "About me", href: "/about" }],
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
        body: "A shipped AI notetaker that was hard to use. I audited it, fixed the shared components behind 60+ issues, and made every AI edit visible and reversible.",
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
