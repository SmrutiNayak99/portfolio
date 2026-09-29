import type { CaseStudy } from "../types";
import { panel, row, shot } from "./helpers";

// Source: Figma "CaseNotes — Case Study" (24:146673) + Tablet (24:233644) + Mobile (24:239858).
export const casenotes: CaseStudy = {
  slug: "casenotes",
  name: "CaseNotes",
  metaTitle: "CaseNotes: Turning a meeting recorder into a case-ready record",
  metaDescription:
    "CaseNotes records law-firm meetings and writes the notes with AI. It worked, but it was hard to use. I audited it, fixed the problems at the component level, and made every AI edit visible and reversible.",
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
          lede: "CaseNotes already worked, but it was hard to use: inconsistent screens, confusing controls and no way to see what the AI had changed. I audited the whole product and redesigned it so attorneys can find, check and correct their meeting notes.",
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
          text: "This was the first product I inherited instead of starting from scratch. Using it for the first time, I kept running into usability problems, so I audited every screen and rebuilt it.",
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
          body: "CaseNotes is an AI notetaker for law firms. A bot joins the Zoom, Google Meet or Teams call, records it, and writes a summary, a transcript and a list of action items. Attorneys use these notes as a record of what a client said, so a wrong or hidden AI edit can cause real problems in a case.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              kicker: "PROBLEM",
              heading: "It worked, but it was hard to use",
              body: "I went through the live product screen by screen and logged more than 60 usability issues. Most of them came from three underlying problems, so fixing those three would fix most of the list.",
            },
            {
              type: "cards",
              items: [
                { title: "Nothing looked the same twice", body: "Modals, buttons and date formats changed from screen to screen, so every page felt new and people had to relearn the basics each time." },
                { title: "Controls did unexpected things", body: "Clicking a meeting card could open it or start renaming it, and several tabs showed the same items twice, so people were never sure what a click would do." },
                { title: "Features didn't work as people expected", body: "Templates weren't actually applied to meetings the way firms set them up, and there was no settings page at all to control the product." },
              ],
            },
          ],
        },
        {
          type: "split",
          kicker: "MY ROLE",
          heading: "The audit and every screen after it",
          body: "I ran the audit on the live product, redesigned every core screen, and planned the new Settings area from scratch. I also wrote frontend code alongside the two engineers, so the designs shipped as they were drawn.",
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
          heading: "Audit → cluster → fix the system",
          body: "I audited the shipped product screen by screen and grouped the 60+ findings into five areas of work. Instead of patching each screen, I fixed the shared components underneath. For example, one standard for modals (600px wide, actions on the right, closes only when you choose) fixed dozens of issues at once. I looked at Fireflies and Otter for familiar patterns, then shipped each area and audited it again.",
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
      name: "Before and after",
      gap: 40,
      blocks: [
        {
          type: "solutionHeader",
          kicker: "BEFORE → AFTER",
          title: "Fix the system, not the symptom",
          outcome: "Fixing shared components instead of single screens meant one change improved every page that used it. Drag the slider to compare the old dashboard with the new one.",
        },
        {
          type: "beforeAfter",
          before: shot("ba-casenotes-dashboard-before", "CaseNotes dashboard, before", 1200, 750),
          after: shot("ba-casenotes-dashboard-after", "CaseNotes dashboard, after", 1200, 750),
          changes: [
            { from: "Stats with no clear meaning", to: "Four stats that each say what they count" },
            { from: "A paragraph of text on every meeting card", to: "One short row per meeting you can scan quickly" },
            { from: "Five overlapping tabs on each meeting", to: "Three clear tabs: Summary, Transcripts, Action items" },
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
          title: "Meeting details: AI output you can steer",
          outcome: "The meeting page is where attorneys spend most of their time. The summary, transcript, action items and edit history now share one layout, and attorneys can see what the AI changed, ask it to fix something specific, or undo it.",
        },
        {
          type: "media",
          rows: [
            row([shot("24:147131", "Meeting details, summary", 1200, 880)]),
            row([
              shot("24:147496", "Meeting details, transcripts", 588, 440),
              shot("24:147814", "Meeting details, action items", 588, 440),
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
            { text: "I added a version history, so any AI edit can be compared and reverted.", why: "Attorneys couldn't tell what the AI had changed in a summary. Every edit is now a version they can compare and roll back, because an AI edit nobody can see is a liability." },
            { text: "Regenerating a summary now starts by asking what should change.", why: "Regenerate used to return a fresh, random answer. Asking what should change first lets the attorney steer the AI toward the fix instead of re-rolling and hoping." },
            { text: "The transcript moved to its own tab instead of being squeezed beside the summary.", why: "A summary is only as good as what was actually said. Giving the transcript its own page makes it easy to check any AI claim against the source of truth." },
            { text: "Action items lead with who owns them, not the date.", why: "What matters is who has to do it, so the owner leads each item. I also cut the Helpful/All and Complete tabs, which showed the same items twice." },
            { text: "The recording player got more room, and every control got a tooltip.", why: "The player now runs to the edge of the sidebar, so it's easier to scrub, and every control has a tooltip, so nobody has to guess what an icon does." },
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
          outcome: "The dashboard now answers three questions the moment it opens: what happened, what's coming up, and what needs my attention. Scheduling a meeting takes one clear form instead of a confusing one.",
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
            { text: "I replaced a row of vague stats with four clearly defined ones.", why: "The old stat row looked busy but its numbers weren't defined. Each of the four KPIs now says exactly what it counts, so attorneys know what they're looking at." },
            { text: "Each meeting state has its own card: scheduled, live, done, cancelled, or bot didn't join.", why: "Every meeting state gets its own card, so status reads at a glance. When a bot didn't join, a tooltip explains why instead of leaving an empty slot." },
            { text: "Clicking a card opens the meeting; clicking its name renames it.", why: "Clicking a card used to either open it or start a rename. Now the card opens and the name renames: one clear affordance for each action." },
            { text: "The sidebar follows a layout people know from Otter.", why: "Many attorneys already know Otter, so the sidebar follows the same pattern: invite the bot, see what's coming up and find AI chats by day, with nothing new to learn." },
            { text: "I rebuilt the scheduling form so it's quicker to fill in and harder to lose.", why: "Start and end times sit side by side under aligned labels, and clicking outside no longer closes the modal, so a half-filled schedule is never lost." },
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
          title: "Lists, search & upload: lots of meetings, easy to find",
          outcome: "Firms collect hundreds of meetings. The list is now grouped by day, search tells you where each match was found, and uploading a recording no longer stops you from doing anything else.",
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
            { text: "Meetings are grouped under Today, Yesterday and each weekday, with a count for each group.", why: "Attorneys think in 'the call from yesterday', not in timestamps. Lists show the day with a count per group, and the exact time appears only once a meeting is open." },
            { text: "Tabs and filters split the list by status.", why: "One long list mixed every status together. Tabs and filter chips split it up, so attorneys can jump straight to the meetings they need." },
            { text: "Search results are split into meetings, transcripts and action items.", why: "A match can come from a meeting title, a line in a transcript or an action item. Results are split by type with the keyword highlighted, so it's clear where each one came from." },
            { text: "After an upload, a message explains that processing continues in the background.", why: "Long recordings take time to process. The success message says it's running in the background, so attorneys keep working instead of watching a spinner." },
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
          title: "Templates: you decide what the AI writes",
          outcome: "A template tells the AI what to write for a type of meeting. Firms now pick the sections they want, write their own instructions, and watch a preview of the meeting page update as they type.",
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
            { text: "I fixed how templates reached the AI before designing any new screens.", why: "Templates weren't reaching the AI correctly, so output ignored what firms had set up. I fixed that mapping first, because a polished editor would only have hidden the bug." },
            { text: "A live preview sits next to the template editor.", why: "Firms were writing prompts blind. The preview updates the meeting page as they type, so they see exactly what the AI will produce before they save." },
            { text: "New templates can start from an existing one.", why: "Most firms adjust a template that's already close rather than start from nothing. Starting from an existing one gets them to a working template in a few edits." },
            { text: "Leaving with unsaved changes asks before throwing them away.", why: "A good prompt takes effort to write. Leaving the editor with unsaved changes asks first, so that work is never thrown away without warning." },
            { text: "Firm-wide templates are tagged and protected from editing.", why: "Firm-wide templates carry a Global tag and hide edit and delete, so nobody can accidentally break the defaults everyone else relies on." },
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
          title: "Settings: designed from scratch",
          outcome: "CaseNotes had no settings at all. I planned the full structure (general, notifications, integrations and privacy), got it approved by the team, and only then designed the screens.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:152015", "Settings, general", 588, 349.13),
              shot("24:152163", "Settings, privacy", 588, 358.93),
            ]),
            row([
              shot("24:152411", "Settings, integrations", 780, 484.66),
              shot("24:152567", "Keyboard shortcuts", 452, 656, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "I planned where every setting lives before designing any screens.", why: "Settings was new, so I mapped every section and where it lives before designing a screen. Moving a box on paper is cheap; moving it after it ships is not." },
            { text: "A Privacy tab holds everything about recording consent.", why: "Recording a client meeting needs consent. A dedicated Privacy tab makes those settings easy to find, because in legal work consent is a feature, not fine print." },
            { text: "Keyboard shortcuts are listed on one sheet anyone can open.", why: "Shortcuts only help if people know they exist. A sheet anyone can open lists them all in one place, instead of burying them in help docs." },
          ],
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "60+", label: "usability issues fixed, most of them by changing a shared component once" },
      { value: "2", label: "new features: a version history for AI edits, and privacy settings for recording consent" },
      { value: "1", label: "bug found in how templates reached the AI, fixed before the new design could hide it" },
    ],
  },
  reflection: "Next time I'd look at usage data before starting the audit, so I could fix the most-used screens first. I'd also write the modal standard on day one: that single spec fixed more issues than any screen redesign.",
  next: { slug: "referral-program", name: "Referral Program" },
  footerNote: "Product Designer, OmnisAI · Case study 02 of 04",
};
