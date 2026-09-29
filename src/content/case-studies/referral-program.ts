import type { CaseStudy } from "../types";
import { row, shot } from "./helpers";

// Source: Figma "Referral Program — Case Study" (24:153272) + Tablet (24:185148) + Mobile (24:191794).
export const referralProgram: CaseStudy = {
  slug: "referral-program",
  name: "Referral Program",
  metaTitle: "Referral Program: One platform, three businesses, one design system",
  metaDescription:
    "How I designed the admin web app for a referral platform used by three different roles: the platform owner, the businesses running referral programs, and the referrers who share them. All three portals are built from one shared set of components.",
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
          lede: "FlingFly lets businesses reward people for referring new customers. I designed the admin web app for the three groups who use it, the platform owner, the businesses and the referrers, as one product built from one shared set of components.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Sole product designer" },
            { label: "SCOPE", value: "Super Admin, Business Admin and Referrer portals" },
            { label: "TIMELINE", value: "2 months · 2023" },
            { label: "CONTEXT", value: "Client project, built from scratch (0→1)" },
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
          text: "This was the largest system I had designed on my own. The hard part was not any single screen. It was making one product feel right for three very different kinds of users, without designing everything three times.",
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
          body: "Businesses use the platform to run referral programs. A referrer shares a business with a friend, the friend gets a discount when they buy, and the business pays the referrer a commission for bringing them in. The platform takes a cut of each sale. Three roles manage this: the Super Admin who runs the platform, the Business Admin who runs a business's programs, and the Referrer who shares them, and each needs their own admin portal.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              leftWidth: 440,
              kicker: "PROBLEM",
              heading: "Three products, or one?",
              body: "Each role needed its own portal with its own screens and data. Designing three separate products would have been slow and inconsistent, so I set out to build one system. Four constraints shaped how it had to work.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                { title: "Three times the work", body: "Each role needed ~40 screens. Designed separately, that would have meant building and maintaining three different products that slowly drift apart." },
                { title: "Money flows in different directions", body: "The platform collects commission, businesses owe it, and referrers receive it. The same word means something different to each role, so each screen had to show it their way." },
                { title: "Dozens of actions that can't be undone", body: "Admins approve, block, disable and delete businesses and people all the time. These actions had to look and behave the same everywhere so nobody makes a mistake." },
                { title: "Real team permissions", body: "Different staff need different access. For example, finance staff should be able to see payouts but not change a business's referral programs." },
              ],
            },
          ],
        },
        {
          type: "split",
          leftWidth: 440,
          kicker: "MY ROLE",
          heading: "I designed it end to end",
          body: "I was the only designer on the project. I mapped each role and their main journeys, planned what each portal should contain and how it is organised, built the shared component system, and designed all ~120 screens.",
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
          heading: "Design the building blocks first, then the roles",
          body: "I started with one table that listed every item in the system (businesses, referrers, customers, programs), every action you can take on it, and which roles can take it. That single table told me what goes in each role's navigation, what permissions exist, and which confirmation dialogs I needed. I then designed the basic building blocks once and assembled every role's screens from them, with only profile pages getting their own custom layouts.",
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
          outcome: "Every role gets a dashboard with the same layout: a row of key numbers showing the change from last month, a trend chart, and one list. The navigation is also shared, but each role only sees the sections that belong to them.",
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
            { text: "I used the same style of number card on every dashboard and profile.", why: "Businesses, referrers and customers are all looking at the same money from different angles. Keeping the same number in the same kind of card means nobody has to relearn how to read a new screen." },
            { text: "I designed one profile page template that works for businesses, referrers and customers.", why: "Every profile shares a cover, avatar, KPIs and a trend chart. Learn to read one and you can read them all, and there's one template to maintain instead of three." },
            { text: "I built one navigation menu and showed each role only the parts they are allowed to use.", why: "A single navigation means each role simply sees a subset of the same menu. Because it is built once, the three versions can't drift apart as the product grows." },
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
          title: "Approvals in tabs, clear warnings before big actions",
          outcome: "Businesses and referrers apply to join, then get approved or turned down. I put all of them in one list with three tabs: Requested, Registered and Disapproved. Admins approve or reject right there in the list, instead of going to a separate review queue.",
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
            { text: "I gave every action that can't be undone a confirmation dialog with one sentence explaining what will happen.", why: "When an admin is about to do something permanent, one plain sentence tells them exactly what will happen. That way they understand the result before they click, not after." },
            { text: "I styled deactivate and delete differently, keeping deactivate neutral and making delete red.", why: "Deactivating something can be undone, but deleting it can't. Giving them clearly different styles means an admin working quickly won't confuse the two." },
            { text: "I made the block confirmation list exactly what the person will lose access to.", why: "Blocking a business or person cuts off specific parts of the platform. Showing that list before the admin confirms means there are no surprises for either side afterwards." },
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
          outcome: "Admins can create team roles and decide what each role is allowed to do. Each role shows a short summary of its permissions right in the list. Permissions are grouped by area, so setting up a role like 'Finance Manager' takes three checkboxes, not thirty.",
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
            { text: "I grouped permissions by area, such as Team, Business and Customers.", why: "Admins think in questions like 'what can this person do with customers?' rather than scanning a long list of switches. Grouping permissions by area answers that question directly." },
            { text: "I designed one roles component that works for both the platform's staff and each business's own team.", why: "The Super Admin's employees and every business's team both need roles and permissions. Using one component for both meant it was designed and built once, and it works the same way everywhere." },
            { text: "I showed a role's permissions in a small popover instead of on a separate page.", why: "Admins usually check what a role allows while they are assigning it to someone. A popover shows the details in place, so they never lose the form they were filling in." },
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
          title: "Programs and promotions: how the rewards are set",
          outcome: "A business creates a referral program by filling in one short form: a name, the customer's discount, the referrer's commission, a description and an end date. Each program then gets its own dashboard showing sales, referrers, referrals and commission.",
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
            { text: "I added a toggle so the discount and commission can be set as either a percentage or a fixed amount.", why: "Businesses reward people either with a percentage or a fixed amount, which are the two deal types they actually use. One toggle handles both, so the form stays short." },
            { text: "I reused the program form for Super Admin promotions and added one image field.", why: "The Super Admin also runs platform promotions. Using the same form businesses already know, with one extra field for an image, meant there was nothing new to learn on either side." },
            { text: "I gave status its own column in the list and made deactivating a program reversible.", why: "A dedicated status column lets admins see what is live at a glance. Deactivating only pauses a promotion and can be undone, while deleting can't, so the two actions are kept clearly apart." },
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
          title: "Commission, seen from all three sides",
          outcome: "Commission is the same money, but each role sees it differently. The Super Admin sees what the platform has collected, a business sees what it owes its referrers, and a referrer sees what has been paid and what is still pending.",
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
            { text: "I let businesses pay commission to all their referrers at once or to one referrer at a time.", why: "Some businesses settle up with everyone in one go, while others pay as referrals come in. Both options work, and every payment creates a receipt that both sides can check." },
            { text: "I split a referrer's earnings into Paid and Pending tabs and made Withdraw the one main button.", why: "Referrers mostly want to know what they have been paid and what is still on its way. Withdrawing their money is the main reason they open the app, so it is the one button that stands out." },
            { text: "I designed one receipt and one payment history that every role sees.", why: "The business, the referrer and the Super Admin all see the same receipt and the same history. If there is ever a disagreement about a payment, everyone starts from the same record." },
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
          title: "Customers, referrals and categories",
          outcome: "I also designed the screens around the core flows. Customer profiles show how often a customer redeems offers and whether they come back. There are flows for referring a friend and inviting new referrers, a way to recognise star referrers, and settings for business categories and branding.",
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
      { value: "3", label: "roles served by one product. New screens are assembled from existing components instead of being designed from scratch." },
      { value: "1", label: "confirmation dialog pattern that explains the result of every permanent action before the admin confirms it." },
      { value: "1", label: "payment record that the platform, the business and the referrer all see, so everyone works from the same numbers." },
    ],
  },
  reflection: "Looking back, the visual style is busier than I would choose today. I would keep the underlying system as it is but make the visuals calmer. I would also design the referrer's experience for mobile first.",
  next: { slug: "goaler", name: "Goaler" },
  footerNote: "Product Designer · Case study 03 of 04",
};
