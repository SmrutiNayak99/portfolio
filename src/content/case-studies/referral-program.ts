import type { CaseStudy } from "../types";
import { row, shot } from "./helpers";

// Source: Figma "Referral Program — Case Study" (24:153272) + Tablet (24:185148) + Mobile (24:191794).
export const referralProgram: CaseStudy = {
  slug: "referral-program",
  name: "Referral Program",
  metaTitle: "Referral Program — One platform, three businesses, one design system",
  metaDescription:
    "A referral platform has three customers with opposing incentives — the platform, the businesses paying commission, and the referrers earning it. I designed one admin system that serves all three from a shared component set, so a new screen for any role costs hours, not a redesign.",
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
          lede: "A referral platform has three customers with opposing incentives — the platform, the businesses paying commission, and the referrers earning it. I designed one admin system that serves all three from a shared component set, so a new screen for any role costs hours, not a redesign.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Sole product designer — research, IA, UI, design system" },
            { label: "SCOPE", value: "Super Admin, Business Admin and Referrer portals · ~120 screens" },
            { label: "TIMELINE", value: "2 months · 2023" },
            { label: "CONTEXT", value: "0→1 Client Project" },
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
          text: "This was the largest system I'd designed alone. The interesting problem wasn't any single screen — it was making three very different users feel like they were using the same product, without flattening their needs or tripling the work.",
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
          body: "Businesses create referral programs — a discount for the friend, a commission for the referrer. Referrers share them; customers redeem; the platform takes a cut. Three roles need admin tooling: Super Admin (approve businesses, categories, platform-wide promotions, employees, commission), Business Admin (programs, referrers, customers, team, payouts) and Referrer (partnered businesses, referrals, earnings, withdrawals).",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              leftWidth: 440,
              kicker: "PROBLEM",
              heading: "Three products, or one?",
              body: "Four constraints shaped the whole system.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                {
                  title: "3× the work",
                  body: "Each role has ~40 screens. Designing them independently meant three different products.",
                },
                {
                  title: "Money flows both ways",
                  body: "The platform collects, the business pays, the referrer receives — the same 'Commission' screen means something different to each.",
                },
                {
                  title: "Dozens of irreversible actions",
                  body: "Approve, block, disable, delete — across every entity — had to be consistent and unambiguous.",
                },
                {
                  title: "Real permissions",
                  body: "Businesses wanted finance staff who could see payouts but couldn't touch programs.",
                },
              ],
            },
          ],
        },
        {
          type: "split",
          leftWidth: 440,
          kicker: "MY ROLE",
          heading: "End to end",
          body: "Role and journey mapping, information architecture per role, the component system — nav, KPI cards, tables, filters, dialogs, side forms — and all ~120 screens.",
        },
      ],
    },
    {
      name: "Approach",
      gap: 40,
      blocks: [
        {
          type: "split",
          leftWidth: 440,
          kicker: "APPROACH",
          heading: "Design the primitives, then the roles",
          body: "First, every action per role went into a matrix — entity × action × role. That matrix became the navigation, the permission model and the dialog inventory. Then the primitives were built once: adaptive side nav, KPI card with delta, data table with an Actions dropdown, a filter drawer per entity, a confirmation dialog, a side form. Each role's screens were composed from those; only the profile pages got bespoke layouts.",
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
          kicker: "SOLUTION 1 OF 5",
          title: "One shell, three roles",
          outcome:
            "Every user lands on a dashboard with the same anatomy — KPI strip with month-over-month delta, a trend chart with time filters, one distribution or list widget. The side nav shows only that role's entities.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:154266", "Super Admin dashboard, Business dashboard, Referrer dashboard", 1200, 328, { bare: true, radius: 16 }),
            ]),
            row([
              shot("24:155381", "Navigation — Super Admin, Navigation — Business, Navigation — Referrer, Filter drawer — open", 1199.7, 568.3, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "Same card language everywhere — a Super Admin looking at a business's numbers and the business looking at its own see the same shapes.",
            "Profile pages for business, referrer and customer share one template: cover, avatar, KPI strip, trend.",
            "The navigation is one component; each role sees a subset of the same item list.",
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
          kicker: "SOLUTION 2 OF 5",
          title: "Lifecycle as tabs, consequences as dialogs",
          outcome:
            "Requested / Registered / Disapproved is one list with three tabs — approvals happen in place, not in a separate queue.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:155693", "Businesses — registered", 588, 418.13),
              shot("24:155915", "Business profile", 588, 415.27),
            ]),
            row([
              shot("24:156815", "Referrer profile", 780, 554.67),
              shot("24:157279", "Accept referrer confirmation, Disapprove confirmation, Block business confirmation", 460, 652.7, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "Every irreversible action gets a dialog that states the consequence in one sentence — 'Once removed, it cannot be reactivated but you will always have the statistics and commission.'",
            "Deactivate and delete are always visually distinct: one reversible, one red.",
            "Blocking explains what it restricts before asking for confirmation.",
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
          kicker: "SOLUTION 3 OF 5",
          title: "Permissions people can read",
          outcome:
            "The roles list shows permission summaries inline; creating a role groups permissions by entity, so a 'Finance Manager' is three checkboxes, not thirty.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:157325", "Super Admin roles", 780, 554.67),
              shot("24:157429", "Create role", 452, 558.67, { bare: true, radius: 16 }),
            ]),
            row([
              shot("24:157512", "Member roles, Edit member, Permissions popover, Remove confirmation", 1200, 452.7, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "Permissions grouped by entity — Team, Business, Customers — with the actions that role can take on each.",
            "The same roles component serves Super Admin employees and Business teams.",
            "Permission viewer is a lightweight popover, not a page.",
          ],
        },
      ],
    },
    {
      name: "Solution 4",
      blocks: [
        {
          type: "solutionHeader",
          leftWidth: 440,
          kicker: "SOLUTION 4 OF 5",
          title: "Programs & promotions: the money mechanic",
          outcome:
            "A program is created in one small form — name, discount, commission, description, end date — and gets its own dashboard with sales, referrers, referrals and commission.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:157687", "Business programs", 588, 418.13),
              shot("24:157800", "Business program dashboard", 588, 418.13),
            ]),
            row([
              shot("24:158005", "Super Admin promotions", 780, 554.67),
              shot("24:158115", "Create program, Disable promotion", 460, 628, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "Discount and commission each toggle between percentage and fixed — the two real-world contract types.",
            "Super Admin's mass promotions reuse the same form plus a display image.",
            "Program status is a first-class column; deactivating is reversible where deleting isn't.",
          ],
        },
      ],
    },
    {
      name: "Solution 5",
      blocks: [
        {
          type: "solutionHeader",
          leftWidth: 440,
          kicker: "SOLUTION 5 OF 5",
          title: "Commission from three sides",
          outcome:
            "The same money is shown to each role in the direction it flows: platform commission collected, business payouts owed, referrer earnings paid vs pending.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:158169", "Commission — Super Admin, Business commissions, Commission — Referrer", 1200, 314, { bare: true, radius: 16 }),
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
            "Business pays referrers all at once or one at a time; each payment produces a receipt.",
            "Referrers see paid vs pending as tabs, with withdraw as the only primary action.",
            "One payment-details receipt and one transaction history give every side the same record.",
          ],
        },
      ],
    },
    {
      name: "Supporting surfaces",
      blocks: [
        {
          type: "solutionHeader",
          leftWidth: 440,
          kicker: "SUPPORTING SURFACES",
          title: "Customers, referring, categories",
          outcome:
            "Customer profiles with redeem rate and repeaters; the referrer's refer-a-friend and invite flows; star-referrer recognition; category management; brand settings.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:158769", "Customer profile, Referrer — partnered business, Super Admin categories", 1200, 314, { bare: true, radius: 16 }),
            ]),
            row([
              shot("24:159750", "Refer a friend, Invite referrer, Star referrer", 1200, 413.33, { bare: true, radius: 16 }),
            ]),
          ],
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "~120", label: "screens across three roles from one component set — new screens composed, not designed" },
      { value: "1", label: "dialog pattern and one table pattern behind every destructive action and every list" },
      { value: "3", label: "roles, one navigation component, one profile template" },
      { value: "Suite", label: "a permission model designed in, not bolted on" },
    ],
  },
  reflection:
    "The visual language is louder than I'd choose today — bright blues, heavy headings. I'd keep the system and calm the surface. And I'd design the referrer's mobile experience first; the admin was the wrong place to start for that role.",
  next: { slug: "goaler", name: "Goaler" },
  footerNote: "Product Designer · Case study 03 of 04",
};
