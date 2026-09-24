// Source: Figma "About" (24:183482), "About · Tablet 768" (24:184278), "About · Mobile 390" (24:184415).
// All copy for /about lives here — edit freely; the page picks it up.

export type AboutRole = {
  company: string;
  role: string;
  dates: string;
  points: string[];
};

export const about = {
  meta: {
    title: "About",
    description:
      "Smruti Ranjan Nayak — product designer with a computer-science background, leading design for OmnisAI's 14-product legal-AI suite and shipping it in production code.",
  },
  hero: {
    kicker: "ABOUT",
    title: "Intern to design lead in under two years — by shipping what I design.",
    body: "I'm Smruti, a product designer with a computer-science background. At OmnisAI I lead design for a 14-product legal-AI suite: user flows, information architecture, the shared design system and UX writing — then I implement it in production code alongside eight engineers. Design is my differentiator in a space full of engineers; code is what makes the designs land.",
    // TODO: swap for the About-specific photo once it can be exported from Figma (frame 24:183485).
    photo: { src: "/images/portrait.png", alt: "Portrait of Smruti Ranjan Nayak" },
  },
  howIWork: {
    kicker: "HOW I WORK",
    tiles: [
      {
        title: "Design that ships",
        body: "I implement my own designs across production repos and the shared component library — 5 custom Claude Code skills make audit and implementation work repeatable.",
      },
      {
        title: "Systems over screens",
        body: "Extracted ~25 shared primitives from hand-rolled screens; built a ~30-component token system themeable across 8 rail themes and 2 modes.",
      },
      {
        title: "AI product patterns",
        body: "Citation and confidence patterns, human-in-the-loop review, processing states, disclosure — designed for products where a wrong extraction has legal cost.",
      },
    ],
  },
  experience: {
    kicker: "EXPERIENCE",
    roles: [
      {
        company: "OmnisAI",
        role: "Design Lead",
        dates: "Aug 2025 — Present",
        points: [
          "Lead design across the suite; 6 products shaped end to end, the rest through the shared library, landing pages and positioning.",
          "Redesigned CasePro (~40 screens) and AutoDoc end to end; unified transactional email across 7 products.",
          "Designed MedChron's chronology workspace and CaseNotes' recording-consent architecture against multi-state consent law.",
        ],
      },
      {
        company: "Freelance",
        role: "UX Designer",
        dates: "Mar 2024 — Aug 2025",
        points: [
          "Three SaaS and mobile products end to end as sole designer, including a women-only community app built on identity verification.",
          "Lead-generation websites for service businesses that turned into retainers.",
        ],
      },
      {
        company: "Metricoid Technology Solutions",
        role: "UX Design Intern",
        dates: "Nov 2023 — Feb 2024",
        points: [
          "Designed the MVP of a multi-role SaaS referral platform with the CTO — business, referrer, customer and super-admin.",
          "QR-based, device-agnostic discount flow and a promo-tracking dashboard.",
        ],
      },
    ] satisfies AboutRole[],
  },
  skills: {
    title: "Skills",
    rows: [
      {
        label: "Design",
        value:
          "Product design · Information architecture · Interaction design · Design systems · High-fidelity UI · Prototyping · UX writing · Accessibility",
      },
      {
        label: "AI product design",
        value:
          "AI output presentation · Confidence & citation patterns · Human-in-the-loop review · Processing states · Disclosure design",
      },
      {
        label: "Research & process",
        value: "Heuristic audits · Usability review · Competitive analysis · Documentation · Developer handoff",
      },
      {
        label: "Tools & code",
        value:
          "Figma · Framer · Design tokens · Style Dictionary · CSS architecture · Tailwind · React · TypeScript · MUI · Git · Claude Code",
      },
    ],
  },
  education: {
    title: "Education",
    degree: "B.Tech, Computer Science & Engineering",
    detail: "ITER, S'O'A University, Bhubaneswar · 2022–2026 · CGPA 7.93",
  },
  beyondWork: {
    title: "Beyond work",
    body: "Chess. Ran a chess YouTube channel — streaming, editing highlights into Shorts.",
  },
};
