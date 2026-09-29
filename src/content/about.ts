// Source: Figma "About" (24:183482), "About · Tablet 768" (24:184278), "About · Mobile 390" (24:184415).
// All copy for /about lives here — edit freely; the page picks it up.

export type AboutRole = {
  company: string;
  role: string;
  dates: string;
  points: string[];
  /** Marks the ongoing role: badge + stronger card. */
  current?: boolean;
  /** Short "what is it" key for product names used in the points. */
  products?: { name: string; what: string }[];
};

export const about = {
  meta: {
    title: "About",
    description:
      "Smruti Ranjan Nayak, product designer with a computer-science background, leading design for OmnisAI's 14-product legal-AI suite and shipping it in production code.",
  },
  hero: {
    kicker: "ABOUT",
    title: "Intern to product designer in under two years, by shipping what I design.",
    body: "I'm Smruti, a product designer with a computer-science background. At OmnisAI I lead design for a 14-product legal-AI suite: flows, IA, the shared design system and UX writing. And I implement it in production alongside eight engineers.",
    // TODO: swap for the About-specific photo once it can be exported from Figma (frame 24:183485).
    photo: { src: "/images/portrait.png", alt: "Portrait of Smruti Ranjan Nayak" },
  },
  howIWork: {
    kicker: "HOW I WORK",
    tiles: [
      {
        title: "Audit first",
        body: "Start from the live product. Every finding is written with its fix, its rationale and the design-system rule it breaks.",
      },
      {
        title: "Fix the system",
        body: "Fix at the component level, not the screen. One modal spec closed dozens of CaseNotes issues at once.",
      },
      {
        title: "Ship it",
        body: "Implement it in production, then re-audit. Five custom Claude Code skills make audit and implementation repeatable.",
      },
    ],
  },
  experience: {
    kicker: "EXPERIENCE",
    roles: [
      {
        company: "OmnisAI",
        role: "Product Designer",
        dates: "Aug 2025 – Present",
        current: true,
        points: [
          "Lead product design across a 14-product legal-AI suite: 6 products owned end to end, the rest through the shared design system.",
          "Redesigned CasePro across ~40 screens: the matter view went from a long scroll to a one-screen index; new-matter creation got step-level validation.",
          "Built the design system 8 products run on: ~30 tokenized components, 8 product themes, light and dark modes.",
          "Redesigned AutoDoc end to end (upload, email triage, parsing rules, matter matching) and moved it onto the shared system.",
          "Designed MedChron's chronology workspace and CaseNotes' recording-consent architecture: all-party consent, in-meeting disclosure, a tamper-proof audit log.",
          "Ship my own designs in production repos, including the shared component library, alongside 8 engineers.",
        ],
        products: [
          { name: "CasePro", what: "Legal case-management CRM" },
          { name: "AutoDoc", what: "AI document intake" },
          { name: "MedChron", what: "AI medical-record chronologies" },
          { name: "CaseNotes", what: "AI legal meeting notetaker" },
        ],
      },
      {
        company: "Freelance",
        role: "UX Designer",
        dates: "Mar 2024 – Aug 2025",
        points: [
          "Three SaaS and mobile products end to end as sole designer: multi-role platforms, community products and marketing sites.",
          "A women-only community app built around identity verification and interest-based onboarding.",
          "Lead-generation websites for service businesses that turned into repeat work and retainers.",
        ],
      },
      {
        company: "Metricoid Technology Solutions",
        role: "UX Design Intern",
        dates: "Nov 2023 – Feb 2024",
        points: [
          "Designed the MVP of a multi-role SaaS referral platform with the CTO, for business, referrer, customer and super-admin.",
          "A QR-based discount flow and a referral analytics dashboard for conversions, referrals and top referrers.",
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
          "Product design · Information architecture · Interaction design · Design systems · High-fidelity UI · Prototyping · UX writing · Responsive design · Accessibility",
      },
      {
        label: "AI product design",
        value:
          "AI workflows · AI output presentation · Confidence & citation patterns · Human-in-the-loop review · Processing states · Disclosure design",
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
    heading: "Chess",
    detail: "Ran a chess YouTube channel: live streams, with highlights edited into Shorts",
  },
};
