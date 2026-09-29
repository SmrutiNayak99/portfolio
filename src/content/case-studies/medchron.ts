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
          body: "MedChron builds medical chronologies for personal-injury firms. PDFs of records, bills and imaging go in; a structured patient workspace comes out. Every claim has to trace to a page, and the tool serves two modes: deep review by a paralegal, and a 30-second answer for an attorney before a call.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              leftWidth: 440,
              kicker: "PROBLEM",
              heading: "Dense data, no hierarchy, no trust",
              body: "Four things made the old chronology hard to act on.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                { title: "Flat chronology", body: "One long timeline. No way to see an injury, its progression and its cost together." },
                { title: "No provenance", body: "AI findings had no visible source, so users re-read the PDFs to check them." },
                { title: "Gaps by hand", body: "Treatment gaps, the most contested fact in PI, were counted manually." },
                { title: "Hidden bill errors", body: "Bills spread across providers, with data problems buried in tables." },
              ],
            },
          ],
        },
        {
          type: "split",
          leftWidth: 440,
          kicker: "MY ROLE",
          heading: "IA and every screen shown",
          body: "Owned the workspace IA and every screen in this study. Defined the source-citation pattern the suite now uses, and designed the gap and pain-trend visualisations with the data team.",
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
          heading: "Organise by how a case is built",
          body: "The nav follows the order a case is assembled: diagnostics, clinical history, procedure and care, then data. A patient rail keeps identity in view. One citation primitive (pill, side sheet, page) is reused everywhere, and charts appear only where the data has shape.",
        },
        {
          type: "chips",
          indent: 440,
          items: [
            { label: "Diagnostics" },
            { label: "Clinical history" },
            { label: "Procedure & care" },
            { label: "Data & analytics" },
            { label: "Citation primitive" },
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
          leftWidth: 440,
          kicker: "BEFORE → AFTER",
          title: "What the redesign changed",
          outcome: "Drag the slider at the top of the page. Three changes did most of the work.",
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
          kicker: "SOLUTION 1 OF 5",
          title: "Patient details: the whole case in one scroll",
          outcome: "Summary, body diagram, timeline, vitals and history, top to bottom on one page.",
        },
        {
          type: "media",
          rows: [
            row([shot("24:162099", "Patient details, full page", 1200, 1960.75)]),
            row([
              shot("24:163268", "Process new medical records modal", 588, 311.46),
              shot("24:164520", "Patient details, timeline", 588, 440),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "A front and back body diagram anchors every injury.", why: "Each region links to its sources and pain level." },
            { text: "The timeline separates events from incidents.", why: "Hover for detail, scroll to explore." },
            { text: "Vitals show a trend and a status, not just a number.", why: "A reading means little without its direction." },
            { text: "Processing new records shows file count and size up front.", why: "No guessing what the AI is about to read." },
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
            { text: "Numbered source pills inline with every finding.", why: "Checking the AI becomes one click. Overflow collapses to '+N more'." },
            { text: "The side sheet groups sources by visit, finding beside page.", why: "Claim and evidence in one view." },
            { text: "One primitive, reused everywhere.", why: "CaseNotes and CasePro adopted it." },
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
          title: "Injuries & imaging: structured, not summarised",
          outcome: "Each injury carries codes, provider, dates and a pain trend. Imaging breaks down per spinal level.",
        },
        {
          type: "media",
          rows: [
            row([shot("24:167029", "Injuries", 1200, 720)]),
            row([
              shot("24:167873", "Imaging results", 780, 560),
              shot("24:168407", "Pain level hover", 452, 254.7, { bare: true, radius: 16 }),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            { text: "Pain trend shows peak, average, lowest and 'worsening vs intake'.", why: "That last one is the number attorneys quote." },
            { text: "ICD-10 codes and the diagnosing provider, visible without expanding.", why: "The facts a demand letter needs, at a glance." },
            { text: "Imaging normalised per level (L1–L2, L2–L3…) with normal and abnormal states.", why: "Every finding links back to its PDF." },
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
          title: "Treatment gaps: the argument, visualised",
          outcome: "Gaps in care, computed, thresholded and plotted per injury. No spreadsheet.",
        },
        {
          type: "media",
          rows: [row([shot("24:168547", "Treatment gaps", 1200, 920)])],
        },
        {
          type: "decisions",
          items: [
            { text: "A KPI strip: injuries flagged, longest gap, visits vs recommended.", why: "The answer before the chart." },
            { text: "An adjustable threshold in days, plus an injury filter.", why: "The attorney sets the line." },
            { text: "Red for the accident, amber for a gap over threshold.", why: "Reads in seconds. Hover shows the treatment, or how long there was none." },
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
          title: "Bills & treatments: totals you can defend",
          outcome: "Per-provider billing, with a review banner that surfaces bad data before the demand letter.",
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
            { text: "Provider, branches, bills, with the source file named on every branch.", why: "Every number traces to a document." },
            { text: "Billed, insurance-paid, patient-paid and outstanding, always visible.", why: "That's what goes in the demand." },
            { text: "Warning icons on rows that need a human.", why: "Flag bad data, don't total it." },
            { text: "Treatment rows expand to diagnosis and impressions, each cited.", why: "Detail on demand, never unsourced." },
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
      { value: "1", label: "workspace organised around injury, evidence and cost, replacing a flat timeline" },
      { value: "1 click", label: "from any AI fact to its source page" },
      { value: "0", label: "treatment gaps counted by hand: gaps and pain trends are computed and visual" },
      { value: "Flagged", label: "bill errors surfaced for review instead of silently totalled" },
    ],
  },
  reflection:
    "The Chronological Overview rail is empty in half these screens. I designed the container before the content. Next time, content first.",
  next: { slug: "casenotes", name: "CaseNotes" },
  footerNote: "Product Designer, OmnisAI · Case study 01 of 04",
};
