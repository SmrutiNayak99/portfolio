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
          body: "Businesses run referral programs: a discount for the friend, a commission for the referrer. Referrers share, customers redeem, the platform takes a cut. Super Admin, Business Admin and Referrer each need their own admin.",
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
                { title: "3× the work", body: "~40 screens per role. Designed separately, three products." },
                { title: "Money flows both ways", body: "'Commission' means something different to each role." },
                { title: "Dozens of irreversible actions", body: "Approve, block, disable, delete had to be consistent and unambiguous." },
                { title: "Real permissions", body: "Finance staff can see payouts but not touch programs." },
              ],
            },
          ],
        },
        {
          type: "split",
          leftWidth: 440,
          kicker: "MY ROLE",
          heading: "End to end",
          body: "Role and journey mapping, IA per role, the component system and all ~120 screens.",
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
          body: "One matrix of entity × action × role became the nav, the permission model and the dialog inventory. Primitives were built once; every role composed from them. Only profile pages got bespoke layouts.",
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
          outcome: "Same dashboard anatomy for every role: KPI strip with month-over-month delta, trend chart, one list widget. The nav shows only what that role owns.",
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
            { text: "The same card language everywhere.", why: "Same numbers, same shapes, no translating." },
            { text: "One profile template for business, referrer and customer.", why: "Cover, avatar, KPIs, trend. Learn it once." },
            { text: "One nav; each role sees a subset.", why: "Built once, it can't drift." },
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
          outcome: "Requested, Registered, Disapproved: one list, three tabs. Approvals happen in place, not in a separate queue.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:155693", "Businesses, registered", 588, 418.13),
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
            { text: "One sentence of consequence per irreversible action.", why: "Know before you click." },
            { text: "Deactivate and delete never look alike: one reversible, one red.", why: "Lookalikes get mixed up." },
            { text: "Blocking says what it restricts before confirming.", why: "No surprises after." },
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
          outcome: "Roles show permission summaries inline. Permissions are grouped by entity, so a 'Finance Manager' is three checkboxes, not thirty.",
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
            { text: "Permissions grouped by entity: Team, Business, Customers.", why: "Matches how people think about access." },
            { text: "One roles component for Super Admin employees and Business teams.", why: "Built once, used twice." },
            { text: "The permission viewer is a popover, not a page.", why: "Check it without losing your place." },
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
          outcome: "One small form (name, discount, commission, description, end date) creates a program with its own dashboard: sales, referrers, referrals, commission.",
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
            { text: "Discount and commission toggle between percentage and fixed.", why: "The two real contract types." },
            { text: "Super Admin promotions reuse the same form, plus an image.", why: "No second form to learn." },
            { text: "Status is a first-class column; deactivating is reversible.", why: "Deleting isn't." },
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
          outcome: "The same money, shown the way it flows for each role: collected, owed, or paid vs pending.",
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
            { text: "Businesses pay all referrers at once or one at a time.", why: "Every payment produces a receipt." },
            { text: "Referrers see paid vs pending as tabs; withdraw is the one primary action.", why: "It's why they came." },
            { text: "One receipt, one history, every side.", why: "Disputes start from the same record." },
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
          outcome: "Customer profiles with redeem rate and repeaters, refer-a-friend and invite flows, star-referrer recognition, categories and brand settings.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:158769", "Customer profile, Referrer partnered business, Super Admin categories", 1200, 314, { bare: true, radius: 16 }),
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
      { value: "3", label: "roles, one product. New screens are composed, not designed from scratch" },
      { value: "1", label: "dialog pattern that states every consequence up front" },
      { value: "1", label: "payment record shared by platform, business and referrer" },
    ],
  },
  reflection: "The surface is louder than I'd choose today. I'd keep the system and calm the visuals, and design the referrer's mobile experience first.",
  next: { slug: "goaler", name: "Goaler" },
  footerNote: "Product Designer · Case study 03 of 04",
};
