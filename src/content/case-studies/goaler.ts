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
  metaTitle: "Goaler — One football app for the four people who make a match happen",
  metaDescription:
    "Amateur football runs on WhatsApp groups and spreadsheets. Goaler gives each role — the player who shows up, the admin who fields a team, the organizer who runs the tournament, the referee who controls the game — its own experience inside one app, distinguished by colour and built on a shared component system.",
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
          lede: "Amateur football runs on WhatsApp groups and spreadsheets. Goaler gives each role — the player who shows up, the admin who fields a team, the organizer who runs the tournament, the referee who controls the game — its own experience inside one app, distinguished by colour and built on a shared component system.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Sole product designer — research, flows, UI, design system" },
            { label: "SCOPE", value: "Onboarding + Player, Team Admin, Organizer and Referee · ~190 screens" },
            { label: "TIMELINE", value: "2 months · 2024" },
            { label: "CONTEXT", value: "0→1 Client Project" },
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
          text: "I ran a chess channel for years, so I know how much of amateur sport is logistics nobody enjoys. This was a chance to design for the moments before and after the game, not just the scoreboard.",
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
          body: "Local football leagues and pickup tournaments. Four roles with different jobs and different environments: a player on the couch checking invites, a team admin fielding eleven people and collecting money, an organizer running a bracket across venues, a referee standing on a pitch in sunlight with a phone. Registration ends with 'Select your role' — the moment the app forks.",
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
              body: "The same match, seen from four very different places.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                {
                  title: "Scattered coordination",
                  body: "Invites in chat, payments in a wallet app, scores in someone's head.",
                },
                {
                  title: "Shared objects, different homes",
                  body: "Every role needs its own home screen but the same match, player and venue objects.",
                },
                {
                  title: "A hostile context",
                  body: "The referee is outdoors, one-handed and time-critical — the opposite of the other three.",
                },
                {
                  title: "Money changes hands",
                  body: "Match fees, tournament fees, referee payment — all of it has to be trustworthy.",
                },
              ],
            },
          ],
        },
        {
          type: "split",
          kicker: "MY ROLE",
          heading: "End to end",
          leftWidth: 440,
          body: "Role research, journey maps per role, information architecture, the component system, ~190 screens, and the onboarding questionnaires per role. Handed off and coordinated with the engineers till the complete implementation.",
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
          body: "I modelled the shared objects first — Match, Tournament, Team, Player, Venue, Referee — with one detail screen each, reused by every role. Each role then got its own home, navigation and accent colour so switching context is instant. The two wizards, Create Game and Create Tournament, share one stepper pattern. And the referee was treated as a separate product inside the app: dark theme, big targets, live control first.",
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
      name: "Solution 1 — Player",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 1 OF 4 · PLAYER",
          title: "Show up, play, remember it",
          leftWidth: 440,
          outcome:
            "Home answers 'when's my next match and how am I doing'. Invites go from accept → pay → done in three screens. After the match: a two-step rating, stats on the profile, a leaderboard and a highlight reel.",
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
            "Analytics live on the home screen, not buried behind the profile.",
            "Invite → payment → confirmation is one flow with one visual language.",
            "Rating is two steps — the match, then the people — so feedback is specific.",
            "Reels are the social layer: public, team or private.",
          ],
        },
      ],
    },
    {
      name: "Solution 2 — Team Admin",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 2 OF 4 · TEAM ADMIN",
          title: "Field a team in seven steps",
          leftWidth: 440,
          outcome:
            "Roster management — add, import, invite link — and a Create Game wizard that ends with a shareable overview and a 'Game created' confirmation.",
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
            "One decision per screen in the wizard; the progress indicator stays put.",
            "Payment options inside the flow, not as a separate module.",
            "Import players from contacts or a file — the admin already has the list somewhere.",
            "The same wizard shell is reused for the organizer's tournament flow.",
          ],
        },
      ],
    },
    {
      name: "Solution 3 — Organizer",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 3 OF 4 · ORGANIZER",
          title: "Tournaments, venues, referees",
          leftWidth: 440,
          outcome:
            "Create Tournament reuses the wizard; tournament details carry a points table; venue and referee directories make staffing a bracket possible from a phone.",
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
            "The points table is part of tournament details, not a separate report.",
            "Venues carry facilities, pitch type and a photo — what an organizer actually checks.",
            "Referees are browsable by rating and availability, then invited in one tap.",
          ],
        },
      ],
    },
    {
      name: "Solution 4 — Referee",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 4 OF 4 · REFEREE",
          title: "A dark, live-first tool",
          leftWidth: 440,
          outcome:
            "A live match control panel — timer, score, cards, attendance — plus pre- and post-game tasks with photo capture. Dark theme for outdoor glare; primary actions are always thumb-reachable.",
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
            "Live Match puts the timer and score at the top and the four most-used actions in a fixed bottom row.",
            "Accept and decline invites carry consequence copy; payment status is visible to the referee.",
            "Task lists are structured pre-game and post-game so nothing is forgotten between matches.",
            "Dark theme is the only themed role — a deliberate response to the environment, not a style choice.",
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
            "Role-coloured menus, one filter component per entity, onboarding questionnaires that adapt per role, and shared success and notification patterns.",
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
      { value: "~190", label: "screens across four roles from one object model and one component set" },
      { value: "2", label: "wizards, one stepper pattern" },
      { value: "4", label: "homes, one navigation, one set of detail screens" },
      { value: "1", label: "referee experience designed for the pitch, not the couch" },
    ],
  },
  reflection:
    "The referee flow is the part I'm proudest of and the part I tested least — I'd put it in a real referee's hands on a real pitch before anything else. I'd also cut the questionnaire; role selection plus two questions would do.",
  next: { name: "Back to Home", label: "DONE READING", href: "/" },
  footerNote: "Product Designer · Case study 04 of 04",
};
