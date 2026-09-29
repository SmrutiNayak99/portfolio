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
          body: "Local leagues and pickup tournaments. Four roles, four settings: a player on the couch checking invites, an admin fielding eleven people and collecting money, an organizer running a bracket across venues, a referee on a sunlit pitch. Registration ends with 'Select your role', the moment the app forks.",
        },
        {
          type: "media",
          caption: "ONBOARDING → ROLE SELECTION",
          rows: [
            row([
              phone("24:172705", "Splash1", 180, 390),
              phone("24:173363", "Splash2", 180, 390),
              phone("24:173538", "LogIn", 180, 390),
              phone("24:173565", "Register1", 180, 390),
              phone("24:173580", "Register4", 180, 390),
              phone("24:173598", "MailVerification", 180, 390),
            ]),
          ],
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              kicker: "PROBLEM",
              heading: "Four jobs, one pitch",
              body: "One match, four very different views.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                { title: "Scattered coordination", body: "Invites in chat, payments in a wallet app, scores in someone's head." },
                { title: "Shared objects, different homes", body: "Four home screens, one set of match, player and venue objects." },
                { title: "A hostile context", body: "The referee is outdoors, one-handed, on the clock. The opposite of the other three." },
                { title: "Money changes hands", body: "Match, tournament and referee fees all have to be trustworthy." },
              ],
            },
          ],
        },
        {
          type: "split",
          kicker: "MY ROLE",
          heading: "End to end",
          leftWidth: 440,
          body: "Role research, per-role journey maps, IA, the component system, ~190 screens and per-role onboarding questionnaires. Worked with engineering through full implementation.",
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
          heading: "Shared objects, role-specific shells",
          leftWidth: 440,
          body: "Objects first: Match, Tournament, Team, Player, Venue, Referee, one detail screen each, reused by every role. Each role got its own home, nav and accent colour. Both wizards share one stepper. The referee became a product inside the app: dark theme, big targets, live control first.",
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
      name: "Solution 1: Player",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 1 OF 4 · PLAYER",
          title: "Show up, play, remember it",
          leftWidth: 440,
          outcome:
            "Home answers 'when's my next match, how am I doing'. Invite, pay, done in three screens. After: a two-step rating, profile stats, a leaderboard and a highlight reel.",
        },
        {
          type: "media",
          rows: [
            row([
              phone("24:173670", "Home/Player", 282, 611),
              phone("24:174183", "Scheduled Matches", 282, 611),
              phone("24:174246", "Match Invite Details", 282, 611),
              phone("24:174311", "Match Details", 282, 611),
            ]),
            row([
              phone("24:174485", "Rate The Match 3", 282, 611),
              phone("24:174529", "Player Profile", 282, 611),
              phone("24:174692", "Leaderboard", 282, 611),
              phone("24:174751", "ReelPublic", 282, 611),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "Analytics on the home screen.", why: "Not buried behind the profile." },
            { text: "Invite, payment, confirmation as one flow.", why: "One visual language, no hand-offs." },
            { text: "Two-step rating: the match, then the people.", why: "Feedback stays specific." },
            { text: "Reels as the social layer.", why: "Public, team or private." },
          ],
        },
      ],
    },
    {
      name: "Solution 2: Team Admin",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 2 OF 4 · TEAM ADMIN",
          title: "Field a team in seven steps",
          leftWidth: 440,
          outcome:
            "Roster management (add, import, invite link) and a Create Game wizard ending in a shareable overview and a 'Game created' confirmation.",
        },
        {
          type: "media",
          caption: "CREATE GAME WIZARD · 5 OF 7 STEPS",
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
          type: "media",
          rows: [
            row([
              phone("24:175019", "Home/TeamAdmin", 282, 611),
              phone("24:175480", "MyPlayers", 282, 611),
              phone("24:175542", "ImportPlayers", 282, 611),
              phone("24:175560", "Tournament Invite Details", 282, 611),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "One decision per screen, fixed progress indicator.", why: "Each step survives an interruption." },
            { text: "Payment options inside the flow.", why: "Not a separate module." },
            { text: "Import players from contacts or a file.", why: "The list already exists." },
            { text: "Same wizard shell for tournaments.", why: "Learn it once." },
          ],
        },
      ],
    },
    {
      name: "Solution 3: Organizer",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 3 OF 4 · ORGANIZER",
          title: "Tournaments, venues, referees",
          leftWidth: 440,
          outcome:
            "Create Tournament reuses the wizard. Details carry a points table. Venue and referee directories let you staff a bracket from a phone.",
        },
        {
          type: "media",
          caption: "CREATE TOURNAMENT WIZARD · 5 OF 9 STEPS",
          rows: [
            row([
              phone("24:175663", "Create Tournament02", 220, 477),
              phone("24:175686", "Create Tournament04", 220, 477),
              phone("24:175703", "Create Tournament05", 220, 477),
              phone("24:175806", "Create Tournament07", 220, 477),
              phone("24:175821", "Create Tournament09", 220, 477),
            ]),
          ],
        },
        {
          type: "media",
          rows: [
            row([
              phone("24:175829", "Home/Organizer", 282, 611),
              phone("24:176288", "Tournament Details", 282, 611),
              phone("24:176546", "Venues", 282, 611),
              phone("24:176612", "Referees", 282, 611),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "Points table inside tournament details.", why: "Not a separate report." },
            { text: "Venues show facilities, pitch type and a photo.", why: "What organizers actually check." },
            { text: "Referees browsable by rating and availability.", why: "Invite in one tap." },
          ],
        },
      ],
    },
    {
      name: "Solution 4: Referee",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 4 OF 4 · REFEREE",
          title: "A dark, live-first tool",
          leftWidth: 440,
          outcome:
            "Live match control (timer, score, cards, attendance) plus pre- and post-game tasks with photo capture. Dark theme for glare, primary actions in thumb reach.",
        },
        {
          type: "media",
          rows: [
            row([
              phone("24:176710", "Home/Referee", 282, 611),
              phone("24:176980", "All Invites", 282, 611),
              phone("24:177077", "Match Overview", 282, 611),
              phone("24:177143", "Live Match", 282, 611),
            ]),
            row([
              phone("24:177241", "Tasks With Player", 282, 611),
              phone("24:177306", "Referee Task 2", 282, 611),
              phone("24:177368", "Tasks 6", 282, 611),
              phone("24:177534", "Profile", 282, 611),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "Timer and score on top, four key actions in a fixed bottom row.", why: "No scrolling mid-match." },
            { text: "Invite responses with consequence copy, payment status visible.", why: "The referee knows what they're agreeing to." },
            { text: "Pre- and post-game task lists.", why: "Nothing forgotten between matches." },
            { text: "Dark theme for the referee only.", why: "Built for glare, not for style." },
          ],
        },
      ],
    },
    {
      name: "System",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SYSTEM",
          title: "What makes four roles one app",
          leftWidth: 440,
          outcome:
            "Role-coloured menus, one filter component per entity, per-role onboarding questionnaires, shared success and notification patterns.",
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
            row([
              phone("24:179424", "FilterV4", 282, 424),
              phone("24:179426", "Questionnaire 8", 282, 611),
              phone("24:179462", "Questionnaire Success", 282, 611),
              phone("24:179509", "NotificationsOrganizer", 282, 611),
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
      { value: "4", label: "roles in one app. Coordination moves out of group chats" },
      { value: "1", label: "stepper behind both creation wizards" },
      { value: "1", label: "referee tool designed for the pitch, not the couch" },
    ],
  },
  reflection: "The referee flow is what I'm proudest of and tested least. I'd put it in a real referee's hands first.",
  next: { name: "Back to Home", label: "DONE READING", href: "/" },
  footerNote: "Product Designer · Case study 04 of 04",
};
