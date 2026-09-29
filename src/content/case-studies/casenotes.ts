import type { CaseStudy } from "../types";
import { panel, row, shot } from "./helpers";

// Source: Figma "CaseNotes — Case Study" (24:146673) + Tablet (24:233644) + Mobile (24:239858).
export const casenotes: CaseStudy = {
  slug: "casenotes",
  name: "CaseNotes",
  metaTitle: "CaseNotes: Turning a meeting recorder into a case-ready record",
  metaDescription:
    "I audited a shipped AI meeting-notes product for law firms and fixed it at the system level, so attorneys can see, steer and revert what the AI produces.",
  sections: [
    {
      name: "Summary",
      pad: "hero",
      gap: 64,
      blocks: [
        {
          type: "hero",
          kicker: "CASE STUDY 02 · CASENOTES · OMNISAI",
          title: "Turning a meeting recorder into a case-ready record",
          lede: "It worked. Attorneys didn't trust it. I audited it and made every AI change visible and reversible.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Audit, design, frontend" },
            { label: "SCOPE", value: "Meeting details, dashboard, templates, settings" },
            { label: "TIMELINE", value: "1 week" },
            { label: "TEAM", value: "1 Designer (me), 2 Engineers" },
          ],
        },
        {
          type: "heroPanel",
          compare: {
            before: shot("ba-casenotes-meeting-before", "CaseNotes meeting details, before", 1200, 750),
            after: shot("ba-casenotes-meeting-after", "CaseNotes meeting details, after", 1200, 750),
          },
        },
      ],
    },
    {
      name: "Intro",
      pad: "intro",
      blocks: [
        {
          type: "statement",
          kicker: "WHY THIS ONE",
          text: "The first product I inherited, not started. When I saw it, I knew it had to change: an AI notetaker attorneys couldn't trust. So I audited it and rebuilt it around trust.",
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
          body: "A bot joins Zoom, Meet or Teams, records the call and writes summaries and action items for attorneys. If the AI gets it wrong, that's a liability.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              kicker: "PROBLEM",
              heading: "Functional, but not trusted",
              body: "60+ audit findings. Three patterns.",
            },
            {
              type: "cards",
              items: [
                { title: "Inconsistent primitives", body: "Modals, buttons and dates differed screen to screen." },
                { title: "Unclear affordances", body: "Cards that both navigated and edited. Redundant tabs." },
                { title: "Broken mental models", body: "Templates not mapped to meetings. No settings at all." },
              ],
            },
          ],
        },
        {
          type: "split",
          kicker: "MY ROLE",
          heading: "The audit and every screen after it",
          body: "Audited the live product, redesigned every core surface, planned Settings from scratch, and shipped frontend alongside engineering.",
        },
      ],
    },
    {
      name: "Before and after",
      gap: 40,
      blocks: [
        {
          type: "solutionHeader",
          kicker: "BEFORE → AFTER",
          title: "Fix the system, not the symptom",
          outcome: "Five workstreams, fixed at the component level. One modal spec closed dozens of findings.",
        },
        {
          type: "beforeAfter",
          before: shot("ba-casenotes-dashboard-before", "CaseNotes dashboard, before", 1200, 750),
          after: shot("ba-casenotes-dashboard-after", "CaseNotes dashboard, after", 1200, 750),
          changes: [
            { from: "Vague KPIs", to: "Four KPIs that say what they count" },
            { from: "A paragraph on every meeting card", to: "One scannable row per meeting" },
            { from: "Five tabs on meeting details", to: "Three: Summary, Transcripts, Action items" },
          ],
        },
      ],
    },
    {
      name: "Solution 1",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 1 OF 3",
          title: "Meeting details: AI output you can steer",
          outcome: "See what the AI changed. Ask it to change something. Revert.",
        },
        {
          type: "media",
          rows: [
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
            { text: "Version history with revert.", why: "An invisible AI edit is a liability." },
            { text: "Regenerate asks 'what should change?'", why: "Steer the AI, don't re-roll it." },
            { text: "The transcript gets its own page.", why: "It's the source of truth." },
          ],
        },
      ],
    },
    {
      name: "Solution 2",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 2 OF 3",
          title: "Templates: you decide what the AI writes",
          outcome: "Pick the modules, write your own prompts, see the meeting page update live.",
        },
        {
          type: "media",
          rows: [
            row([shot("cn-tpl-editor", "Create new template: modules, custom insight prompts and live preview", 1200, 805)]),
            row([
              shot("cn-tpl-list", "Templates list with module tags", 392, 239),
              shot("cn-tpl-modal", "Create new template: start blank or from an existing template", 392, 239),
              shot("cn-tpl-empty", "Insight prompts empty state", 392, 210),
            ]),
            row([
              panel(1200, "row", [
                shot("cn-tpl-sort", "Sort by menu", 340, 229, { bare: true }),
                shot("cn-tpl-filter", "Filter panel", 400, 339, { bare: true }),
                shot("cn-tpl-alert", "Leave without saving dialog", 460, 255, { bare: true }),
              ], { gap: 32 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "Fixed the prompt mapping before any UI.", why: "Good UI would have hidden the bug." },
            { text: "A live preview next to the editor.", why: "See the meeting page before you save." },
            { text: "Start from an existing template.", why: "Most firms tweak, few start blank." },
            { text: "Unsaved prompts are never lost silently.", why: "Leaving asks first." },
          ],
        },
      ],
    },
    {
      name: "Solution 3",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 3 OF 3",
          title: "Settings: a 0→1 built plan-first",
          outcome: "General, notifications, integrations and privacy. Plan approved, then designed.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:152015", "Settings, general", 588, 349.13),
              shot("24:152163", "Settings, privacy", 588, 358.93),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "IA written before any pixels.", why: "Cheap on paper, expensive in code." },
            { text: "A Privacy tab for recording consent.", why: "In legal, consent is a feature." },
          ],
        },
      ],
    },
    {
      name: "Shipped in code",
      tone: "white",
      blocks: [
        {
          type: "code",
          kicker: "SHIPPED IN CODE",
          heading: "The rules became a package",
          body: "The audit's rules now live in omnis-common, the design system every OmnisAI app is moving onto. I'm its top contributor: 74 of 197 commits, ~300 across 9 production repos.",
          file: "omnis-common / src/tokens/tokens.ts",
          code: `/**
 * Chi Redesign design tokens (TS mirror of tokens.css).
 */
export const brand = {
  brand: '#3353f8',
  accent: '#7b61ff',
} as const;

export const status = {
  ok: '#1c8a48',
  warn: '#c8901f',
  hot: '#dc2626',
  therapy: '#6d5ce0',
  aiAmber: '#e8a04b',
} as const;`,
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "60+", label: "audit findings closed, most at the component level" },
      { value: "2", label: "new trust features: AI version history and consent-aware privacy" },
      { value: "1", label: "data bug caught before design locked it in" },
    ],
  },
  reflection: "I'd get usage data before the audit, and write the modal spec on day one. It closed more findings than any screen.",
  next: { slug: "referral-program", name: "Referral Program" },
  footerNote: "Product Designer, OmnisAI · Case study 02 of 04",
};
