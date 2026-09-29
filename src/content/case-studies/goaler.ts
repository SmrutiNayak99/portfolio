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
    "Amateur football is usually organised through WhatsApp groups and spreadsheets. Goaler is an iOS app I designed that gives players, team admins, organizers and referees each their own experience, built on one shared set of match, team and venue screens.",
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
          lede: "Amateur football matches are usually organised in group chats and spreadsheets. Goaler is an iOS app where players, team admins, organizers and referees each get a version built for their job, all working from the same match data.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Sole product designer" },
            { label: "SCOPE", value: "Onboarding and all four roles: player, team admin, organizer and referee" },
            { label: "TIMELINE", value: "2 months · 2024" },
            { label: "CONTEXT", value: "New product for a client, designed from scratch" },
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
          text: "Four different people take part in every match, and each needs something different from the app. One of them, the referee, uses it outdoors in bright sunlight with one hand while running the game. The challenge was keeping one consistent design system while still making it work in that setting.",
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
          body: "Goaler is for local leagues and pickup tournaments. A player checks match invites from the couch, a team admin gets eleven people to turn up and collects their fees, an organizer runs a tournament across several venues, and a referee officiates on a sunny pitch. Every new user finishes registration by choosing one of these roles, and from that point the app shows them a different home, menu and set of tools.",
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
              heading: "Four jobs, one match",
              body: "Every match involves four people doing very different jobs, and before Goaler each of them relied on a different tool. The app had to bring all of that into one place without forcing everyone through the same screens.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                { title: "Coordination was scattered", body: "Invites went out in group chats, payments happened in a separate wallet app, and scores were often only remembered by whoever was there." },
                { title: "Same data, different needs", body: "All four roles look at the same matches, players and venues, but each needs its own home screen that puts their most important tasks first." },
                { title: "The referee works in tough conditions", body: "Unlike the other three roles, the referee uses the app outdoors, with one hand, while timing a live match. Small text and buttons would fail there." },
                { title: "Real money changes hands", body: "Players pay match fees, teams pay tournament fees and referees get paid for their time, so every payment step had to be clear and trustworthy." },
              ],
            },
          ],
        },
        {
          type: "split",
          kicker: "MY ROLE",
          heading: "Sole designer, end to end",
          leftWidth: 440,
          body: "I was the only designer on the project. I researched each role, mapped the journey for each one, and defined the information architecture and the component system. I designed about 190 screens, including an onboarding questionnaire for each role, and worked with engineering until the app was fully built.",
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
          heading: "Shared screens, a separate home for each role",
          leftWidth: 440,
          body: "I started with the six core things the app deals with: matches, tournaments, teams, players, venues and referees. Each got one detail screen that every role reuses. On top of that, each role got its own home screen, navigation and accent colour, and the match and tournament creation wizards share the same step-by-step layout. The referee version became almost a separate product, with a dark theme, large buttons and live match controls up front.",
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
            "The player's home screen answers two questions straight away: when is my next match, and how am I playing. Accepting an invite and paying for a match takes three screens. After the game, players rate it in two steps and can check their stats, the leaderboard and a highlight reel.",
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
            { text: "I put each player's stats directly on the home screen.", why: "Players open the app to see how they're doing, so their stats sit on the first screen instead of several taps deep in the profile." },
            { text: "I combined the match invite, payment and confirmation into one continuous flow.", why: "Joining a match used to jump between screens that looked unrelated. One continuous flow in one visual language means a player always knows where they are and when they're done." },
            { text: "I split post-match rating into two steps: first the match, then the players.", why: "Rating the match first and the players second keeps each question small, so feedback stays specific instead of one vague score for everything." },
            { text: "I added short highlight reels as the social part of the app.", why: "Short clips give players a reason to come back between matches, and each reel can be public, team-only or private, so sharing never feels risky." },
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
            "The team admin looks after the squad and sets up games. They can add players by hand, import them, or share an invite link. A seven-step Create Game wizard ends with an overview they can share with the team and a confirmation that the game is created.",
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
            { text: "I gave the Create Game wizard one decision per screen and a progress indicator that stays visible.", why: "Team admins set up matches on the go and get interrupted constantly. One decision per screen, with progress always visible, lets them stop mid-way and pick up where they left off." },
            { text: "I placed the payment options inside the game setup flow.", why: "Collecting fees is part of setting up a match, not a separate job. Choosing how players pay inside the flow means it never gets set up later, or forgotten." },
            { text: "I let admins import players from their phone contacts or from a file.", why: "Most team admins already keep their players in their phone or a spreadsheet. Importing that list saves retyping a squad one name at a time." },
            { text: "I reused the same wizard layout for creating tournaments.", why: "Tournaments reuse the steps, layout and progress bar of a single match, so anyone who has created one match already knows how to set up a tournament." },
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
          title: "Run tournaments, book venues, find referees",
          leftWidth: 440,
          outcome:
            "The organizer runs whole tournaments. They create one with the same wizard used for single games, then follow the standings in a points table on the tournament page. Directories of venues and referees let them book pitches and staff every match from their phone.",
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
            { text: "I built the points table into the tournament details page.", why: "Organizers check standings between every round. Keeping the points table inside the tournament means they never leave it to find out who's ahead." },
            { text: "I designed venue listings to show facilities, pitch type and a photo.", why: "Picking a venue comes down to facilities and surface. Showing both up front, with a photo, answers the question before the organizer has to call anyone." },
            { text: "I made the referee directory sortable by rating and availability.", why: "Finding a referee used to happen over calls and messages. Sorting by rating and availability lets an organizer pick someone trusted and send the invite in one tap." },
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
          title: "A dark-themed tool for running a live match",
          leftWidth: 440,
          outcome:
            "The referee accepts match invites, then runs the game from the app. During the match they control the timer, score, cards and attendance. Before and after, they work through task lists that include taking photos. A dark theme cuts glare, and the main actions sit within thumb reach.",
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
            { text: "I kept the timer and score at the top of the live match screen and fixed the four key actions in a row at the bottom.", why: "A referee glances at the phone between whistles, often one-handed. Timer and score stay on top and the four most-used actions never move, so nothing needs scrolling mid-match." },
            { text: "I wrote each match invite to explain what accepting means and showed the payment status next to it.", why: "Each invite spells out what accepting commits them to, with payment status right beside it, so the referee knows what they're agreeing to and whether they'll be paid." },
            { text: "I gave referees a short task list before and after each game.", why: "Checks before kick-off and reports after the whistle are easy to forget between back-to-back matches. A short list for each means nothing slips." },
            { text: "I gave the referee version its own dark theme.", why: "Referees use the app outdoors in bright light. The dark, high-contrast theme is there for readability on the pitch, and only the referee gets it because only they need it." },
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
            "A few shared pieces hold the four versions together. Each role has menus in its own colour, every list of matches, players or venues uses the same filter component, and each role gets its own onboarding questionnaire. Success screens and notifications look and behave the same for everyone.",
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
      { value: "4", label: "roles in one app, so organising a match no longer depends on group chats" },
      { value: "1", label: "shared step-by-step layout behind both the game and tournament creation wizards" },
      { value: "1", label: "referee tool designed for use on the pitch, not on the couch" },
    ],
  },
  reflection: "The referee flow is the part I'm proudest of, but it is also the part I tested least. If I did this again, I would put it in the hands of a real referee during a match before anything else.",
  next: { name: "Back to Home", label: "DONE READING", href: "/" },
  footerNote: "Product Designer · Case study 04 of 04",
};
