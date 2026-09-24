import type { CaseStudy } from "../types";
import { row, shot } from "./helpers";

// Source: Figma "CaseNotes — Case Study" (24:146673) + Tablet (24:233644) + Mobile (24:239858).
export const casenotes: CaseStudy = {
  slug: "casenotes",
  name: "CaseNotes",
  metaTitle: "CaseNotes — Turning a meeting recorder into a case-ready record",
  metaDescription:
    "I audited a shipped AI meeting-notes product for law firms, logged 60+ UX issues, and redesigned every core surface so attorneys can trust and act on what the AI produces.",
  sections: [
    {
      name: "Summary",
      pad: "hero",
      gap: 64,
      blocks: [
        {
          type: "hero",
          kicker: "CASE STUDY 01 · CASENOTES · OMNISAI",
          title: "Turning a meeting recorder into a case-ready record",
          lede: "I audited a shipped AI meeting-notes product for law firms, logged 60+ UX issues, and redesigned every core surface so attorneys can trust and act on what the AI produces.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Design Lead — audit, design, shipped frontend" },
            { label: "SCOPE", value: "Meeting details, dashboard, scheduling, lists, upload, templates, settings" },
            { label: "TIMELINE", value: "1 week" },
            { label: "TEAM", value: "1 Designer(me), 2 Engineers" },
          ],
        },
        { type: "heroPanel", image: shot("24:146694", "CaseNotes meeting summary", 1200, 824) },
      ],
    },
    {
      name: "Intro",
      pad: "intro",
      blocks: [
        {
          type: "statement",
          kicker: "WHY THIS ONE",
          text: "CaseNotes was the first product I inherited rather than started. It worked — but every screen had small frictions that added up, and in legal, small frictions become distrust. I wanted to see how far a rigorous audit, not a rebrand, could move a product.",
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
          kicker: "CONTEXT",
          heading: "What CaseNotes is",
          body: "Part of OmnisAI's suite for law firms. A bot joins Zoom, Meet or Teams calls, records, transcribes and produces AI summaries, action items and highlights. Attorneys also upload recordings and manage the prompt templates that shape the AI output. Users are attorneys, paralegals and firm admins — and anything the AI says must be verifiable and editable. Accuracy is a liability issue, not a nicety.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              kicker: "PROBLEM",
              heading: "Functional, but not trusted",
              body: "The audit surfaced 60+ issues. Almost all of them fell into three patterns.",
            },
            {
              type: "cards",
              items: [
                {
                  title: "Inconsistent primitives",
                  body: "Modals, buttons, focus states, date formats and copy differed screen to screen. Stray strokes and placeholder labels were shipping to production.",
                },
                {
                  title: "Unclear affordances",
                  body: "Cards that both navigated and edited. Ambiguous toggles. Video controls, tab order and redundant tabs in the wrong places.",
                },
                {
                  title: "Broken mental models",
                  body: "Prompt templates weren't reliably mapped to meetings. Search returned one undifferentiated list. There was no settings surface at all.",
                },
              ],
            },
          ],
        },
        {
          type: "split",
          kicker: "MY ROLE",
          heading: "Owner of the audit and every screen after it",
          body: "Ran the full UI/UX audit against the live product, writing each finding with its fix, rationale and the design-system rule it should follow. Redesigned all core surfaces. Planned the new Settings area — plan first, stakeholder sign-off, then design. Shipped a large share of the frontend changes myself, and worked with engineering on the prompt-mapping data problem before designing the Templates flow.",
        },
      ],
    },
    {
      name: "Approach",
      gap: 40,
      blocks: [
        {
          type: "split",
          kicker: "APPROACH",
          heading: "Audit → cluster → fix the system, not the symptom",
          body: "I audited the shipped product screen by screen, then clustered the 60+ items into five workstreams. Wherever possible the fix went in at the component level — one modal spec (600px, right-aligned actions, explicit dismiss) closed dozens of items at once. Fireflies and Otter were references for search and sidebar patterns, not templates. Ship, then re-audit.",
        },
        {
          type: "chips",
          indent: 280,
          items: [
            { label: "Meeting details" },
            { label: "Dashboard & scheduling" },
            { label: "Lists, search & upload" },
            { label: "Templates" },
            { label: "Settings" },
          ],
        },
      ],
    },
    {
      name: "Solution 1",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 1 OF 5",
          title: "Meeting details: one page you can trust",
          outcome:
            "Summary, transcript, action items and version history now live in one consistent layout with a persistent header and media player.",
        },
        {
          type: "media",
          rows: [
            row([shot("24:147131", "Meeting details — summary", 1200, 880)]),
            row([
              shot("24:147496", "Meeting details — transcripts", 588, 440),
              shot("24:147814", "Meeting details — action items", 588, 440),
            ]),
            row(
              [
                shot("24:148138", "Transcript version history", 780, 580),
                shot("24:148636", "Regenerate summary modal, Transcript filter", 460, 614.7, { bare: true, radius: 16 }),
              ],
              { align: "center" },
            ),
          ],
        },
        {
          type: "decisions",
          items: [
            "Transcript became its own route with a matching header instead of a cramped tab.",
            "Regenerate summary got an explicit modal with a 'what to change' field — no silent overwrites.",
            "Action items show owner, not date; redundant Helpful/All and Complete tabs were removed.",
            "Version history lets users see what the AI changed and revert — the trust feature.",
            "Media player extends to the sidebar edge; controls centred; tooltips on every button.",
          ],
        },
      ],
    },
    {
      name: "Solution 2",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 2 OF 5",
          title: "Dashboard & scheduling: fewer decisions on the way in",
          outcome:
            "A dashboard that answers 'what happened, what's next, what needs me' — and a scheduling form that stopped generating support noise.",
        },
        {
          type: "media",
          rows: [
            row([shot("24:148738", "Dashboard", 1200, 750)]),
            row([
              shot("24:149320", "Dashboard with meeting states", 780, 487.5),
              shot("24:149761", "Reschedule meeting modal", 395.7, 577, { bare: true, radius: 16 }),
            ]),
            row([
              shot("24:149884", "Meeting overview sidebar, Add CaseNotes bot, Bot dropdown, Menu options", 1200, 536, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "Metrics cards defined as four KPIs instead of a decorative row.",
            "Meeting card redesigned for every state — scheduled, live, done, cancelled, no-bot — with a tooltip explaining why a bot didn't join.",
            "Split affordances: click the card to open, click the name to rename.",
            "Right sidebar follows an Otter-style pattern: bot invite, upcoming meetings, AI chat grouped by day.",
            "Schedule modal: side-by-side times, aligned labels, consistent focus and error states, integration helper text with deep link, explicit toggle copy, no accidental dismiss.",
          ],
        },
      ],
    },
    {
      name: "Solution 3",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 3 OF 5",
          title: "Lists, search & upload: dense without being noisy",
          outcome: "Meetings are scannable by day, findable by type, and uploads never block the user.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:150115", "Meeting listing", 588, 375.16),
              shot("24:150566", "Meeting uploaded modal", 588, 330.75),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "Date grouping — Today, Yesterday, weekday — with counts; date-only in lists, time only in detail views.",
            "Status tabs plus filter chips replace one long list.",
            "Search results categorised into meetings, transcripts and action items with keyword highlighting.",
            "'Uploaded Files' renamed 'Uploaded Recording'; the upload success modal explains background processing and lets you keep working.",
          ],
        },
      ],
    },
    {
      name: "Solution 4",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 4 OF 5",
          title: "Templates: making prompt management legible",
          outcome: "Attorneys can see which template shaped a summary, create their own, and can't break the firm's global ones.",
        },
        {
          type: "media",
          rows: [
            row([shot("24:151078", "Templates", 1200, 730)]),
            row([
              shot("24:151315", "Create new template, Create new template modal, Delete template dialog", 1200, 300, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "Global vs custom split with a visible 'Global' tag and system badge; edit and delete hidden on globals — permission-based UI.",
            "Creation flow as a guided page with sections to toggle, plus a proper empty state.",
            "Destructive actions get a real dialog.",
            "Held the design until engineering fixed the prompt → meeting mapping. Designing on top of broken data would have hidden the bug.",
          ],
        },
      ],
    },
    {
      name: "Solution 5",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 5 OF 5",
          title: "Settings: a 0→1 built plan-first",
          outcome:
            "A settings area that didn't exist before — general, notifications, integrations and privacy — shipped after a written plan was approved.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:152015", "Settings — general", 588, 349.13),
              shot("24:152163", "Settings — privacy", 588, 358.93),
            ]),
            row([
              shot("24:152411", "Settings — integrations", 780, 484.66),
              shot("24:152567", "Keyboard shortcuts", 452, 656, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "Wrote the plan first — information architecture and what each setting controls — reviewed it with the lead, then designed.",
            "Privacy tab surfaces recording consent and data controls, which matters in a legal product.",
            "Keyboard shortcuts as a discoverable sheet rather than a hidden list.",
          ],
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "60+", label: "audit items closed across five work streams" },
      { value: "1", label: "modal spec, one date format, one card system — visible consistency on every surface" },
      { value: "2", label: "features that didn't exist now do: transcript version history and settings" },
      { value: "1", label: "data bug — prompt mapping — surfaced and fixed before design locked it in" },
      {
        value: "Suite",
        label: "design-system rules from this work carried into the shared component library across the OmnisAI suite",
      },
    ],
  },
  reflection:
    "I'd push for usage data before the audit so prioritisation leaned less on judgement. And I'd write the modal spec on day one — it closed more items than any single screen.",
  next: { slug: "referral-program", name: "Referral Program" },
  footerNote: "Design Lead, OmnisAI · Case study 01 of 04",
};
