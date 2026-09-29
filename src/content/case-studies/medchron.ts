import type { CaseStudy } from "../types";
import { row, shot } from "./helpers";

// Source: Figma "MedChron — Case Study" (24:160833) + Tablet (24:198440) + Mobile (24:208472).
export const medchron: CaseStudy = {
  slug: "medchron",
  name: "MedChron",
  metaTitle: "MedChron: From a box of medical records to a case you can argue",
  metaDescription:
    "I designed the workspace that turns thousands of pages of medical records into a chronology personal-injury attorneys can verify in one click.",
  sections: [
    {
      name: "Summary",
      pad: "hero",
      gap: 64,
      blocks: [
        {
          type: "hero",
          kicker: "CASE STUDY 01 · MEDCHRON · OMNISAI",
          title: "From a box of medical records to a case you can argue",
          lede: "Thousands of pages in. One chronology out, where every fact is one click from its source.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Product design + frontend" },
            { label: "SCOPE", value: "Patient workspace: details, sources, gaps, bills" },
            { label: "TIMELINE", value: "2 weeks · 2026" },
            { label: "TEAM", value: "1 Designer (me), 1 Engineer" },
          ],
        },
        {
          type: "heroPanel",
          compare: {
            before: shot("ba-medchron-before", "MedChron patient details, before", 1200, 1003),
            after: shot("ba-medchron-after", "MedChron patient details, after", 1200, 1003),
            aspect: 1200 / 760,
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
          text: "The densest data in the suite: thousands of pages, dozens of providers, years of treatment. My job was to turn all of it into one screen an attorney can read in seconds and prove line by line.",
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
          heading: "Who, what, constraint",
          body: "PI attorneys and paralegals. PDFs in, a patient workspace out. Every claim has to trace to a page.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              leftWidth: 440,
              kicker: "PROBLEM",
              heading: "Dense data, no hierarchy, no trust",
              body: "Four things got in the way.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                { title: "Flat chronology", body: "One long timeline. No way to see an injury and its cost together." },
                { title: "No provenance", body: "No visible source, so users re-read the PDFs." },
                { title: "Gaps by hand", body: "The most contested fact in PI, counted manually." },
                { title: "Hidden bill errors", body: "Data-quality problems buried in tables." },
              ],
            },
          ],
        },
        {
          type: "split",
          leftWidth: 440,
          kicker: "MY ROLE",
          heading: "IA and every screen shown",
          body: "Owned the IA and every screen here. Defined the source-citation pattern the suite now uses.",
        },
      ],
    },
    {
      name: "Before and after",
      gap: 40,
      blocks: [
        {
          type: "solutionHeader",
          leftWidth: 440,
          kicker: "BEFORE → AFTER",
          title: "Organise by how a case is built",
          outcome: "Drag the slider above. Three changes did most of the work.",
        },
        {
          type: "beforeAfter",
          changes: [
            { from: "Seven truncated tabs", to: "A side nav grouped by how a case is built" },
            { from: "Raw citation markers: [^9 ,^12]", to: "Numbered source pills that open the page" },
            { from: "Every region tagged 'Critical Issue'", to: "Severity that actually varies" },
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
          kicker: "SOLUTION 1 OF 3",
          title: "Provenance: a source pill on every fact",
          outcome: "Any extracted statement opens the exact page it came from.",
        },
        {
          type: "media",
          rows: [row([shot("24:165718", "Patient details, sources side sheet", 1200, 640)])],
        },
        {
          type: "decisions",
          items: [
            { text: "A numbered source pill on every finding.", why: "Checking the AI becomes one click." },
            { text: "Finding and source page side by side.", why: "Claim and evidence in one view." },
            { text: "One primitive, reused everywhere.", why: "CaseNotes and CasePro adopted it." },
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
          kicker: "SOLUTION 2 OF 3",
          title: "Treatment gaps: the argument, visualised",
          outcome: "Gaps in care, computed and plotted per injury. No spreadsheet.",
        },
        {
          type: "media",
          rows: [row([shot("24:168547", "Treatment gaps", 1200, 920)])],
        },
        {
          type: "decisions",
          items: [
            { text: "Gaps computed per injury.", why: "Too important to count by hand." },
            { text: "An adjustable threshold in days.", why: "The attorney sets the line." },
            { text: "Red for the accident, amber for a gap.", why: "Reads in seconds before a call." },
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
          kicker: "SOLUTION 3 OF 3",
          title: "Bills & treatments: totals you can defend",
          outcome: "Per-provider billing where bad data surfaces before the demand letter.",
        },
        {
          type: "media",
          rows: [
            row([
              shot("24:169409", "Bills overview", 588, 420),
              shot("24:170106", "Treatments overview", 588, 420.48),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "Every branch names its source file.", why: "Every number traces to a document." },
            { text: "Billed, paid and outstanding, always visible.", why: "That's what goes in the demand." },
            { text: "Warning icons on rows that need a human.", why: "Flag bad data, don't total it." },
          ],
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "Suite", label: "The source pill is now how CaseNotes and CasePro show AI output" },
      { value: "1 click", label: "from any AI fact to its source page" },
      { value: "0", label: "treatment gaps counted by hand" },
    ],
  },
  reflection:
    "The Chronological Overview rail is empty in half these screens. I designed the container before the content. Next time, content first.",
  next: { slug: "casenotes", name: "CaseNotes" },
  footerNote: "Product Designer, OmnisAI · Case study 01 of 04",
};
