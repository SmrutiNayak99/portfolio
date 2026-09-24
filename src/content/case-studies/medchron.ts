import type { CaseStudy } from "../types";
import { row, shot } from "./helpers";

// Source: Figma "MedChron — Case Study" (24:160833) + Tablet (24:198440) + Mobile (24:208472).
export const medchron: CaseStudy = {
  slug: "medchron",
  name: "MedChron",
  metaTitle: "MedChron — From a box of medical records to a case you can argue",
  metaDescription:
    "Personal-injury attorneys receive thousands of pages of medical records per case. I designed the workspace where AI-extracted facts become a navigable, source-verified chronology — with the two views that decide a claim's value: treatment gaps and bills.",
  sections: [
    {
      name: "Summary",
      pad: "hero",
      gap: 64,
      blocks: [
        {
          type: "hero",
          kicker: "CASE STUDY 02 · MEDCHRON · OMNISAI",
          title: "From a box of medical records to a case you can argue",
          lede: "Personal-injury attorneys receive thousands of pages of medical records per case. I designed the workspace where AI-extracted facts become a navigable, source-verified chronology — with the two views that decide a claim's value: treatment gaps and bills.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Design Lead — product design + frontend across the patient workspace" },
            { label: "SCOPE", value: "Patient details, sources, injuries, imaging, treatment gaps, bills, treatments" },
            { label: "TIMELINE", value: "2 weeks · 2026" },
            { label: "TEAM", value: "1 Designer(me), 1 Engineer" },
          ],
        },
        { type: "heroPanel", image: shot("24:160854", "MedChron patient details", 1200, 824) },
      ],
    },
    {
      name: "Intro",
      pad: "intro",
      blocks: [
        {
          type: "statement",
          kicker: "WHY THIS ONE",
          text: "This was the product where the stakes of a wrong AI extraction were clearest — a missed treatment gap or an unverified date can cost a client real money. So the design question was never 'how do we show the data' but 'how do we let an attorney trust it in ten seconds.'",
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
          body: "MedChron builds medical chronologies for personal-injury law firms. Users are PI attorneys, paralegals and case managers. Input: PDFs of medical records, bills and imaging reports. Output: a structured patient workspace. The constraint: every claim must be traceable to a page in the record, and the tool has to serve two modes — deep review by a paralegal, and 30-second answers for an attorney before a call.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              leftWidth: 440,
              kicker: "PROBLEM",
              heading: "Dense data, no hierarchy, no trust",
              body: "Four things made the existing chronology hard to act on.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                {
                  title: "Flat chronology",
                  body: "Records arrived as one long timeline — no way to see an injury, its progression and its cost together.",
                },
                {
                  title: "No provenance",
                  body: "AI extraction had no visible source, so users re-read the PDFs to check it.",
                },
                {
                  title: "Gaps by hand",
                  body: "Treatment gaps — the most contested fact in PI negotiation — had to be computed manually.",
                },
                {
                  title: "Hidden bill errors",
                  body: "Bills were spread across providers and branches, with data-quality problems buried in tables.",
                },
              ],
            },
          ],
        },
        {
          type: "split",
          leftWidth: 440,
          kicker: "MY ROLE",
          heading: "Information architecture and every screen shown",
          body: "Owned the IA of the patient workspace and all the screens in this study. Defined the source-citation pattern used across the OmnisAI suite. Designed the treatment-gap and pain-trend visualisations with the data team.",
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
          body: "The left nav mirrors the order a case is assembled: Diagnostics → Clinical history → Procedure & care → Data. A persistent patient rail on the right keeps identity and matter in view at all times. One citation primitive — source pill → side sheet → page — is reused everywhere. Visualisation only where the data has shape: pain over time, gaps over time, body regions.",
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
      name: "Solution 1",
      blocks: [
        {
          type: "solutionHeader",
          kicker: "SOLUTION 1 OF 5",
          title: "Patient details: the whole case in one scroll",
          outcome: "Summary, body diagram, timeline, vitals and history read top to bottom without leaving the page.",
        },
        {
          type: "media",
          rows: [
            row([shot("24:162099", "Patient details — full page", 1200, 1960.75)]),
            row([
              shot("24:163268", "Process new medical records modal", 588, 311.46),
              shot("24:164520", "Patient details — timeline", 588, 440),
            ]),
          ],
        },
        {
          type: "decisions",
          items: [
            "The body diagram (front and back) anchors injuries spatially; each region card links to its sources and pain level.",
            "The medical timeline separates events from incidents — hover for detail, scroll to explore.",
            "Vitals show a trend and a status chip, not just a number.",
            "The records-processing modal lets users pick files and extract with a clear file count and size.",
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
          outcome: "Any extracted statement opens the exact record page it came from.",
        },
        {
          type: "media",
          rows: [row([shot("24:165718", "Patient details — sources side sheet", 1200, 640)])],
        },
        {
          type: "decisions",
          items: [
            "Numbered source pills sit inline with every finding; overflow collapses to '+N more'.",
            "The side sheet groups sources by provider visit, with page references and the AI's finding side by side.",
            "The same primitive was later adopted in CaseNotes and CasePro.",
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
          outcome:
            "Each injury carries codes, provider, dates and a pain-level trend; imaging is broken down per spinal level with impressions and recommendations.",
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
            "Pain trend shows peak, average and lowest, plus 'worsening vs intake' — the number attorneys quote.",
            "ICD-10 codes and the diagnosing provider are visible without expanding.",
            "Imaging findings are normalised per level (L1–L2, L2–L3…) with NORMAL / abnormal states and a link to the source PDF.",
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
          outcome: "Gaps in care are computed, thresholded and shown per injury on a timeline — no spreadsheet.",
        },
        {
          type: "media",
          rows: [row([shot("24:168547", "Treatment gaps", 1200, 920)])],
        },
        {
          type: "decisions",
          items: [
            "KPI strip: injuries flagged, longest gap, total visits, recommended visits.",
            "Adjustable flag threshold in days, plus an injury filter.",
            "Red marks the accident; amber marks a gap over threshold. Hover reveals the treatment — or 'no treatment' and its duration.",
            "Treatment summary by type under each injury.",
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
          outcome:
            "A per-provider billing summary with doctors, dates and branches; a review banner surfaces data-quality issues before they reach a demand letter.",
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
            "Provider → branches → bills hierarchy, with the source file named on every branch.",
            "Billed, insurance-paid, patient-paid and outstanding are always visible; warning icons flag rows that need a human.",
            "Treatment rows expand to diagnosis, impressions and description, each with citations.",
          ],
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "1", label: "workspace organised around injury → evidence → cost, replacing a flat chronology" },
      { value: "Suite", label: "citation pattern adopted across the suite — CaseNotes and CasePro" },
      { value: "Zero", label: "spreadsheets: treatment gaps and pain trends went from manual to computed and visual" },
      { value: "Flagged", label: "bill errors surfaced for human review instead of silently propagating" },
    ],
  },
  reflection:
    "The right rail's Chronological Overview is empty in half these screens — a sign I designed the container before the content. Next time I'd define what fills it first.",
  next: { slug: "casenotes", name: "CaseNotes" },
  footerNote: "Design Lead, OmnisAI · Case study 02 of 04",
};
