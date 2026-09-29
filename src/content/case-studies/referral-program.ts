import type { CaseStudy } from "../types";
import { row, shot } from "./helpers";

// Source: Figma "Referral Program — Case Study" (24:153272) + Tablet (24:185148) + Mobile (24:191794).
export const referralProgram: CaseStudy = {
  slug: "referral-program",
  name: "Referral Program",
  metaTitle: "Referral Program: One platform, three businesses, one design system",
  metaDescription:
    "A referral platform has three customers with opposing incentives. I designed one admin system that serves all three from a shared component set.",
  sections: [
    {
      name: "Summary",
      pad: "hero",
      gap: 64,
      blocks: [
        {
          type: "hero",
          kicker: "CASE STUDY 03 · FLINGFLY REFERRAL PLATFORM · ADMIN WEB APP",
          title: "One platform, three businesses, one design system",
          lede: "Three roles that want different things. One admin system, one component set.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Sole product designer" },
            { label: "SCOPE", value: "Super Admin, Business Admin and Referrer portals" },
            { label: "TIMELINE", value: "2 months · 2023" },
            { label: "CONTEXT", value: "0→1 client project" },
          ],
        },
        { type: "heroPanel", image: shot("24:153293", "Referral platform admin dashboard", 1200, 793.3) },
      ],
    },
    {
      name: "Intro",
      pad: "intro",
      blocks: [
        {
          type: "statement",
          kicker: "WHY THIS ONE",
          text: "The largest system I'd designed alone. The hard part wasn't a screen. It was making three very different users feel at home in one product, without tripling the work.",
        },
      ],
    },
    {
      name: "Context, problem and role",
      tone: "white",
      pad: "context",
      gap: 72,
      blocks: [
        {
          type: "split",
          leftWidth: 440,
          kicker: "CONTEXT",
          heading: "What the platform does",
          body: "Businesses run referral programs. Referrers share them, customers redeem, the platform takes a cut. Each role needs its own admin.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              leftWidth: 440,
              kicker: "PROBLEM",
              heading: "Three products, or one?",
              body: "Four constraints shaped the system.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                { title: "3× the work", body: "~40 screens per role. Separately, three products." },
                { title: "Money flows both ways", body: "'Commission' means something different to each role." },
                { title: "Irreversible actions", body: "Approve, block, delete had to be unambiguous." },
                { title: "Real permissions", body: "Finance can see payouts but not touch programs." },
              ],
            },
          ],
        },
        {
          type: "split",
          leftWidth: 440,
          kicker: "APPROACH",
          heading: "Design the primitives, then the roles",
          body: "One matrix of entity × action × role became the nav, the permissions and the dialog list. Primitives built once; every role composed from them.",
        },
        {
          type: "chips",
          indent: 440,
          items: [
            { label: "Side nav" },
            { label: "KPI card" },
            { label: "Data table" },
            { label: "Filter drawer" },
            { label: "Confirmation dialog" },
            { label: "Side form" },
          ],
        },
      ],
    },
    {
      name: "Solution 1",
      blocks: [
        {
          type: "solutionHeader",
          leftWidth: 440,
          kicker: "SOLUTION 1 OF 3",
          title: "One shell, three roles",
          outcome: "Same dashboard anatomy for every role. The nav shows only what that role owns.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:154266", "Super Admin dashboard, Business dashboard, Referrer dashboard", 1200, 328, { bare: true, radius: 16 }),
            ]),
            row([
              shot("24:155381", "Navigation for Super Admin, Business and Referrer, and the filter drawer", 1199.7, 568.3, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "One nav; each role sees a subset.", why: "Built once, it can't drift." },
            { text: "The same card language everywhere.", why: "Same numbers, same shapes, no translating." },
          ],
        },
      ],
    },
    {
      name: "Solution 2",
      blocks: [
        {
          type: "solutionHeader",
          leftWidth: 440,
          kicker: "SOLUTION 2 OF 3",
          title: "Consequences, stated before they happen",
          outcome: "Approvals happen in place. Every irreversible action explains itself first.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:156815", "Referrer profile", 780, 554.67),
              shot("24:157279", "Accept referrer confirmation, Disapprove confirmation, Block business confirmation", 460, 652.7, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "One sentence of consequence per irreversible action.", why: "Know before you click." },
            { text: "Deactivate and delete never look alike.", why: "Lookalikes get mixed up." },
          ],
        },
      ],
    },
    {
      name: "Solution 3",
      blocks: [
        {
          type: "solutionHeader",
          leftWidth: 440,
          kicker: "SOLUTION 3 OF 3",
          title: "Commission from three sides",
          outcome: "The same money, shown the way it flows for each role: collected, owed, or paid.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:158169", "Commission for Super Admin, Business and Referrer", 1200, 314, { bare: true, radius: 16 }),
            ]),
            row([
              shot("24:158650", "Pending commission", 780, 554.67),
              shot("24:158717", "Pay commission to all referrers, Payment details", 460, 602.7, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "One receipt, one history, every side.", why: "Disputes start from the same record." },
            { text: "Referrers get one primary action: withdraw.", why: "It's why they came." },
          ],
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "3", label: "roles, one product. New screens are composed, not designed from scratch" },
      { value: "1", label: "dialog pattern that states every consequence up front" },
      { value: "1", label: "payment record shared by platform, business and referrer" },
    ],
  },
  reflection: "The surface is louder than I'd choose today. I'd keep the system and calm the visuals, and design the referrer's mobile experience first.",
  next: { slug: "goaler", name: "Goaler" },
  footerNote: "Product Designer · Case study 03 of 04",
};
