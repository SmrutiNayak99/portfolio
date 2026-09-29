import type { CaseStudy } from "../types";
import type { ShotRef } from "@/components/Shot";
import { row, shot } from "./helpers";

// Source: Figma "Goaler — Case Study" (24:172054) + Tablet (24:218504) + Mobile (24:226074).
// Only page metadata was available for this study; styles are mapped onto the CaseNotes/Referral system.

/** iOS screen: rounded corners scaled from 24px at the 282px phone width. */
const phone = (id: string, label: string, w: number, h: number, opts: Partial<ShotRef> = {}) =>
  shot(id, label, w, h, { radius: Math.round((24 * w) / 282), ...opts });

export const goaler: CaseStudy = {
  slug: "goaler",
  name: "Goaler",
  metaTitle: "Goaler: One football app for the four people who make a match happen",
  metaDescription:
    "Amateur football runs on WhatsApp groups and spreadsheets. Goaler gives the player, team admin, organizer and referee each their own experience inside one app, built on one object model.",
  sections: [
    {
      name: "Summary",
      pad: "hero",
      gap: 64,
      blocks: [
        {
          type: "hero",
          kicker: "CASE STUDY 04 · GOALER · IOS APP",
          title: "One football app for the four people who make a match happen",
          lede: "Amateur football runs on group chats. Goaler gives four roles their own app, on one shared model.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Sole product designer" },
            { label: "SCOPE", value: "Onboarding + Player, Team Admin, Organizer, Referee" },
            { label: "TIMELINE", value: "2 months · 2024" },
            { label: "CONTEXT", value: "0→1 client project" },
          ],
        },
        { type: "heroPanel", image: shot("24:172075", "Goaler player home and live match", 1200, 887.33) },
      ],
    },
    {
      name: "Intro",
      pad: "intro",
      blocks: [
        {
          type: "statement",
          kicker: "WHY THIS ONE",
          text: "Four people share one match. One of them is on a pitch in sunlight, phone in one hand. One consistent system still had to bend to that.",
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
          heading: "Who it's for",
          leftWidth: 440,
          body: "Local leagues and pickup tournaments. Registration ends with 'Select your role', the moment the app forks.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              kicker: "PROBLEM",
              heading: "Four jobs, one pitch",
              leftWidth: 440,
              body: "One match, four very different views.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                { title: "Scattered coordination", body: "Invites in chat, payments elsewhere, scores in someone's head." },
                { title: "Shared objects", body: "Four homes, one match, player and venue." },
                { title: "A hostile context", body: "The referee is outdoors, one-handed, on the clock." },
                { title: "Money changes hands", body: "Every fee has to be trustworthy." },
              ],
            },
          ],
        },
        {
          type: "split",
          kicker: "APPROACH",
          heading: "Shared objects, role-specific shells",
          leftWidth: 440,
          body: "Match, Tournament, Team, Player, Venue, Referee: one detail screen each, reused by every role. Each role got its own home, nav and colour.",
        },
        {
          type: "chips",
          indent: "right",
          items: [
            { label: "Player · green", tone: "player" },
            { label: "Team Admin · light blue", tone: "admin" },
            { label: "Organizer · royal blue", tone: "organizer" },
            { label: "Referee · dark", tone: "referee" },
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
          title: "Four homes, one app",
          leftWidth: 440,
          outcome: "Each role opens on its own home, built from the same components and objects.",
        },
        {
          type: "media",
          rows: [
            row([
              phone("24:177720", "Home/Player", 282, 611),
              phone("24:178233", "Home/Organizer", 282, 611),
              phone("24:178692", "Home/TeamAdmin", 282, 611),
              phone("24:179153", "Home/Referee", 282, 611),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "One detail screen per object.", why: "No copies to drift apart." },
            { text: "An accent colour per role.", why: "You know whose app you're in." },
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
          title: "One wizard, two flows",
          leftWidth: 440,
          outcome: "Create Game and Create Tournament share one stepper. One decision per screen.",
        },
        {
          type: "media",
          caption: "CREATE GAME WIZARD",
          rows: [
            row([
              phone("24:174810", "Create Game01", 220, 477),
              phone("24:174834", "Create Game02", 220, 477),
              phone("24:174863", "Create Game04", 220, 477),
              phone("24:174976", "Create Game05", 220, 477),
              phone("24:175011", "Create Game08", 220, 477),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "One decision per screen.", why: "Each step survives an interruption." },
            { text: "Import players from contacts or a file.", why: "The list already exists." },
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
          title: "The referee: a dark, live-first tool",
          leftWidth: 440,
          outcome: "Timer, score, cards and attendance, with every primary action in thumb reach.",
        },
        {
          type: "media",
          rows: [
            row([
              phone("24:176710", "Home/Referee", 282, 611),
              phone("24:177077", "Match Overview", 282, 611),
              phone("24:177143", "Live Match", 282, 611),
              phone("24:177241", "Tasks With Player", 282, 611),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "Dark theme for the referee only.", why: "Built for glare, not for style." },
            { text: "The four key actions in a fixed bottom row.", why: "No scrolling mid-match." },
            { text: "Pre- and post-game task lists.", why: "Nothing forgotten after the whistle." },
          ],
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "4", label: "roles in one app. Coordination moves out of group chats" },
      { value: "1", label: "stepper behind both creation wizards" },
      { value: "1", label: "referee tool designed for the pitch, not the couch" },
    ],
  },
  reflection: "The referee flow is what I'm proudest of and tested least. I'd put it in a real referee's hands first.",
  next: { name: "Back to Home", label: "DONE READING", href: "/" },
  footerNote: "Product Designer · Case study 04 of 04",
};
