import type { ShotRef } from "@/components/Shot";

// Source: Figma "Home" (24:180259), "Home · Tablet 768" (24:183918), "Home · Mobile 390" (24:184098).
export const home = {
  hero: {
    kicker: "SMRUTI RANJAN NAYAK · DESIGN LEAD, OMNISAI",
    title: "Product designer who ships the code",
    lede: "I lead design across OmnisAI's 14-product legal-AI suite — flows, systems and interfaces — and implement them in production alongside engineers.",
    primaryCta: { label: "See the work ↓", href: "#work" },
    secondaryCta: { label: "About me", href: "/about" },
    portrait: { src: "/images/portrait.png", alt: "Portrait of Smruti Ranjan Nayak" },
    facts: [
      { label: "BASED IN", value: "Bhubaneswar, India" },
      { label: "CURRENTLY", value: "Design Lead at OmnisAI", note: "since Aug 2025" },
      { label: "BACKGROUND", value: "B.Tech Computer Science, 2026" },
      { label: "PATH", value: "Intern → Freelance → Design Lead in 2 years" },
    ],
  },
  glance: {
    kicker: "AT A GLANCE",
    whatIDo: {
      title: "What I do",
      rows: [
        { label: "Design", value: "Information architecture · Interaction design · Design systems · UX writing" },
        { label: "AI product design", value: "Citation & confidence patterns · Human-in-the-loop review · Processing states" },
        { label: "Code", value: "React · TypeScript · Tailwind · Design tokens · Style Dictionary · Git" },
        { label: "Tools", value: "Figma · Framer · Claude Code" },
      ],
    },
    journey: {
      title: "Journey",
      rows: [
        { year: "2023", title: "UX Design Intern, Metricoid", body: "Designed a multi-role referral platform MVP with the CTO." },
        { year: "2024", title: "Freelance UX Designer", body: "3 SaaS and mobile products end to end as sole designer." },
        { year: "2025", title: "Design Lead, OmnisAI", body: "Leading design across a 14-product legal-AI suite; shipping in code." },
        { year: "2026", title: "B.Tech CSE, SOA University", body: "Graduating." },
      ],
    },
  },
  work: {
    kicker: "SELECTED WORK",
    title: ["Four products.", "One way of working."],
    aside: "Audit first, fix the system, ship it.",
    more: { label: "and lot more...", href: "/playground" },
    cards: [
      {
        slug: "medchron",
        eyebrow: "MEDCHRON · OMNISAI · 2026",
        number: "01",
        title: "From a box of medical records to a case you can argue",
        body: "A source-verified chronology for PI attorneys — with treatment gaps and bills computed, not counted by hand.",
        visual: { id: "24:180358", label: "MedChron patient details", w: 588, h: 360, bare: true, radius: 0 },
      },
      {
        slug: "casenotes",
        eyebrow: "CASENOTES · OMNISAI · 2026",
        number: "02",
        title: "Turning a meeting recorder into a case-ready record",
        body: "60+ audit findings, five workstreams, every core surface redesigned so attorneys can trust the AI output.",
        visual: { id: "24:181537", label: "CaseNotes meeting summary", w: 588, h: 360, bare: true, radius: 0 },
      },
      {
        slug: "referral-program",
        eyebrow: "REFERRAL PLATFORM · 2023",
        number: "03",
        title: "One platform, three businesses, one design system",
        body: "~120 admin screens for three roles with opposing incentives, composed from one component set.",
        visual: { id: "24:181913", label: "Referral platform business profile", w: 588, h: 360, bare: true, radius: 0 },
      },
      {
        slug: "goaler",
        eyebrow: "GOALER · IOS · 2024",
        number: "04",
        title: "One football app for the four people who make a match happen",
        body: "Player, team admin, organizer and referee — four shells on one object model, including a dark live-match tool.",
        visual: { id: "24:182818", label: "Goaler player home and referee game control", w: 588, h: 360, bare: true, radius: 0 },
      },
    ] satisfies { slug: string; eyebrow: string; number: string; title: string; body: string; visual: ShotRef }[],
  },
};
