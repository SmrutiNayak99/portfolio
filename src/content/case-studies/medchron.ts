import type { CaseStudy } from "../types";
import { row, shot } from "./helpers";

// Source: Figma "MedChron — Case Study" (24:160833) + Tablet (24:198440) + Mobile (24:208472).
export const medchron: CaseStudy = {
  slug: "medchron",
  name: "MedChron",
  metaTitle: "MedChron: From a box of medical records to a case you can argue",
  metaDescription:
    "I designed a workspace that turns thousands of pages of medical records into a clear chronology for personal-injury attorneys, where every fact links to its source page in one click.",
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
          lede: "Personal-injury firms receive thousands of pages of medical records for each client. I designed the workspace that turns them into one clear chronology, where every fact links to the page it came from.",
        },
        {
          type: "meta",
          items: [
            { label: "ROLE", value: "Product design and frontend build" },
            { label: "SCOPE", value: "The patient workspace: details, sources, treatment gaps and bills" },
            { label: "TIMELINE", value: "2 weeks · 2026" },
            { label: "TEAM", value: "1 designer (me) and 1 engineer" },
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
          text: "MedChron handles the densest data in the OmnisAI suite: thousands of pages, dozens of providers and years of treatment for a single patient. My job was to turn all of it into one screen that an attorney can read in seconds and then prove, line by line, from the original records.",
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
          heading: "Who it's for and what it must do",
          body: "MedChron builds medical chronologies for personal-injury law firms. A firm uploads PDFs of medical records, bills and imaging reports, and MedChron turns them into a structured workspace for each patient. Every claim in that workspace has to trace back to a specific page, because the other side can challenge it. The tool also serves two kinds of use: a paralegal doing a detailed review, and an attorney who needs an answer in 30 seconds before a call.",
        },
        {
          type: "group",
          blocks: [
            {
              type: "split",
              leftWidth: 440,
              kicker: "PROBLEM",
              heading: "Dense data, no hierarchy, no trust",
              body: "The old chronology held the right information, but four problems made it hard for a legal team to act on it.",
            },
            {
              type: "cards",
              compact: true,
              items: [
                { title: "One flat timeline", body: "Everything sat on one long timeline, so there was no way to see an injury, how it progressed and what it cost together in one place." },
                { title: "No way to check the AI", body: "The AI's findings did not show where they came from, so users went back and re-read the PDFs to confirm each one before trusting it." },
                { title: "Treatment gaps counted by hand", body: "A treatment gap is a period when the patient got no care. It is the most contested fact in a personal-injury case, yet teams counted gaps manually." },
                { title: "Bill errors hidden in tables", body: "Bills were spread across many providers, and problems in the billing data were buried inside tables where they were easy to miss." },
              ],
            },
          ],
        },
        {
          type: "split",
          leftWidth: 440,
          kicker: "MY ROLE",
          heading: "What I owned",
          body: "I owned the information architecture of the patient workspace and designed every screen in this case study. I also defined the source-citation pattern that the rest of the suite now uses, and I worked with the data team to design the treatment-gap and pain-trend visualisations.",
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
          body: "I ordered the navigation the way a legal team builds a case: diagnostics first, then clinical history, then procedures and care, then data and analytics. A patient rail stays on screen so users always know whose records they are reading. I designed one citation pattern, a source pill that opens a side sheet showing the original page, and reused it everywhere. I only added charts where the data has a shape worth seeing, such as pain over time or gaps in care.",
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
          outcome: "Drag the slider at the top of the page to compare the old patient screen with the new one. Most of the improvement came from three changes: clearer navigation, sources you can open, and severity labels that mean something.",
        },
        {
          type: "beforeAfter",
          changes: [
            { from: "Seven tabs with labels cut off because they did not fit", to: "A side navigation grouped in the order a case is built" },
            { from: "Raw citation markers like [^9 ,^12] mixed into the text", to: "Numbered source pills that open the original page" },
            { from: "Every body region tagged 'Critical Issue', so nothing stood out", to: "Severity levels that vary, so the serious injuries are easy to spot" },
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
          outcome: "The patient details page puts the whole case on one scrolling page. From top to bottom it shows a summary, a body diagram of the injuries, a timeline, vitals and medical history, so an attorney can understand the patient without switching tabs.",
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
            { text: "I added a front and back body diagram that shows where every injury is.", why: "Attorneys need to see where the patient is hurt before they read a single note. Each region on the diagram links to its source records and shows the pain level for that area." },
            { text: "I split the timeline into two tracks, one for medical events and one for incidents.", why: "An event, like a doctor's visit, means something different in a case than an incident, like the accident itself, so keeping them apart makes the story easier to follow. Users can hover any point for detail and scroll to move through time." },
            { text: "I showed each vital sign with its trend and a status, not just the latest number.", why: "A single reading means little unless you know whether it is going up or down. Showing the trend and status makes changes stand out, so no one has to compare numbers across visits by hand." },
            { text: "I made the dialog for processing new records show the file count and total size before anything starts.", why: "Before the AI starts reading, attorneys can see how many files it is about to process and how large they are. That removes the guessing about what is included and how long it might take." },
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
          title: "Sources: every fact links to its page",
          outcome: "Every statement the AI pulls from the records now carries a small numbered pill. Clicking it opens the exact page the statement came from, so a user can check the AI's work in one click instead of searching through the PDFs.",
        },
        {
          type: "media",
          rows: [row([shot("24:165718", "Patient details, sources side sheet", 1200, 640)])],
        },
        {
          type: "decisions",
          items: [
            { text: "I placed numbered source pills directly beside every finding.", why: "Each pill opens the exact page behind the finding, so checking the AI takes one click. When a finding has many sources, the list collapses to '+N more' so the text stays easy to read." },
            { text: "I designed a side sheet that groups sources by visit and shows each finding next to its page.", why: "Clicking a pill opens this sheet without leaving the screen. Because each finding sits beside the page it came from, a user can read the claim and the evidence together and compare them directly." },
            { text: "I built the pills and the side sheet as one shared component instead of a MedChron-only feature.", why: "Because it was designed as a reusable part of the suite, other products could use it as it was. That is why CaseNotes and CasePro adopted the same pattern without any redesign." },
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
          outcome: "Instead of a written summary, each injury is shown as structured data: its diagnosis codes, the provider, key dates and a chart of pain over time. Imaging results are broken down by each level of the spine, so findings are easy to compare.",
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
            { text: "I designed a pain trend chart that shows the peak, average and lowest pain, plus whether pain is worsening compared with intake.", why: "Peak, average and lowest give the full picture of how the patient has felt. 'Worsening vs intake', meaning how pain now compares with the first assessment, is the figure attorneys actually quote, so it sits right beside the chart." },
            { text: "I put the ICD-10 diagnosis codes and the diagnosing provider directly on each injury row.", why: "A demand letter, the formal request for compensation sent to the other side, needs the diagnosis code and the name of whoever made the diagnosis. Showing both on the row means attorneys don't have to open every entry to find them." },
            { text: "I standardised imaging results by spinal level (L1–L2, L2–L3 and so on), marking each level as normal or abnormal.", why: "Radiology reports describe the spine in different ways, which makes them hard to compare. Putting every finding on the same set of levels makes them comparable, and each one still links back to its PDF." },
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
          outcome: "A treatment gap is a stretch of time when the patient received no care, and the other side often uses it to argue the injury was minor. MedChron now calculates these gaps, checks them against a threshold and plots them for each injury, so no one builds a spreadsheet by hand.",
        },
        {
          type: "media",
          rows: [row([shot("24:168547", "Treatment gaps", 1200, 920)])],
        },
        {
          type: "decisions",
          items: [
            { text: "I added a summary strip above the chart showing the injuries flagged, the longest gap, and visits compared with what was recommended.", why: "Attorneys want the answer before they study a chart. These three numbers tell them right away whether gaps in care are a problem in this case." },
            { text: "I let the attorney set the gap threshold in days and filter the chart by injury.", why: "What counts as a meaningful gap depends on the case. Letting the attorney choose the threshold keeps that judgment with them, instead of the product deciding for them." },
            { text: "I limited the chart to two highlight colors: red for the accident and amber for any gap longer than the threshold.", why: "With only two colors to learn, the chart can be read in seconds. Hovering any point shows the treatment on that day, or how long the patient went without care." },
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
          outcome: "Bills are organised by provider, so the team can see what each one charged. A review banner points out bad data before those totals go into the demand letter, where a wrong number would be hard to defend.",
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
            { text: "I structured billing as provider, then branch, then individual bills, with the source file named on every branch.", why: "Breaking each provider down this way shows exactly where every charge came from. Naming the source file on each branch means any number can be traced back to a real document if it is questioned." },
            { text: "I kept four totals always visible: billed, paid by insurance, paid by the patient, and still outstanding.", why: "These are the four numbers that go into a demand letter. Keeping them on screen means attorneys never have to click into a row to find them." },
            { text: "I added warning icons to bill rows that need a person to check them.", why: "When a line looks wrong, the icon asks someone to review it. Bad data gets flagged for attention instead of being quietly added to the total." },
            { text: "I made treatment rows compact by default, and each one expands to show the diagnosis and the doctor's impressions with citations.", why: "Closed rows keep a long treatment list easy to scan. When someone opens a row, the detail is there, and every part of it points to its source." },
          ],
        },
      ],
    },
  ],
  impact: {
    kicker: "IMPACT",
    heading: "What changed",
    rows: [
      { value: "Suite", label: "The source pill is now how CaseNotes and CasePro show where AI output comes from" },
      { value: "1", label: "workspace organised around each injury, its evidence and its cost, replacing one flat timeline" },
      { value: "1 click", label: "is all it takes to go from any AI finding to the page it came from" },
      { value: "0", label: "treatment gaps counted by hand, because gaps and pain trends are now calculated and charted" },
      { value: "Flagged", label: "bill errors are highlighted for review instead of being silently added to totals" },
    ],
  },
  reflection:
    "In half of these screens, the Chronological Overview rail is empty. I designed the container before I knew what content would fill it, and it shows. Next time I would start with the real content and design the container around it.",
  next: { slug: "casenotes", name: "CaseNotes" },
  footerNote: "Product Designer, OmnisAI · Case study 01 of 04",
};
